import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Goods from '../Goods/Goods';
import About from '../About/About';
import Cart from '../Cart/Cart';
import './App.css';
import * as goodsData from '../goods.json';

// import Context from './Context';
import Axios from './Axios/Axios';
import { connect} from 'react-redux';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goodsData: goodsData.default
    }
  }

  static getDerivedStateFromProps(props, state){
    return { allGoods: props.allGoods}
  }

  render() {
    console.log(this.props)
    return (
      // <Context.Provider value={{ removeGoods: this.removeGoods }}>
        <div className="app ">
          <Router>
            <Header />

            <div className="container ">
              <main className="main ">
                <Switch>
                  <Route exact path="/about" component={() => <About/>}></Route>
                  <Route exact path="/" component={() => <Goods/>} />
                  <Route exact path="/axios" component={() => <Axios/>} />
                  {
                    Object.keys(this.state.allGoods).map(item => {
                      return this.state.allGoods[item].goods.map(elem => {
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
      // </Context.Provider>


    );
  }
}


function mapStateToProps(state){
  const {allGoods} = state;
  return{allGoods: allGoods}
}

export default connect(
  mapStateToProps,
  null
)(App);
