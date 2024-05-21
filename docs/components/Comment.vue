<script setup>
import "gitalk/dist/gitalk.css";
import Gitalk from "gitalk";
import { onMounted } from 'vue';
onMounted(() => {
  if(typeof window !==undefined){
    var s_div = document.createElement('div');   // 创建节点
    s_div.setAttribute("id", "gitalk-page-container");   // 设置id
    document.querySelector('.content-container').appendChild(s_div);   // querySelector的节点可自己根据自己想加载的地方设置
    var gitalk = new Gitalk({  //（上面的都不要改，从这里开始填写信息）
      clientID: 'Ov23liTwz2CXxwzp9bPq',          // 填写之前创建OAuth App保存的clientID
      clientSecret: 'cb0a2a26997e9ce5ced9c301a07d2c9713d06f0d',  // 填写之前创建OAuth App保存的clientSecret
      repo: 'yizhigee.github.io',          // 填写你用于存放评论的仓库名，注意需要仓库打开了issues功能（一般默认打开）
      owner: 'yizhigee',   // 填写你的github用户名
      admin: ['yizhigee'], // 填写github管理者列表
      id: decodeURI(location.pathname),      // 不变，Ensure uniqueness and length less than 50
      distractionFreeMode: false  // 不变，Facebook-like distraction free mode
    })
    gitalk.render('gitalk-page-container')
  }
})
</script>
<div id="gitalk"></div>
