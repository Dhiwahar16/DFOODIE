import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './Menu.css'
import MenuContext from './MenuContext';
import { useDispatch } from 'react-redux';
import { Categorychange } from '../../features/Category/CategorySlice';

const Menu = () => {
  const [menuItems]=useContext(MenuContext);
  const dispatch=useDispatch();

  return (
    <div className='menu'>
        <h1>Menu</h1>
        <p className='menu-text'>
        Explore our menu and discover a world of flavors.
        From classic favorites to chef's specials, there's something for everyone.
        Made with the freshest ingredients, crafted for a perfect dining experience.
        Indulge in mouthwatering dishes that satisfy every craving.
        Your next favorite meal is just a click away!
        </p>
        <br></br>
        <div className="menu-list">
            {
              menuItems.map((item)=>(
                <div key={item.name} className="menu-list-items">
                  <Link to="/Items" onClick={()=> dispatch(Categorychange(item.name))} >
                    <img src={item.image} alt={item.name} className='menu-list-items-img' />
                    <h3>{item.name}</h3>
                  </Link>
                </div>
              ))
            }
        </div>
        <hr/>
    </div>
  )
}

export default Menu