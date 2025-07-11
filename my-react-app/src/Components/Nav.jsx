import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Badge, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { FaBell, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="/" className="text-white">Be Big</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/offers" className="text-white">Offers</Nav.Link>

            {/* ✅ Category Dropdown */}
            <NavDropdown title="Category" id="category-nav-dropdown" menuVariant="dark" fontcolor="white">
              <NavDropdown.Item href="/category/men">Men</NavDropdown.Item>
              <NavDropdown.Item href="/category/women">Women</NavDropdown.Item>
              <NavDropdown.Item href="/category/kids">Kids</NavDropdown.Item>
              <NavDropdown.Item href="/category/accessories">Accessories</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/about-us" className="text-white">About Us</Nav.Link>
          </Nav>

          {/* ✅ Search Bar */}
          <Form className="d-flex me-3" onSubmit={handleSearch}>
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Search"
                className="rounded"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="danger" type="submit" className="rounded-end">
                Search
              </Button>
            </InputGroup>
          </Form>

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
              id="user-nav-dropdown"
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
