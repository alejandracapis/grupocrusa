import NavLinks from "./NavLinks";
import './NavBarStyles.css';
import { MdOutlineMenu } from 'react-icons/md';
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from 'react-icons/md'

const MobileNav = () => {
  const [click, setClick] = useState(false);

  const Hamburger = <MdOutlineMenu className="HamburgerMenu"
    size="30px"
    color="white"
    onClick={() => setClick(!click)} />

  const Close = <MdClose className="HamburgerMenu"
    size="30px"
    color="white"
    onClick={() => setClick(!click)} />

  return (
    <nav className="mobile-nav">
      <Link to="/">
        <button className='nav-button'>
          <img src={require('./logo.png')} className='nav-logo' alt="logo" />
          <span className='nav-title'>Grupo<span className='crusa'>CRUSA</span></span>
        </button>
      </Link>
      {click ? Close : Hamburger}
      {click && <NavLinks />}
    </nav>
  )
}

export default MobileNav;