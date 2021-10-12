import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import CartScreen from "./screens/cartscreen";
import Homescreen from "./screens/homescreen";

function Routes() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Homescreen />
        </Route>
        <Route exact path="/cart">
          <CartScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
