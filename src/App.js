import React from 'react';
// import './App.css';
import './style/reset.scss'
import './style/App2.scss'
import Header from './Components/Header/Header';
import {Switch, Route} from 'react-router-dom'
import Forum from './Components/Forum/Forum'
import Merch from './Components/Merch/Merch';
import Login from './Components/Login/Login'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path = '/' component={Login}/>
        <Route path = '/forum' component={Forum} />
        <Route path = '/Merch' component={Merch} />
      </Switch>
    </div>
  );
}

export default App;
