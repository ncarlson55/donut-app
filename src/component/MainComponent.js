import React, { Component } from 'react';
//Components
import NavBar from './Navbar/NavbarComponent'
import MainHero from './MainHero/MainHeroComponent'


class Main extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainHero/>
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
