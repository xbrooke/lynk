import DefaultTheme from 'vitepress/theme'
// import RunCode from './plugins/run-code/RunCode.vue'
// import XMindViewer from './plugins/xmind-viewer/XMindViewer.vue'
import Background from './components/Background.vue'
import './custom.css'
import './var.css'
import Layout from './components/Layout.vue'
import SpotlightCursorText from './components/SpotlightCursorText.vue'
import MyLayout from './MyLayout.vue'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    // app.component('RunCode', RunCode)
    // app.component('XMindViewer', XMindViewer)
    app.component('Background', Background)
    app.component('SpotlightCursorText', SpotlightCursorText)
  }

}
