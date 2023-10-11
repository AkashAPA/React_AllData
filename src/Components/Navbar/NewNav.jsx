import React from 'react';
import Styles from './NewNav.module.css'
import { NavLink } from 'react-bootstrap';
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
            <NavLink to="/">Dog Supplies</NavLink>
            <ul>
              <li>
                <NavLink to="/">Food &amp; Treats</NavLink>
              </li>
              <li>
                <NavLink to="/">Toys</NavLink>
              </li>
              <li>
                <NavLink to="/">Beds &amp; Furniture</NavLink>
              </li>
              <li>
                <NavLink to="/">Outdoor Supplies</NavLink>
              </li>
              <li>
                <NavLink to="/">Clothing</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/">Cat Supplies</NavLink>
            <ul>
              <li>
                <NavLink to="/">Food &amp; Treats</NavLink>
              </li>
              <li>
                <NavLink to="/">Toys</NavLink>
              </li>
              <li>
                <NavLink to="/">Beds &amp; Furniture</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/">Bird Supplies</NavLink>
            <ul>
              <li>
                <NavLink to="/">Food &amp; Treats</NavLink>
              </li>
              <li>
                <NavLink to="/">Toys</NavLink>
              </li>
              <li>
                <NavLink to="/">Furniture</NavLink>
              </li>
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
        <NavLink to="/">Locations &amp; Hours</NavLink>
        <ul>
          <li>
            <NavLink to="/">North America</NavLink>
          </li>
          <li>
            <NavLink to="/">Europe</NavLink>
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
    </ul>
  </nav>
</header>

  );
}

export default NewNav;
