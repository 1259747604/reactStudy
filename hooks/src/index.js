import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import UseContext from './usecontext/UseContext'

// ReactDom.render(<App></App>,document.getElementById('root'))
//使用usecontext
ReactDom.render(<UseContext></UseContext>,document.getElementById('root'))