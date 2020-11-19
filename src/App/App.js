import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Goods from '../Goods/Goods';
import About from '../About/About';
import Home from '../Home/Home';
import './App.css';


class App extends React.Component{
  render(){
    return(
      <div className="App ">

        <Header />
        <div className="container ">
            <main className="main ">
              <Router>
                <Switch>
                  <Route exact path="/" component={Goods}></Route>
                  <Route exact path="/home" component={Home}></Route>
                  <Route exact path="/about" component={About}></Route>
                </Switch>
              </Router>
            </main>
        </div>
        <Footer />
      </div>
      
    );
  }
}

export default App;
