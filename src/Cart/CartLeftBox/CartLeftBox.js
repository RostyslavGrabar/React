import React from 'react';
import './CartLeftBox.css';
import {  FiMessageSquare } from 'react-icons/fi';
import {  FaStar } from 'react-icons/fa';


class CartLeftBox extends React.Component {
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
            <div className="cart-box__left">
                <div className="cart-box__left-img">
                    <img src={this.state.goods.image} alt="product" />
                </div>
                <div className="cart-box__left-testimonials">
                    <p className="testimonials__title"> <FiMessageSquare /> Відгуки </p>
                    <div className="testimonials__container">
                        {
                            this.state.goods.testimonials.map(elem => (

                                <div className="testimonials__item" key={elem.autorId + "autor" + elem.date}>
                                    <p>{elem.autor}</p>
                                    <div className="testimonials__raiting">
                                        <span className="testimonials__raiting-icon">
                                            {Array(+elem.raiting).fill(null).map((raiting, i) => {
                                                return <FaStar key={raiting + i} />
                                            })}
                                        </span>
                                        <span className="testimonials__date">
                                            {elem.date}
                                        </span>
                                    </div >
                                    <p className="testimonials__content">
                                        {elem.content}
                                    </p>
                                    <div className="row  testimonials__benefits">
                                        <div className="testimonials__benefits-left">Переваги</div>
                                        <div className="testimonials__benefits-right">{elem.benefits}</div>
                                    </div>
                                    <div className="row  testimonials__benefits">
                                        <div className="testimonials__benefits-left">Недоліки</div>
                                        <div className="testimonials__benefits-right">{elem.disadvantages}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CartLeftBox;
