import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { loginStatusProps } from "../../interfaces/interfaces";

function NavBar(props: loginStatusProps) {
  //function to handle user logout
  const handleClick = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("jwt-token");
    localStorage.setItem("isAdmin", JSON.stringify(false));
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
              <NavDropdown.Item href="/orders" className="Menu-Link">
                Orders
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link href="/login" className="Menu-Link">
              Login
            </Nav.Link>
          )}
          <Nav.Link href="/cart" className="Menu-Link">
            Cart
          </Nav.Link>
          {JSON.parse(localStorage.getItem("isAdmin") as string) ? (
            <Nav.Link href="/addPizza" className="Menu-Link">
              Add Pizza
            </Nav.Link>
          ) : null}
          {JSON.parse(localStorage.getItem("isAdmin") as string) ? (
            <Nav.Link href="/allOrders" className="Menu-Link">
              Orders
            </Nav.Link>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
