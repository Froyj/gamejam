import React from "react";
import "./card.css"

const Card = (event) => {
    <div className="card">
        <h2>{event.chapter}</h2>
        <img src={event.img}></img>
        <h2>{event.text}</h2>
        <p>{event.location}</p>
        < Answers/>
    </div>
}

export default Card;