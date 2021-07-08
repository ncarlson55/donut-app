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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
//Icons
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/home">
          <FreeBreakfastIcon />
          JiffyDonut
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink href="/donuts">Donut Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/drinks">Drink Menu</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/checkout">
                <ShoppingCartIcon />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
