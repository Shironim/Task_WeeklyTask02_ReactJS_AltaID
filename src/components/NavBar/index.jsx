import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
const NavBar = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="#home">Kelas A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              Dimas Seto Wicaksana
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;