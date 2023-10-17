import DefaultTheme from 'vitepress/theme'
// import RunCode from './plugins/run-code/RunCode.vue'
// import XMindViewer from './plugins/xmind-viewer/XMindViewer.vue'
import Background from './components/Background.vue'
import './custom.css'
import './var.css'
import Layout from './components/Layout.vue'
import SpotlightCursorText from './components/SpotlightCursorText.vue'
import Comment from "./components/Comment.vue"

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // app.component('RunCode', RunCode)
    // app.component('XMindViewer', XMindViewer)
    app.component("Comment", Comment);
    app.component("Tags", Tags);
    app.component("Docs", Docs);
    app.component("Friendship", Friendship);
    app.component("Print", Print);
    app.component("Diary", Diary);
    app.component('Background', Background)
    app.component('SpotlightCursorText', SpotlightCursorText)
  }

}
