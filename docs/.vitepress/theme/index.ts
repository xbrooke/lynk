import DefaultTheme from 'vitepress/theme'
//首页组件
import Background from './components/Background.vue'
import SpotlightCursorText from './components/SpotlightCursorText.vue'
//首页组件
import './custom.css'
import './var.css'
import Layout from './components/Layout.vue'
//import Utterances from './components/Utterances.vue'
import GiscusComment from './components/GiscusComment.vue'
import Modal from './components/Modal.vue'
import HoverZoomImage from './components/HoverZoomImage.vue'



export default {
  ...DefaultTheme,
	Layout,
  enhanceApp({ app }) {
    // app.component('RunCode', RunCode)
    // app.component('XMindViewer', XMindViewer)
    app.component('Background', Background)
    app.component('SpotlightCursorText', SpotlightCursorText)
   // app.component('Utterances', Utterances)
   app.component('GiscusComment', GiscusComment)
   app.component('Modal', Modal)
   app.component('HoverZoomImage', HoverZoomImage)
  


 


  }
}

