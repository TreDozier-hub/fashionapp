import React from 'react';
import './Payday.css';
import Image4 from '../assets/image4.png';

function Payday() {
    return (
        <>
        <div className="payday-container">
            <img src={Image4} alt="Yellow girl" />
            <div>
                <h2>Payday<br />
                Sale Now</h2>
                <p>Spend minimal $100 get 30% off <br />
                voucher code for your next purchase <br />
                
                <p className="pbold">1 June - 10 June 2021</p>
                *Terms & Conditions apply</p>

                <button className="payday-button">SHOP NOW</button>
            </div>
        </div>
        </>
    )
}



export default Payday;