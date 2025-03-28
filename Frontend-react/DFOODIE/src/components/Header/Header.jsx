//Home page for website ( first page when enter )

import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import { useDispatch } from 'react-redux';
import { MenuBar } from '../../features/Menubar/MenuSlice';

const Header = ({ menu }) => {
  const dispatch=useDispatch();
  return (
    <div className='header'>
        <div className='header-content'>
            <h1 className='header-content-h1' >Savor the Flavor, Love Every Bite</h1>
            <p>Experience the rich flavors of freshly prepared meals.
            Savor every bite with the finest ingredients.
            Enjoy a taste that brings comfort and joy.
            Crafted with passion for true food lovers.
            Every dish is made to perfection.
            A feast for your senses, waiting to be explored.</p>
            <Link to='/Menu' onClick={() =>dispatch(MenuBar("menu"))} className={menu === "menu" ? "active" : ""}>
            <button className='header-content-button' >View Menu</button> </Link>
        </div>
    </div>
  )
}

export default Header
