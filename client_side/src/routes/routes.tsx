import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/login/login";
import NavBar from "../components/navbar/navbar";
import Signin from "../components/signin/signIn";
import { loginStatusProps } from "../interfaces/interfaces";
import CartScreen from "../screens/cartscreen";
import Homescreen from "../screens/homescreen";
import OrderScreen from "../screens/orderscreen";

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
      </Switch>
    </Router>
  );
}

export default Routes;