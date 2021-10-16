import react from "react";

const Card = (props) => {
    <div className="card">
        <h2>{props.event}</h2>
        <button>{props.answer1}</button>
        <button>{props.answer2}</button>
    </div>
}

export default Card;