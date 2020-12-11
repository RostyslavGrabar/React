import React, { useEffect, useState } from 'react';
import './Nav.css';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


const Header = (props) => {
  const [ cartCount, setCartCount ] = useState(0);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      let count = 0;
      Object.keys(props.allGoods).forEach(category => {
        props.allGoods[category].goods.forEach(item => {
          if (item.inCart) {
            count++;
          }
        })
      })
      setCartCount(count);

    }
    return () => { isMounted = false };
  },[props.allGoods]);

  return (
    <nav className="nav row row--end row--center">
      <ul className="menu row row--center">
        <li><NavLink to="/">Всі товари</NavLink></li>
        <li><NavLink to="/about">Про нас</NavLink></li>
        <li><NavLink to="/axios">Axios</NavLink></li>
        <li className="icons"><span className="icons__cart"><FaShoppingCart /> </span>
          {
            (cartCount > 0)? 
            <span className="cart__num">{cartCount}</span> :
            <span></span>
          }
          <span id="count-goods" ></span>
        </li>
      </ul>
    </nav>
  )
}
function mapStateToProps(state) {
  const { allGoods } = state;
  return { allGoods: allGoods }
}

export default connect(
  mapStateToProps,
  null
)(Header);

// export default Header;
