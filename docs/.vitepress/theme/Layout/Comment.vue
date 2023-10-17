<!-- Comment.vue -->
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { inBrowser } from 'vitepress'
import Gitalk from 'gitalk'

const commentRef = ref<HTMLElement | null>(null)

const init = () => {
  if (inBrowser) {
    const wrap = document.createElement('div')
    wrap.setAttribute('id', 'gitalk-page-container')
    commentRef.value?.appendChild(wrap) // 把组件加入到想加载的地方 // querySelector的节点可自己根据自己想加载的地方设置
    gitTalk = new Gitalk({
      id: location.pathname, // 可选。默认为 location.href
      owner: 'xbrooke', // GitHub repository 所有者
      repo: 'gitalk-comments', // GitHub repo
      clientID: '586540a11b02979040a3', // clientID
      clientSecret: '92822779b2a9dca29357708482da85522c066e7e', // clientSecret
      admin: ['xbrooke'], // GitHub repo 所有者
      labels: ['GitTalk'], // GitHub issue 标签
      proxy:
        'https://mellifluous-bombolone-049a57.netlify.app/github_access_token',
      createIssueManually: true //如果当前页面没有相应的 issue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
    })
    gitTalk.render('gitalk-page-container')
  }
}

onMounted(() => {
  init()
})
</script>
<template>
  <div class="commentRef"></div>
</template>