import React from 'react';
import './Newsletter.css';

function Newsletter() {
    return (
        <>
        <div className="newsletter-register">
            <h2>Join shopping community to<br />
            get month promo</h2>

            <p>Type your email down below and be young wild generation</p>

            <input placeholder="Add your email here"></input><button type="submit">Send</button>
        </div>
        </>
    )
}

export default Newsletter;