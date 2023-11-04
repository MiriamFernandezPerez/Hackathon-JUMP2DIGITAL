import React from "react";
import CardStyle from './Card.styles';

const Card = (props) => {

    const { name, gender, status, species, image } = props;
    
    return (
        <CardStyle className="card">
            <div className="cardTitle">
                <span className="title">{name}</span>
            </div>
            <div className="cardImage">
                <img src={image} alt={"Foto de " + name}/>
            </div>
            <div className="cardInfo">
                <span>{species}</span>
                <span>{gender}</span>
                <div className="estado">
                    <span className={status}></span>
                    <p>{status}</p>
                </div>
            </div>
        </CardStyle>       
    )
}
  
export default Card;