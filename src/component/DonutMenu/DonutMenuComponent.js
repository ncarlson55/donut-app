import React from 'react';
import {
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
  return (
    <div>
      <Row>
        <Col xs="12" sm="4" lg="3">
          {props.donuts.map((donut) => (
            <Card className="text-center" body outline color="secondary">
              <CardImg top width="100%" src={donut.image} alt="Donuts" />
              <CardBody>
                <CardTitle tag="h6">{donut.name}</CardTitle>
                <CardText>${donut.price}</CardText>
                <Button>Add To Cart</Button>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default DonutMenu;
