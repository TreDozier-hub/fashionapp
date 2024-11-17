import React from 'react';
import explore from '../assets/explore.png';
import './Explore.css';


export default function Explore() {
    return (
        <>
        <div className="explore">
            <div><h1>Let's <br />
            Explore <br />
            Unique <br />
            Clothes.</h1>

            <p>Live for Influential and Innovative fashion!</p>

            <button>Shop Now</button>
            </div>

            <img src={explore} />
        </div>
        
        </>
    )
}