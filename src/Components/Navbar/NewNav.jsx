import React from 'react';
import Styles from './NewNav.module.css'
import { NavLink } from 'react-router-dom';
const NewNav = () => {
  return (
    <header>
  <nav className={Styles.nav}>
    <ul className={Styles.navigation_menu}>
      <li>
        <NavLink to="/Home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Products</NavLink>
        <ul>
          <li>
            <NavLink to="/">Forms</NavLink>
            <ul>
              <li>
                <NavLink to="/Form">Employee Details</NavLink>
              </li>
              <li>
                <NavLink to="/DynamicForm">Dynamic Form</NavLink>
              </li>
              <li>
                <NavLink to="/FormikForm">Formik Form</NavLink>
              </li>
              {/* <li>
                <NavLink to="/">Outdoor Supplies</NavLink>
              </li>
              <li>
                <NavLink to="/">Clothing</NavLink>
              </li> */}
            </ul>
          </li>
          <li>
            <NavLink to="/">Tables</NavLink>
            <ul>
              <li>
                <NavLink to="/Table">Crud Table</NavLink>
              </li>
              <li>
                <NavLink to="/Setting">Login Data</NavLink>
              </li>
              {/* <li>
                <NavLink to="/">Beds &amp; Furniture</NavLink>
              </li> */}
            </ul>
          </li>
          <li>
            <NavLink to="/">Apps</NavLink>
            <ul>
              <li>
                <NavLink to="/Ecommerce">Ecommerce</NavLink>
              </li>
              <li>
                <NavLink to="/CarSeller">CarSeller</NavLink>
              </li>
              {/* <li>
                <NavLink to="/">Furniture</NavLink>
              </li> */}
            </ul>
          </li>
          <li>
            <NavLink to="/">Fish Supplies</NavLink>
            <ul>
              <li>
                <NavLink to="/">Food</NavLink>
              </li>
              <li>
                <NavLink to="/">Aquariums</NavLink>
              </li>
              <li>
                <NavLink to="/">Rocks &amp; Decorations</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/">Services</NavLink>
        <ul>
          <li>
            <NavLink to="/">Grooming</NavLink>
            <ul>
              <li>
                <NavLink to="/">Coat Care</NavLink>
              </li>
              <li>
                <NavLink to="/">Nail Care</NavLink>
              </li>
              <li>
                <NavLink to="/">Doggie Deluxe Spa Day</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/">Boarding</NavLink>
            <ul>
              <li>
                <NavLink to="/">Short Term Boarding</NavLink>
              </li>
              <li>
                <NavLink to="/">Doggie Daycare</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/">Others</NavLink>
        <ul>
          <li>
            <NavLink to="/Carousel">Carousel</NavLink>
          </li>
          <li>
            <NavLink to="/ToggleCards">ToggleCards</NavLink>
          </li>
          <li>
            <NavLink to="/Timer">Circle Timer</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/">About Us</NavLink>
        <ul>
          <li>
            <NavLink to="/">Our Team</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact Us</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/">LogOut</NavLink>
        {/* <ul>
          <li>
            <NavLink to="/">Our Team</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact Us</NavLink>
          </li>
        </ul> */}
      </li>
    </ul>
  </nav>
</header>

  );
}

export default NewNav;
