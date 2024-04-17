import React from "react";
import Nav from 'react-bootstrap/Nav';
import "./NavigationBar.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon from "../../images/instagram.png";
import { Link } from "react-router-dom";

function NavigationBar()
{
    return(

    <div>
      <Navbar collapseOnSelect expand="md" className="bg-body-tertiary custom-navbar" >
        <Container>
          <Link to="/" className="navbar-brand navbar-text">5 Wonders</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link navbar-text" to="/Services">Services</Link>
              <Link className="nav-link navbar-text" to="/Services">Gallery</Link>
              <Link className="nav-link navbar-text" to="/HireUs">Hire Us</Link>
            </Nav>
            <NavDropdown.Divider />
            <Nav className="flex-row-wrap flex-center navbar-sm">
              <Link className="nav-link navbar-text" to="/"><img src={icon} alt="sm-1" /></Link>
              <Link className="nav-link navbar-text" to="/"><img src={icon} alt="sm-2" /></Link>
              <Link className="nav-link navbar-text" to="/"><img src={icon} alt="sm-3" /></Link>
              <Link className="nav-link navbar-text" to="/"><img src={icon} alt="sm-4" /></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;