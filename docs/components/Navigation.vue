<template>
  <div v-for="(item, index) in data" :key="index" class="content">
    <div @click="handleToJump(item)" class="box">
      <h3>{{ item.title }}</h3>
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const data = ref([
  {
    title: 'VitePress',
    desc: '由 Vite 和 Vue 驱动的静态站点生成器,',
    link: 'https://vitepress.dev/zh/'
  },
  {
    title: 'React',
    desc: '用于构建 Web 和原生交互界面的库,',
    link: 'https://react.docschina.org/'
  },
  {
    title: 'MDN',
    desc: '面向 Web 开发者的文档',
    link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript'
  },
])

const handleToJump = (item) => {
  window.open(item.link)
}
</script>
<style lang="less" scoped>
/*.VPContent {
  .container {
    margin: 0 !important;
  }
}*/
.box {
  border: 1px solid #ccc;
}
</style>

