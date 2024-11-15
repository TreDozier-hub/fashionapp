import React from 'react';
import './Newarrivals.css';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';


// class Cards extends React.Component {
//     constructor(image, titre, soustitre) {
//     super();
//     this.image = image;
//     this.titre = titre;
//     this.soustitre = soustitre; 
//     }

//     render() {
        
//     }
// }

// const CardOne = new Cards(image1, 'Hoodies & Sweetshirts', 'Explore Now!');
// const CardTwo = new Cards(image2, 'Coats & Parkas', 'Explore Now!');
// const CardThree = new Cards(image3, 'Tees & T-shirts', 'Explore Now!');


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
        {image: './assets/image1', titre: "Hoodies & Sweatshirts", soustitre: "Explore Now!"},
        {image: './assets/image2', titre: "Coats & Parkas", soustitre: "Explore Now!"},
        {image: './assets/image3', titre: "Tees & T-shirts", soustitre: "Explore Now!"}
    ]

    return (
        <>
        <div className="cards-container">
      {cardsData.map((carte, index) => (
        <Card key={index} image={carte.image} titre={carte.titre} soustitre={carte.soustitre} />
      ))}
        </div>
    </>
    )
}
 