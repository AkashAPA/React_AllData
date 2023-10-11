// src/components/CarCard.js
import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="card mx-4 car_card">
      <img src={car.img} alt={car.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{car.name}</h5>
        <p className="card-text">Price: ${car.price}</p>
      </div>
    </div>
  );
};

export default CarCard;
