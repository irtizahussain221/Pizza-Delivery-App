import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPizza from "../components/pizza/addPizza";
import Login from "../components/login/login";
import NavBar from "../components/navbar/navbar";
import Signin from "../components/signin/signIn";
import { loginStatusProps } from "../interfaces/interfaces";
import CartScreen from "../screens/cartscreen";
import Homescreen from "../screens/homescreen";
import OrderScreen from "../screens/orderscreen";
import AllOrders from "../components/order/adminOrders";

function Routes(props: loginStatusProps) {
  return (
    <Router>
      <NavBar isLoggedIn={props.isLoggedIn} setLoggedIn={props.setLoggedIn} />
      <Switch>
        <Route exact path="/">
          <Homescreen />
        </Route>
        <Route exact path="/cart">
          <CartScreen isLoggedIn={props.isLoggedIn} />
        </Route>
        {props.isLoggedIn ? (
          <Route exact path="/orders">
            <OrderScreen />
          </Route>
        ) : (
          <>
            <Route exact path="/login">
              <Login
                isLoggedIn={props.isLoggedIn}
                setLoggedIn={props.setLoggedIn}
              />
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
          </>
        )}
        {JSON.parse(localStorage.getItem("isAdmin") as string) ? (
          <Route exact path="/addPizza">
            <AddPizza />
          </Route>
        ) : null}
        {JSON.parse(localStorage.getItem("isAdmin") as string) ? (
          <Route exact path="/allOrders">
            <AllOrders />
          </Route>
        ) : null}
      </Switch>
    </Router>
  );
}

export default Routes;
