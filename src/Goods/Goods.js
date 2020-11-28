import React from 'react';
import './Goods.css';
import * as goodsData from '../goods.json';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsData: goodsData.default,
            cartCountGoods: 1
        }
    }

    addCart = (event) => {
        event.preventDefault();
        const button = event.target.closest('button')
        if (!button.hasAttribute("disabled")) {
            const cartCount = document.querySelector("#count-goods");
            if (!cartCount.hasAttribute("className", "cart__num")) {
                cartCount.classList.add("cart__num");
            }
            button.setAttribute("disabled", "disabled");
            const arrchildren = [...new Set(button.children)];
            arrchildren.forEach(elem => {
                if (elem.tagName === "SPAN") {
                    elem.innerHTML = "В корзині";
                }
            })
            this.setState({ cartCountGoods: this.state.cartCountGoods + 1 });
            cartCount.innerHTML = this.state.cartCountGoods;
        }

    }

    addCartNoGoods = (event) => {
        event.preventDefault();

    }

    render() {
        let count = 0;
        Object.keys(this.state.goodsData).forEach(category => {
            count = 0;
            this.state.goodsData[category].goods.forEach(element => {
                if (element.count !== 0) {
                    count++;
                }
            })
        })
        return (
            <div className="goods">
                <section className="section sectiom--goods">
                    {
                        Object.keys(this.state.goodsData).map(category => (
                            <div key={category}>
                                <div className="row goods__name" >
                                    <h2 className="goods__name" >{this.state.goodsData[category].name}</h2>
                                    <span>{count} товарів</span>
                                </div>
                                <div className="row row--wrap">
                                    {
                                        this.state.goodsData[category].goods.map(elem => (

                                            <div className=" goods__cart" key={elem.id}>
                                                <NavLink to={"goods/" + elem.id} className="link__goods__cart" >
                                                    <div className="goods__info">
                                                        <h3>{elem.title}</h3>

                                                        <div className="goods__image">
                                                            <img src={elem.image} alt="goods" />
                                                        </div>

                                                        <div className="row row--between row--wrap">
                                                            <span className="goods__price">{elem.price} ₴</span>
                                                            <div>
                                                                {(elem.count > 0) ? <span className="goods__count">Є в наявності</span> : <span className="goods__count">відсутній</span>}
                                                            </div>
                                                        </div>

                                                        <ul className="goods__desc">
                                                            {Object.keys(elem.description).map((desc, item) => (
                                                                <li className="row row--between" key={desc + elem.description[desc]}>
                                                                    <span className="desc__title">{desc}:</span>
                                                                    <span>{elem.description[desc]}</span>
                                                                </li>
                                                            ))}
                                                        </ul>

                                                        {(elem.count > 0) ?
                                                            <button onClick={this.addCart} className="btn btn--add-cart row row--center"><FaShoppingCart /><span className="add-cart__text"> Додати в корзину </span></button> :
                                                            <button onClick={this.addCartNoGoods} className="btn btn--add-cart row row--center"><span className="cart__text-no-goods">Товар відсутній</span></button>
                                                        }

                                                    </div>
                                                </NavLink>

                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                        ))
                    }
                </section>
            </div>
        );
    }
}

export default Main;
