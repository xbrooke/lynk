<template>
    <div>
      <!-- 这里放置 Giscus 评论框的容器 -->
      <div ref="giscus"></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // 在组件挂载后初始化 Giscus 评论框
      const script = document.createElement('script');
      script.src = 'https://giscus.app/client.js';
      script.async = true;
      script.setAttribute('data-repo', 'xbrooke/lynk-giscus');
      script.setAttribute('data-repo-id', 'R_kgDOKkX5JA');
      script.setAttribute('data-category', 'Q&A');
      script.setAttribute('data-category-id', 'DIC_kwDOKkX5JM4CaZYg');
      script.setAttribute('data-mapping', 'pathname');
      script.setAttribute('data-strict', '0');
      script.setAttribute('data-reactions-enabled', '1');
      script.setAttribute('data-emit-metadata', '0');
      script.setAttribute('data-input-position', 'bottom');
      script.setAttribute('data-theme', 'preferred_color_scheme');
      script.setAttribute('data-lang', 'zh-CN');
      script.crossOrigin = 'anonymous';
  
      script.onload = () => {
        // 渲染 Giscus 评论框
        const giscusConfig = {
          repo: 'xbrooke/lynk-giscus',
          repoID: 'R_kgDOKkX5JA',
          mapping: 'pathname',
          category: 'Q&A',
        };
        new Giscus(giscusConfig).render(this.$refs.giscus);
      };
  
      this.$refs.giscus.appendChild(script);
    },
  };
  </script>
  