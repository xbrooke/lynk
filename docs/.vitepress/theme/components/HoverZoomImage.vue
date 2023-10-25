<template>
    <div class="center-zoom-image">
      <img :src="imageSrc" :alt="imageAlt" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageSrc: String, // 图片路径
      imageAlt: String, // 图片描述
    },
  };
  </script>
  
  <style scoped>
  /* 图片居中显示 */
  .center-zoom-image {
    text-align: center;
  }
  
  /* 图片的初始大小 */
  .center-zoom-image img {
    width: 150px; /* 调整宽度 */
    height: auto; /* 高度自适应 */
    transition: transform 0.2s;
  }
  
  /* 添加悬浮放大效果的样式 */
  .center-zoom-image:hover img {
    transform: scale(1.8); /* 根据需要调整放大比例 */
  }
  </style>
  