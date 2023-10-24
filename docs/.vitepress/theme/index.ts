import DefaultTheme from 'vitepress/theme'
//首页组件
import Background from './components/Background.vue'
import SpotlightCursorText from './components/SpotlightCursorText.vue'
//首页组件
import './custom.css'
import './var.css'
import Layout from './components/Layout.vue'
//import Utterances from './components/Utterances.vue'
import Giscus from '@giscus/react';


export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // app.component('RunCode', RunCode)
    // app.component('XMindViewer', XMindViewer)
    app.component('Background', Background)
    app.component('SpotlightCursorText', SpotlightCursorText)
   // app.component('Utterances', Utterances)
   return (
    <Giscus
      id="comments"
      repo="xbrooke/lynk"
      repoId="R_kgDOKgeenQ"
      category="Announcements"
      categoryId="DIC_kwDOKgeenc4CaZba"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="zh-CN"
      lang="en"
      loading="lazy"
    />
  );
   
  }
}

