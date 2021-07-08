import React, { Component } from 'react';
import NavBar from './Navbar/Navbar'


class Main extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <ul>
            <li>Nav</li>
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
