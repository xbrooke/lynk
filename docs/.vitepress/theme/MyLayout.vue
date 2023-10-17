<!--.vitepress/theme/MyLayout.vue-->
<template>
    <Layout>
      <template #doc-after>
        <div class="comment-container"></div>
      </template>
    </Layout>
  </template>
  
  <script setup>
  import { onMounted, watch } from 'vue';
  import 'gitalk/dist/gitalk.css';
  import Gitalk from 'gitalk';
  import DefaultTheme from 'vitepress/theme';
  import { useRoute } from 'vitepress';
  
  const { Layout } = DefaultTheme;
  
  const route = useRoute();
  
  const emptyNode = (node) => {
    //循环删除子元素，一直删除第一个子元素直到没有子元素即为清空
    while (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }
  };
  
  const initGitalk = () => {
    if (typeof window !== undefined) {
      const s_div = document.createElement('div'); // 创建节点
      s_div.setAttribute('id', 'gitalk-page-container'); // 设置id
      const container = document.querySelector('.comment-container'); // querySelector的节点可自己根据自己想加载的地方设置
      if (container) {
        emptyNode(container);
        container.appendChild(s_div);
        const gitment = new Gitalk({
          id: { name: `${location.pathname.replace(/\W/g, '')}` }, // 可选。默认为 location.href
          owner: 'xbrooke', // GitHub repository 所有者
          repo: 'gitalk-comments', // GitHub repository
          clientID: '586540a11b02979040a3', // 自己的clientID
          clientSecret: '92822779b2a9dca29357708482da85522c066e7e', // 自己的clientSecret
          admin: ['xbrooke'], // GitHub repository 所有者
          labels: [{ name: 'Gitalk' }], // GitHub issue 的标签
          createIssueManually: true, //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
          // proxy: "https://vercel.younglina.top/github_access_token",
        });
        gitment.render('gitalk-page-container');
      }
    }
  };
  onMounted(initGitalk);
  
  watch(
    () => route.path,
    () => {
      initGitalk();
    }
  );
  </script>
  