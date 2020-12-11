import React from 'react';
import './Cart.css';
import CartLeftBox from './CartLeftBox/CartLeftBox';
import CartRightBox from './CartRightBox/CartRightBox';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="cart">
                <h2 className="cart__title">{this.props.goods.title}</h2>
                <div className="cart-box row">
                    <CartLeftBox goods={this.props.goods} />
                    <CartRightBox goods={this.props.goods}/>
                </div>

            </div>
        );
    }
}

export default Cart;
