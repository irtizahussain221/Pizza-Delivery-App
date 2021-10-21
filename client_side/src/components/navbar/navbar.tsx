import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { loginStatusProps } from "../../interfaces/interfaces";
import "./navbar.css";

function NavBar(props: loginStatusProps) {
  const handleClick = () => {
    localStorage.removeItem("currentUser");
    props.setLoggedIn(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar">
      <Navbar.Brand href="/">SHEY PIZZA</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          {props.isLoggedIn ? (
            <NavDropdown
              title={`${
                JSON.parse(
                  localStorage.getItem("currentUser") as string
                ).name.split(" ")[0]
              }`}
              id="basic-nav-dropdown"
              className="Menu-Link"
            >
              <NavDropdown.Item
                className="Menu-Link"
                onClick={() => {
                  handleClick();
                }}
              >
                Logout
              </NavDropdown.Item>
              <NavDropdown.Item className="Menu-Link">Orders</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link href="/login" className="Menu-Link">
              Login
            </Nav.Link>
          )}
          <Nav.Link href="/cart" className="Menu-Link">
            Cart
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
