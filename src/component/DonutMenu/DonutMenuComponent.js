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
//CSS
import './DonutMenuComponents.css'


function DonutMenu(props) {
  let donutCard = props.donuts.map((donut) => {
    return (
      <Col xs="12" sm="6" md="4" lg="2">
        <Card className="text-center" body outline color="secondary">
          <CardImg className="imageCards" top maxWidth="100%" src={donut.image} alt="Donuts" />
          <CardBody>
            <CardTitle tag="h6">{donut.name}</CardTitle>
            <CardText>${donut.price}</CardText>
            <Button onClick={() => props.onAdd(donut)}>Add To Cart</Button>
          </CardBody>
        </Card>
      </Col>
    );
  });

  return (
    <Container fluid>
      <Row>{donutCard}</Row>
    </Container>
  );
}

export default DonutMenu;
