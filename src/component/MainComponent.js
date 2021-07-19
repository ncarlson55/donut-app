import React from 'react';

//Components
import NavBar from './Navbar/NavbarComponent';
import MainHero from './MainHero/MainHeroComponent';
import DonutMenu from './DonutMenu/DonutMenuComponent';
import DrinkMenu from './DrinkMenu/DrinkMenuComponent';
import ShoppingCart from './ShoppingCart/ShoppingCartComponent';
import AddressForm from './AddressForm/AddressFormComponent';

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
            <DonutMenu
              donuts={props.donuts}
              onAddwithToastNotification={props.onAddwithToastNotification}
            />
          )}
        />
        <Route
          path="/drinks"
          render={(drinks) => (
            <DrinkMenu
              drinks={props.drinks}
              onAddwithToastNotification={props.onAddwithToastNotification}
            />
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
              itemsPrice={props.itemsPrice}
              tax={props.tax}
              deliveryPrice={props.deliveryPrice}
              totalPrice={props.totalPrice}
            />
          )}
        />
        <Route exact path="/addressForm" component={AddressForm} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default withRouter(Main);
