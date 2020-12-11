import React from 'react';
import './CartRightBox.css';
import { FiInfo } from 'react-icons/fi';
import { FaShoppingCart } from 'react-icons/fa';
import { connect} from 'react-redux';
import { addGoodsToCart, newGoods, removeGoods } from '../../action';



class CartRightBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static getDerivedStateFromProps(props, state) {
        return { goods: props.goods }
    }
    addCart = (id) => {
        return (event) => {
            event.preventDefault();
            this.props.addGoodsToCart(id);
            let currentGoods = [];
            localStorage.getItem('goods') && currentGoods.push(...JSON.parse(localStorage.getItem('goods')));
            localStorage.setItem('goods', JSON.stringify([...currentGoods,id]));
        }

    }

    render() {
        console.log(this.props)
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
                        {
                            (this.state.goods.count > 0) ?
                                (!this.state.goods.inCart) ?
                                    <button
                                        onClick={this.addCart(this.state.goods.id)}
                                        className="btn btn--buy row row--center">
                                        <FaShoppingCart /><span className="add-cart__text">Додати в корзину</span>
                                    </button>
                                    :
                                    <button
                                        onClick={this.addCart(this.state.goods.id)}

                                        className="btn btn--buy row row--center"
                                        disabled>
                                        <FaShoppingCart />
                                        <span className="add-cart__text">Товар в корзині</span>
                                    </button>
                                :
                                <button className="btn btn--buy row row--center">Товар відсутній</button>
                        }
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


function mapStateToProps(state){
    const {allGoods} = state;
    return{allGoods: allGoods}
}

export default connect(
    mapStateToProps,
    {addGoodsToCart, newGoods, removeGoods}
)(CartRightBox);


// export default CartRightBox;
