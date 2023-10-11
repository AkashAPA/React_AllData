import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
const Product = (props) => {

  const { name, image } = props
  return (
    <>
      <div className="card carousel-image" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top " alt="..."  />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </p>
          <Link to="/" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </>
  );
}

export default Product;
