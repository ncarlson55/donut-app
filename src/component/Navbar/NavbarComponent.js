import React, { useState } from 'react';
//ReactStrap Components
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
//
import { Badge as ReactstrapBadge } from 'reactstrap';
import { Link } from 'react-router-dom';
//Icons
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
//CSS
import './NavbarComponent.css';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  //Variables that respond to toggle change
  const CartIcon = (
    <Button>
      <Badge badgeContent={props.sumCartQty} color="primary" overlap="circular">
        <ShoppingCartIcon />
      </Badge>
    </Button>
  );

  const CartName = (
    <div>
      <Button>
        Shopping Cart <ReactstrapBadge>{props.sumCartQty}</ReactstrapBadge>
      </Button>
    </div>
  );

  return (
    <>
      <Navbar color="dark" dark expand="md" sticky={'top'}>
        <NavbarBrand>
          <NavLink>
            <Link to="/home">
              <Button>
                <FreeBreakfastIcon />
                JiffyDonut
              </Button>
            </Link>
          </NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/donuts">
                  <Button>Donut Menu</Button>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/drinks">
                  <Button>Drink Menu</Button>
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem style={{ paddingRight: '15px' }}>
              <NavLink>
                <Link to="/checkout">{!isOpen ? CartIcon : CartName}</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
