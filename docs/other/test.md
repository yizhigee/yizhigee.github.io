---
# 你的页面配置，比如标题
---

<script setup>
import Test from '../components/Test.vue'
</script>

# 测试
### 114454
#### 1245457

```jsx
 print() {
      const printElementHtml = document.querySelector('#shipping-list-content').innerHTML
      const printElementCss = `
        @media print {
          body { font-size: 14px; }
          .el-table { border-collapse: collapse; }
          .el-table th, .el-table td {
            border: 1px solid #000;
            text-align: center;
            vertical-align: middle;
          }
          /* 设置页面边距为零 */
          @page {
            margin: 0;
          }
        }
      `
      printHTML(printElementHtml, printElementCss)
    }
```
<!-- <ClientOnly> -->
  <Test />
<!-- </ClientOnly> -->
