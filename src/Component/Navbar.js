import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/" className="mr-5">
            Home
          </Link>
          <Link to="/aboutus">AboutUs</Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
