import React from 'react';
//Components
import NavBar from './Navbar/NavbarComponent';
import MainHero from './MainHero/MainHeroComponent';
import DonutMenu from './DonutMenu/DonutMenuComponent';
import DrinkMenu from './DrinkMenu/DrinkMenuComponent';
import Checkout from './Checkout/Checkout';

//React Router
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

function Main(props) {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/home" component={MainHero} />
        <Route
          exact
          path="/donuts"
          render={(donuts) => <DonutMenu donuts={props.donuts} />}
        />
        <Route exact path="/drinks" component={DrinkMenu} />
        <Route exact path="/checkout" component={Checkout} />
        <Redirect to="/home" />
      </Switch>

      <p>To Do List For App</p>
      <ol>
        <li>Make Donut Menu</li>
        <li>functions where you can add items to cart</li>
        <li>Make Drink Menu</li>
        <li>Cart/Checkout Component</li>
        <li>Cart Badge</li>
        <li>
          Checkout Component, Click on cart can slide a drawer with checkout
          button can the route to ShoppingCart Component, rename later
        </li>
        <li>State managment, Redux maybe?</li>
        <li>
          When toggling viewports, can we hide shopping cart icon and replace
          with text?
        </li>
      </ol>
    </div>
  );
}

export default withRouter(Main);
