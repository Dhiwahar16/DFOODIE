//NavBar for website which displays all the page above 

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MenuBar } from '../../features/Menubar/MenuSlice';
import { useDispatch } from 'react-redux';
import { loginAuth } from '../../features/LoginAuth/LoginAuthSlice';

const Navbar = ({ menu, loginauth }) => {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src="/assets/DFOODIE.png" alt="DFOODIE" className="logo" />

      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </div>
      <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <li onClick={() => dispatch(MenuBar("home"))} className={menu === "home" ? "active" : ""}>
          <Link to="/">home</Link>
        </li>
        <li onClick={() => dispatch(MenuBar("menu"))} className={menu === "menu" ? "active" : ""}>
          <Link to="/Menu">menu</Link>
        </li>
        <li onClick={() => dispatch(MenuBar("contact"))} className={menu === "contact" ? "active" : ""}>
          <Link to="/Contact">contact</Link>
        </li>
        <li onClick={() => dispatch(MenuBar("about"))} className={menu === "about" ? "active" : ""}>
          <Link to="/About">about us</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <img src="/assets/search-line.svg" alt="search" style={{ width: 30 }} />
        <div className="navbar-search-icon">
          <Link to='/Cart'><img src="/assets/shopping-cart.svg" alt="cart" style={{ width: 30 }} /></Link>
        </div>
        {
          loginauth ? (
            <button onClick={() => dispatch(loginAuth(false))}>Log Out</button>
          ) : (
            <button>Sign In</button>
          )
        }
      </div>
    </nav>
  );
}

export default Navbar;
