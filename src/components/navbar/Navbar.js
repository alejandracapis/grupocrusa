import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './NavBarStyles.css'

function NavBar() {
    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
      return () => window.removeEventListener('scroll', stickNavbar);
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        // window height changed for the demo
        windowHeight > 100 ? setStickyClass('sticky-nav') : setStickyClass('');
      }
    };
    return (
        <div className={`grid-navbar ${stickyClass}`}>
            <div className='main-link'>
                <Link to="/">
                    <button className='nav-button'>
                        <img src={require('./logo.png')} className='nav-logo' alt="logo" />
                        <span className='nav-title'>Grupo<span className='crusa'>CRUSA</span></span>
                    </button>
                </Link>
            </div>
            <div className='link'>
                <Link to="/nosotros">
                    <button type='button' className='link-btn'>
                        Nosotros
                    </button>
                </Link>
            </div>
            <div className='link'>
                <Link to="/servicios">
                    <button type='button' className='link-btn'>
                        Servicios
                    </button>
                </Link>
            </div>
            <div className='link'>
                <Link to="/proyectos">
                    <button type='button' className='link-btn'>
                        Proyectos
                    </button>
                </Link>
            </div>
            <div className='link'>
                <Link to="/renta-maquinaria">
                    <button type='button' className='link-btn'>
                        Maquinaria
                    </button>
                </Link>
            </div>
            <div className='link'>
                <Link to="/contacto">
                    <button type='button' className='link-btn'>
                        Contacto
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default NavBar
