import React from 'react';
import amazon from '../assets/amazon.jpg';
import hm from '../assets/hm.png';
import lacoste from '../assets/lacoste.png';
import levis from '../assets/levis.jpg';
import obey from '../assets/obey.png';
import shopify from '../assets/shopify.jpg';
import './Barremarques.css';

export default function Barremarques() {
    return (
        <div className="barremarques">
            <img src={amazon} alt="amazon" />
            <img src={lacoste} alt="lacoste" />
            <img src={levis} alt="levis" />
            <img src={hm} alt="h&m" />
            <img src={obey} alt="obey" />
            <img src={shopify} alt="shopify" />
        </div>
    )
}