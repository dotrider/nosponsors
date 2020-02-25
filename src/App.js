import React from 'react';
// import './App.css';
import './reset.css'
import './App2.css';
import Home from './Components/Home/Home';
import {Switch, Route} from 'react-router-dom'
import Blogs from './Components/Blogs/Blogs';
import Events from './Components/Events/Events';
import Login from './Components/Login/Login'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component={Login}/>
        <Route path = '/blogs' component={Blogs} />
        <Route path = '/events' component={Events} />

      </Switch>
    </div>
  );
}

export default App;
