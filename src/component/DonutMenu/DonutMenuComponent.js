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

function DonutMenu(props) {
  let donutCard = props.donuts.map((donut) => {
    return (
      <Col xs="12" sm="4">
        <Card className="text-center" body outline color="secondary">
          <CardImg top width="100%" src={donut.image} alt="Donuts" />
          <CardBody>
            <CardTitle tag="h6">{donut.name}</CardTitle>
            <CardText>${donut.price}</CardText>
            <Button>Add To Cart</Button>
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
