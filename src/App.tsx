import React from "react";
import NavBar from "./components/navbar/navbar";
import Homescreen from "./screens/homescreen";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Homescreen />
      </div>
    );
  }
}

export default App;
