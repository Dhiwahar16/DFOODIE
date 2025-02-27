import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import { useDispatch } from 'react-redux';
import { MenuBar } from '../../features/Menubar/MenuSlice';


const Footer = ({menu}) => {
    const dispatch=useDispatch();
  return (
    <div className='footer' >
        <div className='footer-company'>
            <h2>Company</h2>
            <ul>
            <Link to='./About' onClick={()=> dispatch(MenuBar("about"))} className={menu === "about" ? "active" : ""}>
            <li>About us</li></Link>
            <li>Our Service</li>
            <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-gethelp'>
            <h2>Get help</h2>
            <ul>
            <Link to='./Contact' onClick={()=> dispatch(MenuBar("contact"))} className={menu === "contact" ? "active" : ""}>
            <li>Contact us</li></Link>
            <Link to='./' onClick={()=> dispatch(MenuBar("home"))} className={menu === "home" ? "active" : ""}>
            <li>Home</li></Link>
            <Link to='./Menu' onClick={()=> dispatch(MenuBar("menu"))} className={menu === "menu" ? "active" : ""}>
            <li>Menu</li></Link>
            <Link to='./Cart'>
            <li>Cart</li></Link>
            </ul>
        </div>
        <div className='footer-followus'>
            <h2>Follow us</h2>
            <div className='footer-img'>
                <img src='src/assets/insta.png' alt='Instagram' />
                <img src='src/assets/facebook.png' alt='FaceBook' />
                <img src='src/assets/linkedin.png' alt='Linked In' />
            </div>
        </div>
    </div>
  )
}

export default Footer