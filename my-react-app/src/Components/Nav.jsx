import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Badge, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { FaBell, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ userRole = 'buyer' }) {
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
            {userRole === 'buyer' && (
              <>
                <Nav.Link href="/CusHomePage" className="text-white">Home</Nav.Link>
                <Nav.Link href="/offers" className="text-white">Offers</Nav.Link>
                <NavDropdown title="Category" id="category-nav-dropdown" menuVariant="dark">
                  <NavDropdown.Item href="/Men">Men</NavDropdown.Item>
                  <NavDropdown.Item href="/Women">Women</NavDropdown.Item>
                  <NavDropdown.Item href="/Kids">Kids</NavDropdown.Item>
                  <NavDropdown.Item href="/accessories">Accessories</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about" className="text-white">About Us</Nav.Link>
              </>
            )}

            {userRole === 'seller' && (
              <>
                <Nav.Link href="/dashboard" className="text-white">Dashboard</Nav.Link>
                <Nav.Link href="/manage-products" className="text-white">Manage Products</Nav.Link>
                <Nav.Link href="/orders" className="text-white">Orders</Nav.Link>
              </>
            )}
          </Nav>

          {userRole === 'buyer' && (
            <Form className="d-flex me-3" onSubmit={handleSearch}>
              <InputGroup>
                <FormControl
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="danger" type="submit">Search</Button>
              </InputGroup>
            </Form>
          )}

          <Nav>
            {userRole === 'buyer' && (
              <>
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
              </>
            )}

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
