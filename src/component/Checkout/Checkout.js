import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function Checkout(props) {
  const { cartItems, onAdd, onRemove } = props;
  //Variables for setting up Checkout 
  const itemsPrice = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.qty,
    0
  );
  const tax = itemsPrice * 0.08;
  const deliveryPrice = itemsPrice > 50 ? 0 : 5.99;
  const totalPrice = itemsPrice + tax + deliveryPrice;

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
      {cartItems.length !== 0 && (
        <Container>
          <Row>
            <Col xs="2">Item Price</Col>
            <Col xs="10">${itemsPrice.toFixed(2)}</Col>
          </Row>
          <Row>
            <Col xs="2">Tax Price</Col>
            <Col xs="10">${tax.toFixed(2)}</Col>
          </Row>
          <Row>
            <Col xs="2">Delivery Price</Col>
            <Col xs="10">${deliveryPrice.toFixed(2)}</Col>
          </Row>
          <Row>
            <Col xs="2">Total Price</Col>
            <Col xs="10">${totalPrice.toFixed(2)}</Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Checkout;
