import React from 'react';

const Card = ({ image, title, text }) => (
  <div className="card">
    <img src={image} alt={title} className="card__image" />
    <div className="card__content">
      <h2 className="card__title">{title}</h2>
      <p className="card__text">{text}</p>
    </div>
  </div>
);

export default Card;