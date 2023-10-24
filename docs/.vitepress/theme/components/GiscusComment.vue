<template>
    <div>
      <div ref="giscus"></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      if (window.giscus) {
        window.giscus('render', {
          repo: 'xbrooke/lynk-giscus', // 将此处替换为你的 GitHub 仓库名称
          mapping: 'pathname',
        });
      }
    },
  };
  </script>
  