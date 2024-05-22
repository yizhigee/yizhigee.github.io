<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
import md5 from "md5"
import Gitalk from "gitalk"
import "gitalk/dist/gitalk.css"
export default {
  name: "git-talk",
  data() {
    return {}
  },
  mounted() {
    const commentConfig = {
      clientID: 'Ov23liTwz2CXxwzp9bPq', // clientSecret
      clientSecret: 'cb0a2a26997e9ce5ced9c301a07d2c9713d06f0d', // clientSecret
      repo: 'yizhigee.github.io', // 存放评论的仓库名
      owner: 'yizhigee', // github用户名
      admin: ['yizhigee'], // github管理者列表
      id: md5(location.pathname),
      distractionFreeMode: false,
    }
    const gitalk = new Gitalk(commentConfig)
    gitalk.render("gitalk-container")
  },
}
</script>
<style>
.gt-container .gt-header-textarea {
  color: #000;
}
</style>

