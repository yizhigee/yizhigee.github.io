---
title: vue相关
---

## 解决ts不识别.vue后缀的文件
**解决方案: 创建.d.ts文件 例如env.d.ts**
```ts
declare module '*.vue' {
  import { DefineComponent } from 'vue';

  const component: DefineComponent<{}, {}, any>;
  export default component;
}
```
```ts
"include": [
    ...,
    "env.d.ts"
  ],
```
