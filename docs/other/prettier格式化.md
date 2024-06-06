---
title: prettier格式化
---

## 安装依赖
```sh
pnpm i prettier
```
## 根目录创建文件.prettierrc.js
```js
// @ts-check

/** @type {import("prettier").Config} */
export default {
  printWidth: 120, // 每行字符数
  tabWidth: 2, // 缩进长度
  useTabs: false, // 缩进类型 如果为 true，则使用 Tab 进行缩进；如果为 false，则使用空格进行缩进
  semi: false, // 是否使用分号
  singleQuote: true, // 是否使用单引号
  trailingComma: 'es5', // 是否使用尾逗号
  bracketSpacing: true, // 括号内是否使用空格 例如，{ foo: bar }
  arrowParens: 'avoid', // 箭头函数参数是否使用括号
}

```
## 在项目中应用 Prettier
```shell
npx prettier --write .
```
## 提交代码前自动格式化

```json
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "**/*.(js|jsx|ts|tsx)": [
      "prettier --write",
      "git add"
    ]
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
