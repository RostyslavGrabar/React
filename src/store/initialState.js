import * as goodsData from '../goods.json';

let initialState = {
  allGoods: { ...goodsData.default }
};

let currentGoods = [];
// localStorage.getItem('goods') && currentGoods JSON.parse(localStorage.getItem('goods')),
// })
localStorage.getItem('goods') && currentGoods.push(...JSON.parse(localStorage.getItem('goods')));

Object.keys(initialState.allGoods).forEach(category => {
  initialState.allGoods[category].goods.map(item => {
    let inCart = currentGoods.some(currentId => {
      return currentId === item.id
    })
    if(inCart){
      item["inCart"] = true;
      
    } else {
      item["inCart"] = false;

    }
    return item;
  })
})


export default initialState;

