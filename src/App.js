import React from 'react';
// import './App.css';
import './reset.css'
import './App2.css';
import Header from './Components/Header/Header';
import {Switch, Route} from 'react-router-dom'
import DisplayBlogs from './Components/DisplayBlogs/DisplayBlogs';
import Blogs from './Components/Blogs/Blogs'
import Events from './Components/Events/Events';
import Login from './Components/Login/Login'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path = '/' component={Login}/>
        <Route path = '/blogs' component={Blogs} />
        <Route path = '/events' component={Events} />
      </Switch>
    </div>
  );
}

export default App;
