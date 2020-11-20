import React from 'react';
import './Nav.css';


class Header extends React.Component {
  render() {
    return (
      <nav className="nav row row--end row--center">
        <ul className="menu ">
          <li><a href="/">Main</a></li>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
