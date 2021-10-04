import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./navbar.css";

class NavBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="Navbar">
                <Navbar.Brand href="#home">SHEY PIZZA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Login</Nav.Link>
                        <Nav.Link href="#link">Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
};

export default NavBar;