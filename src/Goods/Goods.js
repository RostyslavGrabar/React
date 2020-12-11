import React, { useState} from 'react';
import './Goods.css';
import { FaShoppingCart } from 'react-icons/fa';
import {useDispatch, connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import Loader from '../Loader/Loader';
// import Context from '../App/Context';
import { addGoodsToCart, newGoods, removeGoods } from '../action';

const AddCart = React.lazy(
    () =>
        new Promise(resolve => {
            setTimeout(() => {
                resolve(import('../AddCart/AddCart'))
            }, 3000)
        })
);

const Main = (props) => {
    const [allGoods, setAllGoods] = useState(props.allGoods);
    const dispatch = useDispatch();

    const addToCart = (id) => {
        return (event) => {
            event.preventDefault();
            const button = event.target.closest('button');
            button.setAttribute("disabled", "disabled");
            dispatch(addGoodsToCart(id))
            let currentGoods = [];
            localStorage.getItem('goods') && currentGoods.push(...JSON.parse(localStorage.getItem('goods')));
            localStorage.setItem('goods', JSON.stringify([...currentGoods,id]));
        }
    }
    const remove = (id) => {
        return (event) => {
            event.preventDefault();
            dispatch(removeGoods(id));

        }
    }
    const createCart = (title) => {
        let newData = { ...allGoods };
        dispatch(newGoods(title))
        setAllGoods(newData);
    }

    const addCartNoGoods = (event) => {
        event.preventDefault();

    }
    return (
        <div className="goods">

            <React.Suspense fallback={<Loader />}>
                <AddCart createCart={createCart} />
            </React.Suspense>

            <section className="section sectiom--goods">
                {Object.keys(allGoods).map(category => (

                    <div key={category}>
                        <div className="row goods__name" >
                            <h2 className="goods__name" >{allGoods[category].name}</h2>
                            <span>товарів</span>
                        </div>
                        <div className="row row--wrap">
                            {
                                allGoods[category].goods.map(elem => (

                                    <div className=" goods__cart" key={elem.id}>
                                        <NavLink to={"goods/" + elem.id} className="link__goods__cart" >
                                            <div className="goods__info">
                                                <h3 title={elem.title}>{elem.title}</h3>

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
                                                {                                                    
                                                    (elem.count > 0) ?
                                                        (!elem.inCart) ?
                                                            <button onClick={addToCart(elem.id)}
                                                                className="btn btn--add-cart row row--center">
                                                                <FaShoppingCart />
                                                                <span className="add-cart__text">Додати в корзину</span>
                                                            </button>
                                                            :
                                                            <button onClick={addToCart(elem.id)} className="btn btn--add-cart row row--center btn-disabled" >
                                                                <FaShoppingCart />
                                                                <span className="add-cart__text">Товар в корзині</span>
                                                            </button>
                                                        :
                                                        <button
                                                            onClick={addCartNoGoods}
                                                            className="btn btn--add-cart row row--center">
                                                            <span className="cart__text-no-goods">Товар відсутній</span>
                                                        </button>
                                                }
                                                <button onClick={remove(elem.id)} >delete</button>
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
    )
}
function mapStateToProps(state){
    const {allGoods} = state;
    return{allGoods: allGoods}
}

export default connect(
    mapStateToProps,
    null
)(Main);

