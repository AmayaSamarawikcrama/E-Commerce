import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaBell, FaShoppingCart, FaUser } from 'react-icons/fa';

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="/" className="text-white">Be Big</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/offers" className="text-white">Offers</Nav.Link>
            <Nav.Link href="/about" className="text-white">About Us</Nav.Link>
            <Nav.Link href="/contact" className="text-white">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/notifications" className="text-white position-relative">
              <FaBell size={20} />
              <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                3
              </Badge>
            </Nav.Link>
            <Nav.Link href="/cart" className="text-white position-relative">
              <FaShoppingCart size={20} />
              <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
                2
              </Badge>
            </Nav.Link>
            <NavDropdown
              title={<FaUser size={20} className="text-white" />}
              id="basic-nav-dropdown"
              align="end"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
