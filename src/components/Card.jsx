import React from "react";
import "./card.css"

const Card = ({ event }) => (
    <div className="card">
        <img src={event.img}></img>
        <p>{event.location}</p>
        <p>{event.text}</p>
        <div>
            <button>{event.firstChoise}</button>
            <button>{event.secondChoise}</button>
        </div>

        {/* < Answers/> */}
    </div>
)

export default Card;