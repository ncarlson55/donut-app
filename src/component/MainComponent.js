import React from 'react';

//Components
import NavBar from './Navbar/NavbarComponent';
import MainHero from './MainHero/MainHeroComponent';
import DonutMenu from './DonutMenu/DonutMenuComponent';
import DrinkMenu from './DrinkMenu/DrinkMenuComponent';
import ShoppingCart from './ShoppingCart/ShoppingCartComponent';

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
          path="/shoppingCart"
          render={(cartItems) => (
            <ShoppingCart
              cartItems={props.cartItems}
              onAdd={props.onAdd}
              onRemove={props.onRemove}
            />
          )}
        />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default withRouter(Main);
