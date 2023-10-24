export default ({ router }) => {
    router.afterEach(() => {
      // 添加 Giscus 评论系统到页面底部
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://giscus.app/client.js'; // Giscus 的 URL
      script.setAttribute('data-repo', 'xbrooke/lynk-giscus'); // 替换为你的 GitHub 仓库名称
      script.setAttribute('data-repo-id', 'R_kgDOKkX5JA'); // 替换为你的 GitHub 仓库 ID
      script.setAttribute('data-category', 'Comments');
      script.setAttribute('data-category-id', 'MDEwOlJlcG9zaXRvcnkzMzg3NTM2OTU=');
      script.setAttribute('data-mapping', 'pathname');
      script.setAttribute('data-term', 'pathname');
      script.setAttribute('data-reactions-enabled', '1'); // 是否启用回应（可以根据需要更改）
      script.setAttribute('data-theme', 'light'); // 评论系统主题，可以选择 'light' 或 'dark'
  
      const commentsContainer = document.getElementById('comments'); // 创建一个 div 元素来容纳评论
      if (commentsContainer) {
        commentsContainer.appendChild(script);
      }
    });
  };
  