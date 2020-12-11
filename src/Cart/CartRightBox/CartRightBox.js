import React from 'react';
import './CartRightBox.css';
import { FiInfo } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';


class CartRightBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static getDerivedStateFromProps(props, state) {
        return { goods: props.goods }
    }

    render() {
        return (
            <div className="cart-box__right">
                <div className="cart-box__right-info">
                    <p className="box__right-info-title row row--center"><FiInfo /> <span> Інформація про товар </span></p>
                    <ul className="cart-box__right-desc">
                        {Object.keys(this.state.goods.description).map((desc, item) => (
                            <li className="row row--between" key={desc + this.state.goods.description[desc]}>
                                <span className="cart-box__right-desc-title">{desc}:</span>
                                <span>{this.state.goods.description[desc]}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cart-box__right-buy row row--center">
                    <span className="cart-box__right-buy-price">{this.state.goods.price} ₴</span>
                    <div className="cart-box__right-buy-btn">
                        <button className="btn btn--buy row row--center"><FaShoppingCart /><span className="add-cart__text">Купити</span></button>
                    </div>
                </div>
                <div className="cart-box__right-info cart-box__right-info--more">
                    <p className="box__right-info-title row row--center"><FiInfo /> <span>Розширений опис </span></p>
                    <div className="cart-box__right-info--more-desc">
                        <ul className="cart-box__right-info--more-list">
                            {Object.keys(this.state.goods.moreInfo).map((desc, item) => (
                                <li className="row row--between" key={desc + this.state.goods.moreInfo[desc]}>
                                    <span>{desc}:</span>
                                    <span>{this.state.goods.moreInfo[desc]}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartRightBox;
