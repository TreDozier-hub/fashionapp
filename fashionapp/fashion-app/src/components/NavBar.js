import React from 'react';
import Logo from '../assets/logo_fashion.png';
import SignButton from './SignButton.js';
import './App.css';


function NavBar() {
    return (
        <nav className="navbar">
                <a  href="#logo">
                    <img src={Logo} alt="logo" className="navbarLogo" />
                </a>
            <ul className="navbar--link">
                <a className="navbar--link-item" href="#catalogue">Catalogue</a>
                <a className="navbar--link-item" href="#fashion">Fashion</a>
                <a className="navbar--link-item" href="#favourite">Favourite</a>
                <a className="navbar--link-item"href="#lifestyle">Lifestyle</a>
                <SignButton className="navbar--signUp" />
            </ul>
        
        </nav>
    );
}

export default NavBar; 
