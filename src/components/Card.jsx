import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ event, handleAnswer }) => {
  const { img, location, text, answers, endOfChapter } = event;
  if (event) {
    return (
      <div className='card'>
        <img src={img}></img>
        <p class='location'>{location}</p>
        <p>{event.text}</p>
        {answers.map((a) => {
          if (a.link) {
            return (
              <Link to={a.link}>
                <button
                  onClick={() =>
                    handleAnswer(a.gaugeType, a.mod, endOfChapter, a.nextEvent)
                  }
                >
                  {a.text}
                </button>
              </Link>
            );
          }
          return (
            <button
              onClick={() =>
                handleAnswer(a.gaugeType, a.mod, endOfChapter, a.nextEvent)
              }
            >
              {a.text}
            </button>
          );
        })}
      </div>
    );
  } else return null;
};

export default Card;
