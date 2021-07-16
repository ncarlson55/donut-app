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
//CSS
import './NavbarComponent.css';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const CartIcon = (
    <Badge badgeContent={props.sumCartQty} color="primary" overlap="circular">
      <ShoppingCartIcon />
    </Badge>
  );
  const CartName = (
    <Badge
      badgeContent={props.sumCartQty}
      color="primary"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      Shopping Cart
    </Badge>
  );

  return (
    <>
      <Navbar color="dark" dark expand="md" sticky={'top'}>
        <NavbarBrand>
          <NavLink to="/home">
            <FreeBreakfastIcon />
            JiffyDonut
          </NavLink>
        </NavbarBrand>
        <div style={{ paddingRight: '15px', paddingTop: '15px' }}>
          <Badge
            color="secondary"
            variant="dot"
            badgeContent={props.sumCartQty}
          >
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
            <NavItem style={{ paddingRight: '15px' }}>
              <NavLink to="/checkout">{!isOpen ? CartIcon : CartName}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
