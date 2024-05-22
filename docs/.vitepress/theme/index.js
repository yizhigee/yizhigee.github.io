import Theme from 'vitepress/theme'
import './style/var.css'
import GitTalk from '../../components/GitTalk.vue'
export default {
    ...Theme,
    enhanceApp(ctx) {
        Theme.enhanceApp(ctx)
        ctx.app.component("git-talk", GitTalk)
    },
}
