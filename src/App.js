import React from 'react';
import './style/reset.scss'
import './style/App2.scss'
import Header from './Components/Header/Header';
import {Switch, Route} from 'react-router-dom'
import Forum from './Components/Forum/Forum'
import Merch from './Components/Merch/Merch';
import Login from './Components/Login/Login'
import Cart from './Components/Cart/Cart';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App2">
      <Header/>
      <Switch>
        <Route exact path = '/' component={Login}/>
        <Route path = '/forum' component={Forum} />
        <Route path = '/merch' component={Merch} />
        <Route path = '/cart' component={Cart} />
        <Route path = '/contact' component={Contact} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
