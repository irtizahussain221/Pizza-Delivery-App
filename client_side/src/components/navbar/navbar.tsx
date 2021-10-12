import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar">
      <Navbar.Brand>
        <Link to="/" className="Home-Link">
          SHEY PIZZA
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="Menu-Link">
            Login
          </Nav.Link>
          <Nav.Link>
            <Link to="/cart" className="Menu-Link">
              Cart
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
