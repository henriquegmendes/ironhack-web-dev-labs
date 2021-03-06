import React from 'react';

import './Card.css';

const Card = ({ imagePath, imageName, cardTitle, description }) => {
  return (
    <div className="card-container">
      <img src={imagePath} alt={imageName}/>
      <h3>{cardTitle}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
