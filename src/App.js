import Main from './component/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import DonutData from './data/DonutData';
import DrinkData from './data/DrinkData';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  //Destructure data to pass down
  const { donuts } = DonutData;
  const { drinks } = DrinkData;

  //Set state
  const [cartItems, setCartItems] = useState([]);

  //Toastify notification when product is added to cart
  toast.configure();
  const notifyAddCart = (productName) => {
    toast.success(`${productName} added to cart!`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };


  //Add to Cart function to pass down to DonutMenu and DrinkMenu Component
  const onAdd = (product) => {
    //Variable that checks if Item already exist in our cart
    const exist = cartItems.find((x) => x.id === product.id);
    //if it does, add item to cart and update quantity variable
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
      //If new item, spread rest of items in our cart and add this new item and update quantity variable
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onAddwithToastNotification = (product) => {
    onAdd(product);
    //call notification
    notifyAddCart(product.name);
  };

  //Remove from Cart function, passing down only to Checkout component
  const onRemove = (product) => {
    //Variable that checks if Item already exist in our cart
    const exist = cartItems.find((x) => x.id === product.id);
    //If there is only 1 product matching the id, we can use the filter method to get the rest of the products still in the cart
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      //Spread the items, remove 1 from the quantity variable
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  //function that sums the qty.value whenenver products are added or removed from state
  const sumCartQty = cartItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  //Pricing Variables
  const itemsPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );
  const tax = itemsPrice * 0.08;
  const deliveryPrice = itemsPrice > 50 ? 0 : 5.99;
  const totalPrice = itemsPrice + tax + deliveryPrice;

  return (
    <BrowserRouter>
      <div className="App">
        <Main
          donuts={donuts}
          drinks={drinks}
          cartItems={cartItems}
          onAdd={onAdd}
          onAddwithToastNotification={onAddwithToastNotification}
          onRemove={onRemove}
          sumCartQty={sumCartQty}
          itemsPrice={itemsPrice}
          tax={tax}
          deliveryPrice={deliveryPrice}
          totalPrice={totalPrice}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
