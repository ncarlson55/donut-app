import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';

const MainHero = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to Jiffy Donut!</h1>
          <p className="lead">
            Check out our donut and drink menus. Once you order, we'll be there in a jiffy!
          </p>
          <Container>
              <Row>
                <Col>
                    <Button>Donut Menu</Button>
                </Col>
                <Col>
                    <Button>Drink Menu</Button>
                </Col>
              </Row>
          </Container>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default MainHero
