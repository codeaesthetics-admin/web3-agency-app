import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/WEB3.svg";

const CustomNavbar = () => {
  const location = useLocation();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      sticky="top"
      style={{ background: "#000000" }}
    >
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="justify-content-end"
            style={{ width: "100%" }}
            activeKey={location.pathname}
          >
            <Nav.Link href="/" className="navbar-text-style">
              Home
            </Nav.Link>
            <Nav.Link href="/services" className="navbar-text-style">
              Services
            </Nav.Link>
            <Nav.Link href="/projects" className="navbar-text-style">
              Projects
            </Nav.Link>
            <Nav.Link href="/swap" className="navbar-text-style">
              Swap
            </Nav.Link>
            <Nav.Link href="/contact-us" className="navbar-text-style">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
