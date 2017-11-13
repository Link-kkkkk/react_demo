import React from 'react'

import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

import ReactDOM from 'react-dom';
import { BrowserRouter, Route, } from 'react-router-dom'

// page
import './asstes/index.css';
import logoPage from './pages/logoPage';
import ifCom from './pages/ifCom';

const PrimaryLayout = () => (
  <div className="primary-layout">
    {/* 公用头部 */}
    <header>
      Common Header
    </header>
    {/* 不同于vue，router的插入插入在html里 */}
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/logo" component={logoPage} />
      <Route path="/if/:identity" component={ifCom} />
    </main>
  </div>
)

const HomePage =() => <div>Home Page</div>
const UsersPage = () => <div>Users Page</div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
