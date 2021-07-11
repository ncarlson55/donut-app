import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const MainHero = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Welcome to Jiffy Donut!</h1>
          <p className="lead">
            Check out our donut and drink menus. Once you order, we'll be there
            in a jiffy!
          </p>
          <Container>
            <Row>
              <Col>
                <NavLink to="/donuts">
                  <Button>Donut Menu</Button>
                </NavLink>
              </Col>
              <Col>
                <NavLink to="/drinks">
                  <Button>Drink Menu</Button>
                </NavLink>
              </Col>
            </Row>
          </Container>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default MainHero;
