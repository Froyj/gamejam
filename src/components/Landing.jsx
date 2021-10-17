import React from "react";
import "./landing.css";

const Landing = ({ landing }) => {
    return (<div className="landing">
        <h2>{landing.title}</h2>
        <p>{landing.text}</p>
        <button>{landing.button}</button>
    </div>)
};


export default Landing;