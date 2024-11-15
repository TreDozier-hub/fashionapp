import React from 'react';
import './Newarrivals.css';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';

function Card(props) {

    return (
        <>
        <div className="card">
            <img src={props.image} alt={props.titre}/>
            <h3>{props.titre}</h3>
            <p>{props.soustitre}</p>
        </div>
        </>
    )
}


export default function CardContainer() {
    const cardsData = [
        {image: (Image1), titre: "Hoodies & Sweatshirts", soustitre: "Explore Now!"},
        {image: (Image2), titre: "Coats & Parkas", soustitre: "Explore Now!"},
        {image: (Image3), titre: "Tees & T-shirts", soustitre: "Explore Now!"},
    ]

    return (
        <>
        <h3>New arrivals</h3>
        <div className="cards-container">
            {cardsData.map((carte, index) => (
                <Card key={index} image={carte.image} titre={carte.titre} soustitre={carte.soustitre} />
            ))}
        </div>
    </>
    )
}

