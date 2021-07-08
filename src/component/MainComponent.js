import React, { Component } from 'react';
//Components
import NavBar from './Navbar/NavbarComponent'
import MainHero from './MainHero/MainHeroComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/home' component={MainHero}></Route>
          {/* <MainHero/> */}
        </Switch>
          <ul>
            <li>Header</li>
            <li>Redirect to Donut Menu</li>
            <li>Redirect to Drink Menu</li>
            <li>Redirect to Cart/Checkout</li>
          </ul>
      </div>
    );
  }
}

export default Main;
