import React from 'react';
// import Cards from './Cards.js';
import Image_1 from '../assets/image_1.png';
import Image_2 from '../assets/image_2.png';
import './Card.css';

function Cards(props){
    return (
        
        <div class="card">
            <img class="card-image" src={props.image} alt={props.categorie}/>
            <div class="card-content">
                <div class="card-category">{props.categorie}</div>
                <a class="card-link" href={props.lien}>Explore Now!</a>
                <span className="arrow">→</span>
            </div>
        </div>
        
        

    )
};

function Favourite() {
    return (
        <>
        <h3>Young's Favourite</h3>

        <div className="cards-container-b">            
            <Cards
                image={Image_1}
                categorie="Trending on Instagram"
                link="https://instagram.com"
            />

            <Cards
                image={Image_2}
                categorie="All Under $40"
                link="https://instagram.com"
            />

        </div>
        </>
    );
}

export default Favourite;
