import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import './Header.css'
import logo from './../../image/logo/nosponsors.png'

const Header = (props) => {

    return(
        <header>
            <div>
            <Link to='/'> <img className='logo' src={logo}/></Link>
            </div>
            <nav className='navBar'>
                <ul className='links'>
                   {/* <Link to='/'><li> Home </li></Link>  */}
                    <Link to='/forum'><li> Forum </li></Link>
                    <Link to='merch'><li> Merch </li></Link>
                    {/* <button onClick={props.logout}>Logout</button> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header