import React from "react";
import Nav from 'react-bootstrap/Nav';
import "./NavigationBar.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon from "../../images/instagram.png";

function NavigationBar()
{
    return(

    <div>
      <Navbar collapseOnSelect expand="md" className="bg-body-tertiary custom-navbar" >
        <Container>
          <Navbar.Brand className="navbar-text" href="/">5 Wonders</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navbar-text" href="/Services">Services</Nav.Link>
              <Nav.Link className="navbar-text" href="/Services">Gallery</Nav.Link>
              <Nav.Link className="navbar-text" href="/HireUs">Hire Us</Nav.Link>
            </Nav>
            <NavDropdown.Divider />
            <Nav className="flex-row-wrap flex-center navbar-sm">
              <Nav.Link className="navbar-text" href="/"><img src={icon} alt="sm-1" /></Nav.Link>
              <Nav.Link className="navbar-text" href="/"><img src={icon} alt="sm-2" /></Nav.Link>
              <Nav.Link className="navbar-text" href="/"><img src={icon} alt="sm-3" /></Nav.Link>
              <Nav.Link className="navbar-text" href="/"><img src={icon} alt="sm-4" /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;