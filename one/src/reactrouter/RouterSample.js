import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';

function Home({ location }) {
  return (
    <div>
      <h1>首页</h1>
      <p>详情页带回的参数:{location.state ? location.state.foo : ''}</p>
    </div>
  );
}
function Class() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/detail/react">react</Link>
        </li>
        <li>
          <Link to="/detail/vue">vue</Link>
        </li>
      </ul>
    </div>
  );
}
function My() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/my/info">信息</Link>
        </li>
        <li>
          <Link to="/my/info1">信息1</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/my/info" component={Info}></Route>
        <Route path="/my/info1" component={() => <div>测试</div>}></Route>
        {/* 重定向 */}
        <Redirect to="/my/info"></Redirect>
      </Switch>
    </div>
  );
}

function Info() {
  return <div>个人中心</div>;
}
function NotFound() {
  return <div>404</div>;
}

function detail(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.match.params.course}</h1>
      <button
        onClick={() =>
          props.history.push({ pathname: '/', state: { foo: 'bar' } })
        }
      >
        返回首页
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/class">课程</Link>
        </li>
        <li>
          <Link to="/my">我</Link>
        </li>
        <li>
          <Link to="/aaaaa">404</Link>
        </li>
      </ul>
      {/* 只匹配一个 */}
      <Switch>
        {/* 确切匹配 */}
        <Route exact path="/" component={Home}></Route>
        <Route path="/class" component={Class}></Route>
        <Route path="/my" component={My}></Route>
        {/* 配置课程详情页  传参取参*/}
        <Route path="/detail/:course" component={detail}></Route>
        {/* 配置404 */}
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default function RouterSample() {
  return (
    <div>
      <h1>演示路由4.x</h1>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </div>
  );
}
