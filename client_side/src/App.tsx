import React from "react";
import { cartItem } from "./interfaces/interfaces";
import Routes from "./routes";

class App extends React.Component {
  render() {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([] as cartItem[]));
    }
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
