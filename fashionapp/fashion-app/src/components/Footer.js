import React from 'react';
import Logo from './assets/logo_fashion.png';
import SignButton from './SignButton.js';
import './App.css';


function NavBar() {
    return (
        <nav className="footer">
            <section>
            <div className="footerLogo">
                <a  href="#logo">
                    <img src={Logo} alt="logo" className="navbarLogo" />
                </a>
            </div> 
            <p>Complete your style with awesome clothes from us.</p>
            <div class="sociaux">
                
            </div>
            </section>
            <div className="footerLogo">
                <a  href="#logo">
                    <img src={Logo} alt="logo" className="navbarLogo" />
                </a>
            </div>
            <ul className="navbar--link">
                <a className="navbar--link-item" href="#catalogue">Catalogue</a>
                <a className="navbar--link-item" href="#fashion">Fashion</a>
                <a className="navbar--link-item" href="#favourite">Favourite</a>
                <a className="navbar--link-item"href="#lifestyle">Lifestyle</a>
            </ul>
            <div className="navbar--signUp">
                <>
                    <SignButton />
                </>
            </div>
        </nav>
    );
}

export default NavBar; 
