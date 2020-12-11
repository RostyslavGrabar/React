const allGoods = (state = [], action) => {
    let newState = { ...state }
    switch (action.type) {
        case 'ADD_GOODS_TO_CART':
            console.log('add goods work');
            Object.keys(newState).forEach(category => {
                newState[category].goods.map(item => {
                    if (item.id === action.id) {
                        item["inCart"] = true;
                    }
                    return item
                })            
            })
            return newState;
        case 'NEW_GOODS':
            newState.smartphone.goods.push(action.newGoods)
            return newState;
        case 'REMOVE_GOODS':
            Object.keys(newState).map(category => {
                return newState[category].goods = newState[category].goods.filter(item => item.id !== action.id)
            })
            return newState;

        default:
            return state;
    }
}

export default allGoods;

