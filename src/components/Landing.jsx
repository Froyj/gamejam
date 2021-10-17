import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const Landing = ({ landing }) => {
  return (
    <div className='landing'>
      <h2>{landing.title}</h2>
      <p>{landing.text}</p>
      <Link to={'/chapter1'}>
        <button>{landing.button}</button>
      </Link>
    </div>
  );
};

export default Landing;
