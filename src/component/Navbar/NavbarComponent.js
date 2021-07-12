import React, { useState } from 'react';
//ReactStrap Components
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
//Icons
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>
          <NavLink to="/home">
            <FreeBreakfastIcon />
            JiffyDonut
          </NavLink>
        </NavbarBrand>
        <div style={{ paddingRight: '20px', paddingTop: "15px" }}>
          <Badge badgeContent={props.countCartItems} color="primary">
            <NavbarToggler onClick={toggle} />
          </Badge>
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink to="/donuts">Donut Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/drinks">Drink Menu</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem style={{ paddingRight: '20px' }}>
              <NavLink to="/checkout">
                <Badge badgeContent={props.countCartItems} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
