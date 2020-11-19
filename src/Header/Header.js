import React from 'react';
import Nav from './Nav/Nav';;
import logo from '../logo.svg';
import './Header.css';


class Header extends React.Component{
  render(){
    return(
        <header className=" header ">
          <div className="container row row--between">
              <div className="header__logo row row--center">
                <img src={logo}/>
                <h1 className="header__logo-name">React shop</h1>
              </div>
              <Nav />
          </div>      
        </header>
    );
  }
}

export default Header;
