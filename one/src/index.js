import React from  'react'
import ReactDom from  'react-dom'
// import App from  './App'
// import LifeCycle from  './LifeCycle'
// import App1 from  './App1'
// import Purememo from  './Purememo'
// import Composition from './Composition'
// import Hoc from './HOC/HOC'
// import Context1 from './HOC/Context1'
import Context2 from './HOC/Context2'

// ReactDom.render(<App/>,document.getElementById('root'))
//演示生命周期
// ReactDom.render(<LifeCycle/>,document.getElementById('root'))
//演示ant组件库
// ReactDom.render(<App1/>,document.getElementById('root'))
//使用pureComponent和memo
// ReactDom.render(<Purememo/>,document.getElementById('root'))
//组件复合写法
// ReactDom.render(<Composition/>,document.getElementById('root'))
//高阶组件
// ReactDom.render(<Hoc title="一个属性"/>,document.getElementById('root'))
//组件上下文
ReactDom.render(<Context2/>,document.getElementById('root'))