import React from 'react';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import "./NavBarStyles.css";


const DesktopNav = () => {
    return (
        <nav className='desktop-nav'>
            <Link to="/">
                <button className='nav-button'>
                    <img src={require('./logo.png')} className='nav-logo' alt="logo" />
                    <span className='nav-title'>Grupo<span className='crusa'>CRUSA</span></span>
                </button>
            </Link>
            <NavLinks />
        </nav>
    )
}

export default DesktopNav