---
title: prettier格式化
---

## 安装依赖
```sh
pnpm i prettier
```
## 根目录创建文件.prettierrc.js
```js
module.exports = {
  bracketSpacing: true,
  singleQuote: true, // 单引号
  arrowParens: 'avoid',
  trailingComma: 'none',
  semi: false, // 末尾不带分号
  printWidth: 100 // 将代码行的最大字符数设置为100
}

```
## 解决和eslint的冲突
```sh
pnpm i eslint-config-prettier
```
```js
// 避免与 prettier 冲突
extends: ['plugin:prettier/recommended'], 
```
