import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function NavigationBar()
{
    return(

    <div>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/services">Services</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/HireUs">Hire Us</Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Gallery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">About</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavigationBar;