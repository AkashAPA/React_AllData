// src/components/CarList.js
import React from 'react';
import CarCard from './CarCard';
import Styles from './CarSeller.module.css';
const CarList = ({ cars }) => {
    return (
        <div className="container-fluid ">
            <div className="row">
                <div className={Styles.car_list}>
                    {cars.map((car, index) => (
                        <div className="col-lg-4 col-md-6 p-2">

                            <CarCard key={index} car={car} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default CarList;
