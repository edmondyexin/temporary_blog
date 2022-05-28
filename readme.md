## description
  准备用于搭建属于自己的博客网站

### 时间
    预计两周的时间
### 技术栈
    React + java|Node
    React框架打的还需要自己的去了解和使用，尽量采用适配移动端和PC端的方式

## 需求
### 前端界面
  主要由两个部分组成，第一部分，作为展示提供
* 查看博文
* 查看博文历程
* 查看博客建立
* 提供评论和回复功能
  
  第二部分，作为博文管理部分
  * 博文编辑
  * 博文增加
  * 博文删除
  * 博文导入
  * 博文美化
  * 流量统计
  对应的操作 被日志所记录 

## 进度
### 1115 
* 寻找了github类似的项目，用于了解大概可以有什么的技术栈可以考虑学习和使用以及别人的做的亮点
* 大概看了一圈考虑如下
  * 使用 `create-react-app` 和`create-react-library` 进行开发 采用`webpack 4.0` 和`esBuild`进行打包 React学习React 17 语言采用`typescript` 使用`babel`进行转译  **不考虑支持IE浏览器等不支持`ES6`的浏览器**
  * 前期可以使用一些UI库，加快，后面就会慢慢替换（如果有时间）
  * 了解一下React 17 （自己走的udemy课程学习的应该是React16 挑战全英教程，自己还是多少有些力不从心) 然后看了下 ，惊喜的发现没有任何新特性但还是有一些变化
  * 寻找一个自己喜欢的博客（一定要自己喜欢，才有继续做下去的动力，然后模仿） 
    * 推荐的hexo博客 Keep风格 [keep](https://xpoet.cn/)
    * 确定一下开发方式 先制作背景界面，实现PC和移动端适配 然后逐步增加内容
  * 这里尽量采用TS和ES6的语法 贯穿一下TS和ES6的复习 顺便在样式这一方面，使用less 原来经常使用scss 正好学习一下
  * 主题准备 白天和夜晚模式 并能够自动识别切换和手动切换 风格力求简洁 就选择白色和黑灰两种背景色
  * 博客封面决定向keep的那个主题一样，制作一个动态的但是比较简单的svg图
  * 参考一些demo 博客 
    * [demo1](https://juejin.cn/post/6844903513768755214) 
    * [demo2](https://juejin.cn/post/6844903513768755214)
    * [原理](https://juejin.cn/post/6844904074127605767)
    * [library](https://juejin.cn/post/6930412294149472269)
    * [MDN](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial)
    * [SVG animation demo](https://juejin.cn/post/6844903476464615437)
  * 预计搭建一个svg制作的海滩背景图书 更好配合自己的花名液心 大概含有海鸥（仅煽动翅膀） 排球 跳动 和摇动树叶的椰子树 

### 1117
  绘制背景大图 想要完成一个动画图
  https://segmentfault.com/a/1190000039168072
  https://www.tweenmax.com.cn/api/timelinemax/
  https://greensock.com/docs/
  https://svg-animation-booklet.vercel.app/chapter6.html#%E5%87%86%E5%A4%87%E7%9F%A2%E9%87%8F%E6%96%87%E4%BB%B6
  https://svgedit.netlify.app/editor/index.html
  https://yqnn.github.io/svg-path-editor/

  

  https://greensock.com/react 使用react js等元素完成动画

### 11 18
  白天尽量先完成一个主体功能，晚上再继续制作svg图等简单的动画效果

  codepen 参考案例
  [纸飞机](https://codepen.io/FabioG/pen/MaZpJp)
  [黑白小镇](https://codepen.io/lisilinhart/details/MoqMQq)
  [四色旋转方块](https://codepen.io/catcode/pen/dFsEr)
  [第三方库](https://www.svgator.com/)

  准备开始做一下静态界面的处理
  md文档渲染到前端的界面 这里先做一下 about me的demo
  考虑到后面的文档都是希望后面自己加入md文档或者书写md文档来完成

  markdown 编译器插件和markdown渲染插件
  `for-editor` `react-markdown` 
  代码高亮 `react-syntax-highlighter` 
  目录生成 `markdown-navbar` 

  阅读`react-markdown` 的英文文档，内置就有很多推荐的插件(reac-markdown)(https://github.com/remarkjs/react-markdown)

  本地导入测试
  参考思否的链接
  [segmentfault](https://segmentfault.com/a/1190000020294373)

  撰写一下需求文档 接口文档准备撰写、学习如何写一个组件库 

​	在后面的开发过程中比如输入框、按钮等肯定是比较多的，而大部分内容是及其类似的，我们这里就要学会书写类似的前端UI库一样的组件，方便我们去复用我们所写的组件。

完成界面1 

左侧的一个下拉框的component

菜单目录 包含

* 草稿箱
* 已发布
* 小记
* 分类

右下角

​	显示一些最近的文章  顺便要写一份Card的通用组件 





![image-20211118194925638](C:\Users\Edmond\AppData\Roaming\Typora\typora-user-images\image-20211118194925638.png)





[导航菜单 Menu - Ant Design](https://ant.design/components/menu-cn/) 需要模仿menu 撰写组件

### 1122

1. 学会制作简易版组件 Button Tree Card 
button的组件 学会抄袭--改动--创造

新想法 比如实现接口实现多个平台发布文章 等小功能

### 1123

窗口滑动 设置`height` 再设置`overflow:scroll`这样设置一个滚动 

注意，我们要取消和紧张浏览器的滚动

```css
html,body{
	overflow:hidden;
}
```

浏览器自带的滚动条太丑了，需要自己的

[掘金](https://juejin.cn/post/6844903847282868238)

[别人的博客]([libin1991.github.io](https://link.juejin.cn/?target=https%3A%2F%2Flibin1991.github.io%2F2019%2F05%2F14%2FJS%E5%A6%82%E4%BD%95%E7%BB%9F%E4%B8%80%E6%BB%9A%E5%8A%A8%E6%9D%A1%E6%A0%B7%E5%BC%8F%2F))



看了一圈，很不错，很麻烦，决定采用第三方的库来使用

后面有时间再自己去制作集成自己的组件库的内容吧，看了一圈下来，制作一个通用的组件库，其任务量比自己想象的要多得多。

#### 1124

前面使用typescript 但是整体的文档没有怎么看过 ，适当做一下简单的笔记

了解typescript在react的使用

https://github.com/piotrwitek/react-redux-typescript-guide#react--redux-in-typescript---complete-guide

过于繁琐，又不好用自己造轮子

![image-20211124192249485](C:\Users\Edmond\AppData\Roaming\Typora\typora-user-images\image-20211124192249485.png)





在ts的类型检测和检查中经常会遇到导入的包，我们需要使用`@type` 的形式导入

### 1125

1. 对于个人博客 草稿箱和回收站 还需要构建一个组件
2. 导航目录栏
   1. 工作台： 这里则是提供一个博文撰写 左侧为md输入 右侧为样式展示
   2. 小记 
   3. 收藏： 建立链接库
   4. 最近浏览放置最近浏览的文章

树组件

```
{
	groupId:xx;
	children:[
		
	],
	groupId:xx;
	children:[
		
	],
}
```

1. 设置后台的路由
2. 制作工作台界面
3. 制作流量统计图 three.js
4. 制作左侧博文对应的呈现方式
5. 个人主页
6. 分类
7. 日志-时间历程界面
8. 关于本站界面

## 栏
### About React 17
    参考官网连接[link](https://zh-hans.reactjs.org/blog/2020/08/10/react-v17-rc.html)
* 1. React不再往`document` 中增加事件处理器，而是将事件处理器渲染在React树的根DOM容器中

  ####  React Hooks

  对于class的组件，其自身，我们可以设置state

  这里的`useState` 就可以简单的理解为 对于这些函数时组件在”外围“ 给他增设state这一属性

  

  * 在函数组件中引入状态管理和副作用

  ```jsx
  // 约定俗成的简洁写法
  // 采用ES6的解构赋值的方式书写
  const [count,setCount] = useState(0); 
  
  const [fruit,setFruit] = useState('banana');
  
  const [todos,setTodos] = useState([{text:'Learn Hooks'}]);
  
  ```

  当然，我们也可以自己建立自己想要的Hooks

* Effect Hook 

  * 当我们使用fetch 获取数据或者改变DOM结点等操作的时候，这些操作会一些副作用，（因为这个操作会影响组件的渲染）

我们采用`useEffect` 

会类似于componentDidMount && componentDidUpdate 

```
useEffect(()=>{
	document.title = `you click ${count} times`
});
```

默认清华，React会在每次重新渲染的时候，运行useEffect

建立自己的Hooks

 Hook （也就是常说的钩子，虽然到现在都清楚这个所谓的钩子是什么意思）用于保存状态的逻辑

自己定义Hook 

 约定成俗，我们一般也是采用`useSomething` 来

```
function useFriendStatus(friendId){
	const[isOnline,setIsOnline] = useState(null);
	
	function handleStatusChange(status){
	setIsOnline(status.isOnline);
	}
	
	useEffect(()=>{
		Chatapi.subscribeToFriendStatus(friendId,handleStatusChange);
		return()=>{
			ChatAPI.unsubscribeFromFriendStatus(friendID,handleStatusChange);
		};
		
	});
	return isOneline;
}
// export default xxx; 导入
```

然后，在自己的类中进行使用

```
function FriendListItem(props){
	const isOnline = useFriendStatus(props.friend.id);
	
	return(
	<li style = {{color:isOnline?'green':'black'}})
	>
	{props.friend.name}
	</li>
}
```

#### React Router V6

https://reactrouter.com/docs/en/v6/getting-started/tutorial#active-links

安装

```
npm add react-router-dom
```

1. first step : connect the URL

   渲染整个app

```
<BrowserRouter>
	
</BrowserRouter>
```

2. link

   ```
   import {Link} from "react-router-dom"
   ```

使用

```
<Link to= "/"></Link>
<Link to=""></Link>
```

Link 改变URL但是不会导致界面的重新加载

3. 使用Route 

```
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>
```

4. 嵌套路由如下

   ```jsx
   <BrowserRouter>
       <Routes>
         <Route path="/" element={<App />}>
           <Route path="expenses" element={<Expenses />} />
           <Route path="invoices" element={<Invoices />} />
         </Route>
       </Routes>
     </BrowserRouter>,
   ```

   应对没有页面的路由或者说404界面

   ```
   <Routes>
     <Route path="/" element={<App />}>
       <Route path="expenses" element={<Expenses />} />
       <Route path="invoices" element={<Invoices />} />
       <Route
         path="*"
         element={
           <main style={{ padding: "1rem" }}>
             <p>There's nothing here!</p>
           </main>
         }
       />
     </Route>
   </Routes>
   ```

   使用`*` 

### About TS


### About ES6





### About SVG
SVG即 Scalable Vector Graphics 可缩放矢量图
采用XML的格式来定义图像，

Animation
方式
* CSS
* JS
* animate(svg内嵌)

在svg中可以通过animate（类似transition）和animateTransform（类似transform）两个属性来实现动画比如

图形转变 animate morph




## Question
使用`npm install` 原来的npm残留等问题
删除`node_modules` 和 `package.lock.json` 文件后采用 ` npm clean cache --force`  再使用`npm install`

## 问题

### 安装

        在最开始，就遇见了create-react-app时候的webpack版本不一致问题
        反反复复在本目录下安装了和卸载了好几次 包裹含g的全局webpack 和局部 目录下执行npm webpack ls 版本号也是对应的
    最后实在受不了 到cmd上查询的npm webpack ls就是过高的webpack的版本 
        其实这里我是理解，但是我不清楚，我在最开始使用全局卸载 有什么意义 还是我对添加了-g的命令有什么误解 这里就耗费了好多的时间 真心累

### 无趣的知识
去除input样式
```
outline-style: none;
border: 1px solid #ccc;
border-radius: 3px;
font-size: 16px;
```

transform 居中

父元素设置`position:relative` 
子元素设置
```
position:absolute;
transform:translate(-50%,-50%);
left:50%;
top:50%;
```

关于background-size
cover : 缩放背景图以完全覆盖背景区，但有可能背景图的部分会看不到
contain: 缩放背景图片将整个背景图片完全放入背景区 这样导致背景区部分空白
auto： 
x y： 一般设置为100% 100% 



关于vw 和滚动条的爱恨情仇

浏览器添加垂直滚动条前，是先添加水平滚动条的。
而垂直的滚动条会被额外算入vw 
这个时候我们就应该使用
width：100% 
当然，为了避免这种的情况我们可以考虑这样的写法
```
  width:100vw;
  height:100vh;
  max-width: 100%
```

  当然，我们可以通过避免这个滚动条其宽度的影响，我们可以对html、body添加如下样式
  ```
    html,body{
      margin:0;
      padding:0;
      overflow:hidden;
    }
  ```



关于尺寸
rem 是相对于根元素的尺寸的倍数 一般通过设定html的字体大小
vw 和vh则是根据当前的视窗 100vw就是当前屏幕的大小

