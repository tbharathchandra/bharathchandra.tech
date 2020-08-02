import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <div>
      <Navbar
        id="my-navbar"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#" className="mr-6 nav-brand">
          <h4 className="navbar-brand-h2">{`<B />`}</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto text-center">
            <Nav.Link href="#aboutme" active="none" className="navbar-content">
              About Me
            </Nav.Link>
            <Nav.Link href="#work" active="none" className="navbar-content">
              Work
            </Nav.Link>
            <Nav.Link href="#projects" active="none" className="navbar-content">
              Projects
            </Nav.Link>
            <Nav.Link href="#articles" active="none" className="navbar-content">
              Articles
            </Nav.Link>
            <Nav.Link
              href="#contactme"
              active="none"
              className="navbar-content"
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
