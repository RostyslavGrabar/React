import React from 'react';
import './AddCart.css';

class AddCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    }
    static getDerivedStateFromProps(props, state) {
        return { createCart: props.createCart }
    }
    setValue = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    submitForm = (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        this.state.createCart(this.state.title);
    }
    render() {
        return (
            <>
                <h2>Додати товар</h2>
                <form className="form-addGoods"  onSubmit={this.submitForm}>
                    <label htmlFor="title">Введіть назву
                        <input type="text" name="title" onChange={this.setValue} />
                    </label>
                    <button type="submit">Додати</button>
                </form>
            </>
        )
    }
}

export default AddCart;