import React from 'react';
import { Link } from 'react-router-dom'
import './NavBarStyles.css'

const NavLinks = ({isClicked, closeMenu}) => {
    return (
        <nav className='links'>
            <Link to="/nosotros">
                <button type='button' className='link-btn' onClick={() => isClicked && closeMenu()}>
                    Nosotros
                </button>
            </Link>
            <Link to="/servicios">
                <button type='button' className='link-btn' onClick={() => isClicked && closeMenu()}>
                    Servicios
                </button>
            </Link>
            <Link to="/proyectos">
                <button type='button' className='link-btn' onClick={() => isClicked && closeMenu()}>
                    Proyectos
                </button>
            </Link>
            <Link to="/renta-maquinaria">
                <button type='button' className='link-btn' onClick={() => isClicked && closeMenu()}>
                    Maquinaria
                </button>
            </Link>
            <Link to="/contacto">
                <button type='button' className='link-btn' onClick={() => isClicked && closeMenu()}>
                    Contacto
                </button>
            </Link>
        </nav>

    );
}

export default NavLinks
