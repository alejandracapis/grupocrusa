import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import "./NavBarStyles.css";

import { useState, useEffect } from 'react';

const NavBar = () => {
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
            <DesktopNav />
            <MobileNav />
        </div>
    )
}

export default NavBar;