import React, { useState } from 'react';
import Styles from './CarSeller.module.css';
import CarList from './CarList';
import Navigation from './Navigation';
import NewNav from '../Navbar/NewNav';
import { useLocation } from 'react-router-dom';

const dummyCarData = [
  {
    "name": "Toyota Camry",
    "price": 25000,
    "img": "https://source.unsplash.com/800x600/?car"
  },
  {
    "name": "Honda Civic",
    "price": 23000,
    "img": "https://source.unsplash.com/800x600/?vehicle"
  },
  {
    "name": "Ford Mustang",
    "price": 45000,
    "img": "https://source.unsplash.com/800x600/?mustang"
  },
  {
    "name": "Chevrolet Silverado",
    "price": 35000,
    "img": "https://source.unsplash.com/800x600/?chevrolet"
  },
  {
    "name": "Tesla Model 3",
    "price": 50000,
    "img": "https://source.unsplash.com/800x600/?tesla"
  },
  {
    "name": "BMW 3 Series",
    "price": 40000,
    "img": "https://source.unsplash.com/800x600/?bmw"
  },
  {
    "name": "Mercedes-Benz C-Class",
    "price": 42000,
    "img": "https://source.unsplash.com/800x600/?mercedes"
  },
  {
    "name": "Audi A4",
    "price": 38000,
    "img": "https://source.unsplash.com/800x600/?audi"
  },
  {
    "name": "Lexus RX",
    "price": 32000,
    "img": "https://source.unsplash.com/800x600/?lexus"
  },
  {
    "name": "Tesla Model 3",
    "price": 50000,
    "img": "https://source.unsplash.com/800x600/?tesla"
  },
  {
    "name": "Hyundai Sonata",
    "price": 26000,
    "img": "https://source.unsplash.com/800x600/?sonata"
  },
  {
    "name": "Kia Optima",
    "price": 24000,
    "img": "https://source.unsplash.com/800x600/?kia"
  },
  {
    "name": "Nissan Altima",
    "price": 27000,
    "img": "https://source.unsplash.com/800x600/?nissan"
  },
  {
    "name": "Subaru Outback",
    "price": 29000,
    "img": "https://source.unsplash.com/800x600/?subaru"
  },
  {
    "name": "Mazda CX-5",
    "price": 31000,
    "img": "https://source.unsplash.com/800x600/?mazda"
  },
  {
    "name": "Jeep Grand Cherokee",
    "price": 37000,
    "img": "https://source.unsplash.com/800x600/?jeep"
  },
  {
    "name": "Acura MDX",
    "price": 40000,
    "img": "https://source.unsplash.com/800x600/?acura"
  },
  {
    "name": "Infiniti QX60",
    "price": 36000,
    "img": "https://source.unsplash.com/800x600/?infiniti"
  },
  {
    "name": "Cadillac Escalade",
    "price": 58000,
    "img": "https://source.unsplash.com/800x600/?cadillac"
  },
  {
    "name": "Volvo XC90",
    "price": 47000,
    "img": "https://source.unsplash.com/800x600/?volvo"
  },
  {
    "name": "Land Rover Range Rover",
    "price": 90000,
    "img": "https://source.unsplash.com/800x600/?range-rover"
  },
  {
    "name": "Porsche 911",
    "price": 100000,
    "img": "https://source.unsplash.com/800x600/?porsche"
  },
  {
    "name": "Ferrari 488",
    "price": 300000,
    "img": "https://source.unsplash.com/800x600/?ferrari"
  },
  {
    "name": "Lamborghini Aventador",
    "price": 400000,
    "img": "https://source.unsplash.com/800x600/?lamborghini"
  },
  {
    "name": "McLaren 720S",
    "price": 350000,
    "img": "https://source.unsplash.com/800x600/?mclaren"
  },
  {
    "name": "Bugatti Chiron",
    "price": 3000000,
    "img": "https://source.unsplash.com/800x600/?bugatti"
  },
  {
    "name": "Koenigsegg Jesko",
    "price": 4000000,
    "img": "https://source.unsplash.com/800x600/?koenigsegg"
  },
  {
    "name": "Pagani Huayra",
    "price": 3500000,
    "img": "https://source.unsplash.com/800x600/?pagani"
  },
  {
    "name": "Aston Martin DBS",
    "price": 2500000,
    "img": "https://source.unsplash.com/800x600/?aston-martin"
  }
]

const CarSeller = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const carsPerPage = 6;

  // Filter cars based on the search query
  const filteredCars = dummyCarData.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const displayedCars = filteredCars.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const location = useLocation(); // Get the current location

  // Conditionally render NewNav based on the location
  const shouldDisplayNewNav = location.pathname !== '/Home';

  return (
    <>
      {shouldDisplayNewNav && <NewNav />}
      <div className="container-fluid">
        <div className={Styles.app}>
          <h1>Seller App</h1>
          <div className={Styles.card_capacity}>
            {displayedCars.length} from {filteredCars.length}
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <input
                  type="text"
                  placeholder="Search by car name..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className={Styles.searchInput}
                />
              </div>

            </div>
          </div>

          <CarList cars={displayedCars} />
          <Navigation
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}

export default CarSeller;
