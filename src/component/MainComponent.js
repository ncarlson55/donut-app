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
      <NavBar sumCartQty={props.sumCartQty} />
      <Switch>
        <Route exact path="/home" component={MainHero} />
        <Route
          path="/donuts"
          render={(donuts) => (
            <DonutMenu donuts={props.donuts} onAdd={props.onAdd} />
          )}
        />
        <Route
          path="/drinks"
          render={(drinks) => (
            <DrinkMenu drinks={props.drinks} onAdd={props.onAdd} />
          )}
        />
        <Route
          exact
          path="/checkout"
          render={(cartItems) => (
            <Checkout
              cartItems={props.cartItems}
              onAdd={props.onAdd}
              onRemove={props.onRemove}
            />
          )}
        />
        <Redirect to="/home" />
      </Switch>
      <p>To Do List For App</p>
      <ol>
        <li>Issue with Cart badge, only updates # of products not quantity of cart</li>
        <li>Notification on item card when the item is added to cart</li>
        <li>Styling</li>
        <li>Get cards to stay at fixed length when viewports get larger</li>
        <li>
          Checkout Component, Click on cart can slide a drawer with checkout
          button can the route to ShoppingCart Component, rename later
        </li>
        <li>Fix id issue.</li>
        <li>Optional: Dry Principle, can we map out our routers???</li>
      </ol>
    </div>
  );
}

export default withRouter(Main);
