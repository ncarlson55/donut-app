import React from 'react';
import { Button } from 'reactstrap';

function Checkout(props) {
  const { cartItems, onAdd, onRemove } = props;
  return (
    <div>
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div>{item.name}</div>
          <div>
            <Button onClick={() => onAdd(item)}>+</Button>
            <Button onClick={() => onRemove(item)}>-</Button>
          </div>
          <div>
              {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Checkout;
