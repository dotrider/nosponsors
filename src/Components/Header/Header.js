import React, { Component } from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import logo from './../../image/logo/nosponsors_offroad_copy.png'
import axios from 'axios'
import {setUser, getSession, logOut} from '../../redux/reducer'


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

    logout = () => {
        // console.log('logout',this.logout)
       axios.get('/auth/logout')
       this.props.setUser({})
       this.props.logOut()
    //    this.props.history.push('/')
     }
     componentDidMount(){
         this.props.getSession()
     }
    

    render(){
    //    console.log('props', this.props.isLoggedIn)
    return(
        
        <header>
        {this.props.isLoggedIn
        ? 
        <div>
        <div className='navBar'>
          
            <div>
            <Link to='/'> <img onClick={this.logout} alt='logo' className='logo' src={logo}/></Link>
            </div>  
                <ul className='links deskNav'>
                    <Link to='/forum'><li className='current'> Forum </li></Link>
                    <Link to='merch'><li className='current'> Merch </li></Link>
                    <Link to='cart'><li className='current'> Cart </li></Link>
                    <Link to='contact'><li className='current'> Contact Us </li></Link>
                    <Link to='/'><li onClick={this.logout}>LogOut</li></Link>
            </ul> 
                <img alt='hamburger'onClick={this.toggleNavMenu} className='hamburger' src='https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png'/>         
                </div> 
        <div className='mobileMenu'> 
            <ul className={this.state.toggleNav ? 'viewmenu' : 'hidemenu'}>
             <Link to='/forum'><li> Forum </li></Link>
             <Link to='merch'><li> Merch </li></Link>
             <Link to='cart'><li> Cart </li></Link>
             <Link to='contact'><li> Contact Us </li></Link>
         </ul>
         </div> 
         </div>
         :
         <div className='navBar'>         
            <div>
            <Link to='/'> <img alt='logo' className='logo' src={logo}/></Link>
            </div>               
            </div> 
    }
     </header>
    )
    }
}


const mapStateToProps = state => state;

const mapDispatchToProps = {
setUser,    
logOut,
getSession
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);