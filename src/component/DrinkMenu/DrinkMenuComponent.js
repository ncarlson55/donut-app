import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';

function DrinkMenu(props) {
  let drinkCard = props.drinks.map((drink) => {
    return (
      <Col xs="12" sm="6" md="4" lg="2">
        <Card className="text-center" body outline color="secondary">
          <CardImg top width="100%" src={drink.image} alt="Drink" />
          <CardBody>
            <CardTitle tag="h6">{drink.name}</CardTitle>
            <CardText>${drink.price}</CardText>
            <Button onClick={() => props.onAddwithToastNotification(drink)}>Add To Cart</Button>
          </CardBody>
        </Card>
      </Col>
    );
  });

  return (
    <Container fluid>
      <Row>{drinkCard}</Row>
    </Container>
  );
}

export default DrinkMenu;
