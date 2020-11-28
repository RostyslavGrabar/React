import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Goods from '../Goods/Goods';
import About from '../About/About';
import Cart from '../Cart/Cart';
import './App.css';
import * as goodsData from '../goods.json';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsData: goodsData.default
    }
}

  render() {
    return (
      <div className="app ">
        <Router>

          <Header />
          <div className="container ">
            <main className="main ">
              <Switch>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/"component={() => <Goods goodsData={goodsData} />} />
                {
                  Object.keys(this.state.goodsData).map(item => {
                    return this.state.goodsData[item].goods.map(elem =>{
                      return <Route exact path={"/goods/" + elem.id} component={() => <Cart goods={elem} />} />                               
                    })
                  })
                }
              </Switch>
            </main>
        </div>
        </Router>
        <Footer />

      </div>


    );
  }
}

export default App;
