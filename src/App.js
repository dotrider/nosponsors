import React from 'react';
// import './App.css';
import './reset.css'
import './App2.css'
import Header from './Components/Header/Header';
import {Switch, Route} from 'react-router-dom'
import Blogs from './Components/Blogs/Blogs'
import Merch from './Components/Merch/Merch';
import Login from './Components/Login/Login'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path = '/' component={Login}/>
        <Route path = '/blogs' component={Blogs} />
        <Route path = '/Merch' component={Merch} />
      </Switch>
    </div>
  );
}

export default App;
