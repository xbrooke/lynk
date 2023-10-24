<template>
    <div>
      <!-- Giscus 评论容器 -->
      <div
        id="giscus"
        data-repo="xbrooke/lynk-giscus"
        data-repo-id="R_kgDOKkX5JA"
        data-mapping="pathname"
        data-category="Q&A"
        data-reactions-enabled="1"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // 加载 Giscus
      const script = document.createElement('script');
      script.src = 'https://giscus.app/client.js';
      script.async = true;
      document.getElementById('giscus').appendChild(script);
    },
  };
  </script>
  