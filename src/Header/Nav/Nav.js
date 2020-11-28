import React from 'react';
import './Nav.css';
import { FaShoppingCart } from 'react-icons/fa';
import {NavLink} from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <nav className="nav row row--end row--center">
        <ul className="menu row row--center">
          <li><NavLink to="/">Головна</NavLink></li>
          <li><NavLink to="/about">Про нас</NavLink></li>
          <li className="icons"><span className="icons__cart"><FaShoppingCart /> </span> <span id="count-goods" ></span></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
