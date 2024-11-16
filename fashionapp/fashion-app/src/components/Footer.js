import React from 'react';
import Logo from './assets/logo_fashion.png';
import SignButton from './SignButton.js';
import './App.css';
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
// import { FaBeer } from 'react-icons/fa';


function NavBar() {
    return (

        <footer class="footer">
            <div class="footer-container">
                <div class="footer-section">
                    <h3>FASHION</h3>
                    {/* <div className="navbarLogo">
                <a  href="#logo">
                    <img src={Logo} alt="logo" className="navbarLogo" />
                </a>
            </div> */}
                    <p class="footer-description">
                        Complete your style with awesome clothes from us.
                    </p>
                    <div class="footer-socials">
                        <FaFacebook />
                        <RiInstagramFill />
                        <FaSquareXTwitter />
                        <FaLinkedin />
                    </div>
                </div>


                <div class="footer-section">
                    <h4>Company</h4>
                    <ul class="footer-links">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Quick Link</h4>
                    <ul class="footer-links">
                        <li><a href="#">Share Location</a></li>
                        <li><a href="#">Orders Tracking</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Legal</h4>
                    <ul class="footer-links">
                        <li><a href="#">Terms & conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>


    );

}

// class Question extends React.Component {
//     render() {
//         return <h3> Lets go for a <FaBeer />? </h3>
//     }
// }
export default NavBar; 
