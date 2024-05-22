import Theme from 'vitepress/theme'
import './style/var.css'
import Gitalk from '../../components/Gitalk.vue'
export default {
    ...Theme,
    enhanceApp(ctx) {
        Theme.enhanceApp(ctx)
        ctx.app.component("git-talk", Gitalk)
    },
}
