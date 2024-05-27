---
title: js相关
---
# 常用插件包使用
## lodash
```shell
pnpm i lodash
```
```jsx
// 引入插件包
import _ from 'lodash';
```
### groupBy
```jsx
 // 第一个参数数据,第二个参数条件
 _.groupBy(billList, item=>dayjs(item.date).format('YYYY-MM'))
```

