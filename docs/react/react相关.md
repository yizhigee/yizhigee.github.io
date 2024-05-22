---
title: react初学习
---

## 创建Vite项目
```sh
pnpm create vite
```
## jsx
### 优点
1. html 声明式模版写法
2. js的编程能力
### jsx本质
jsx 是js语法的扩展，浏览器本身不能识别，需要通过解析工具做解析[babel](https://www.babeljs.cn/) 解析之后才能在浏览器中运行
### jsx使用
![img.png](images/jsx.png)

## 渲染流程
App.js ——> main.js——> index.html(root)

## 组件间的通信
### prop
```jsx
// 父 -> App
const App = () => {
    const name = 'this is xiao liu'
    return (
        <div>
            <Communication name={name} child={<span>this is span</span>}>
                <p>哈哈哈这是p</p>
            </Communication>
        </div>
    )
}
```
```jsx
// 子 -> Communication
const Communication = (props) => {
    return (
        <div>
            {props.name}
            <br/>
            jsx:{props.child}

            {props.children}
        </div>
    );
};
```
        
> 如果把内容嵌套在了子组件的标签中，父组件会自动在名为children的prop属性中接收该内容

![img.png](images/props.png)

### 子传父
```jsx
// 子 -> Communication02
const Communication02 = ({ onGetCommunication}) => {
    const msg = 'this is communication msg'
    return (
        <div>
            <button onClick={() => onGetCommunication(msg)}>点击</button>
        </div>
    );
};
```
```jsx
// 父 -> App
const App = () => {
    const getMsg = (msg) => {
        console.log('app-msg', msg)
        setContent(msg)
    }
    const [content,setContent] = useState('')
    return (
        <div>
            {content}
            <Communication02 onGetCommunication={getMsg}/>
        </div>
    )
}
```
> 在子组件中调用父组件中的函数并传递参数

## 相关api
### useState 状态变量
> useState 状态变量
> 状态只是可读的,应该使用setCount替换它而不是修改它,直接修改不能引发视图更新
### useRef
> useRef 获取当前元素绑定的dom对象 .current 属性
### createContext 跨组件通信
> 使用 createContext 创建组件能够提供与读取的 上下文（context） <br/>
> 变量名首字母大写
> 在使用的地方用useContext获取

**使用**

```jsx
//  App->Communication03->Communication04
// 在04中使用App中的属性
export const MsgContext = createContext()
const App = () => {
    const [name,setName] = useState('')
    const getMsg = (msg) => {
        setName(msg)
    }
    return (
        <div>
            <MsgContext.Provider  value={name}>
                <Communication03 name={name}/>
            </MsgContext.Provider >
        </div>
    )
}
```
```jsx
const Communication03 = () => {
    return (
        <div>
            this is communication 03.... <br/>
            <Communication04/>
        </div>
    );
};
```
```jsx
const Communication04 = () => {
    const msg = useContext(MsgContext)
    return (
        <div>
            this is communication 04....{msg} <br/>

        </div>
    );
};
```
### useEffect
> 浏览器渲染完成之后执行，类似于vue中的mounted
![img.png](images/useEffect.png)
![img.png](images/clearUseEffect.png)

### StrictMode
> 严格模式
> 
> 严格模式启用了以下仅在开发环境下有效的行为
> 
> 接口会渲染两次
> 
> 一些错误刚开始看的时候没什么问题，渲染多次则会发生问题，帮助发现错误
```jsx
// main.js
<StrictMode>
  <App />
</StrictMode>
```

### 自定义hooks
```jsx
import {useState} from 'react';

const useToggle = () => {
  const [value, setValue] = useState(true)
  const toogleClick = () => setValue(!value)
  return {value, toogleClick}
}

const CustomHooks= () => {
  const {value ,toogleClick} = useToggle();
  return (
    <div>
      {value && <div>this is div</div>}
        <button onClick={toogleClick}>toggle</button>
    </div>
  );
};

export default CustomHooks;

```
### ReactHooks使用规则
> 1.只能在组件中或者其他自定义Hook函数中调用
> 
> 2.只能在组件的顶层调用, 不能嵌套在if判断 、for循环 、其他函数中


## 样式变化
**class 得写成 className**
```html
<span className='foo'>this is span </span>
```
![img.png](images/useState.png)



<p style="color: #FFD3A5">未完待续....</p>


<git-talk/>
