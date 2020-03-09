import React, { Component } from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import logo from './../../image/logo/nosponsors_offroad_copy.png'

class Header extends Component{
    constructor(){
        super();
        this.state = {
            toggleNav: false
        }
    }

    toggleNavMenu = () => {
        this.setState({
            toggleNav: !this.state.toggleNav
        })
    }

    render(){
    return(
        <div>
        <header>
            <div>
            <Link to='/'> <img className='logo' src={logo}/></Link>
            </div>       
                <ul className='links deskNav'>
                   {/* <Link to='/'><li> Home </li></Link>  */}
                    <Link to='/forum'><li> Forum </li></Link>
                    <Link to='merch'><li> Merch </li></Link>
                    <Link to='cart'><li> Cart </li></Link>
                    <Link to='contact'><li> Contact Us </li></Link>
                    {/* <button onClick={props.logout}>Logout</button> */}
                </ul>
                <img alt='hamburger'onClick={this.toggleNavMenu} className='hamburger' src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png'/>         
        </header>  
        <div className='mobileMenu'> 
            <ul className={this.state.toggleNav ? 'viewmenu' : 'hidemenu'}>
            {/* <Link to='/'><li> Home </li></Link>  */}
             <Link to='/forum'><li> Forum </li></Link>
             <Link to='merch'><li> Merch </li></Link>
             <Link to='cart'><li> Cart </li></Link>
             <Link to='contact'><li> Contact Us </li></Link>
             {/* <button onClick={props.logout}>Logout</button> */}
         </ul>
         </div> 
        </div>
    )
    }
}

export default Header