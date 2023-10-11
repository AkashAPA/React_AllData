import React, { useEffect, useState } from 'react';
import Navbar from '../Pages/Navbar';
import axios from 'axios';


const ToggleCard = () => {
    const [activeCategory, setActiveCategory] = useState('electronics');
    const [data, setData] = useState({
        electronics: [],
        homeAppliances: [],
        laptops: [],
    });

    useEffect(() => {
        axios.get(' https://dashboard-3frk.onrender.com/products') 
            .then(response => {
                setData(response.data); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    return (
        <>
            <Navbar />
            <div className="text-center ">
                <h1 className=''>Product Catalog</h1>
                <div className="mb-3 text-center">
                    <button
                        className={`btn ${activeCategory === 'electronics' ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => handleCategoryChange('electronics')}
                    >
                        Electronics
                    </button>
                    <button
                        className={`btn ${activeCategory === 'homeAppliances' ? 'btn-primary' : 'btn-secondary'} mx-2`}
                        onClick={() => handleCategoryChange('homeAppliances')}
                    >
                        Home Appliances
                    </button>
                    <button
                        className={`btn ${activeCategory === 'laptops' ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => handleCategoryChange('laptops')}
                    >
                        Laptops
                    </button>
                </div>
                
                <div className="row container-fluid">
                    {data[activeCategory].map(product => (
                        <div className="col-md-3" key={product.id}>
                            <div className="card mb-3 toggleCard-image" style={{ width: "18rem" }}>
                                <img src={product.image} className="card-img-top" alt={product.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">Brand: {product.brand}</p>
                                    <p className="card-text">Price: ${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}

export default ToggleCard;
