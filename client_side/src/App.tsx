import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { cartItem } from "./interfaces/interfaces";
import Routes from "./routes/routes";

AOS.init();
function App() {
  //setting logged in status in local storage
  let [isLoggedIn, setLoggedIn] = useState(
    !(localStorage.getItem("currentUser") === null)
  );

  //setting cart array in local storage
  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([] as cartItem[]));
  }

  //setting admin status in local storage
  if (localStorage.getItem("isAdmin") === null) {
    localStorage.setItem("isAdmin", JSON.stringify(false));
  }

  return (
    <div className="App">
      <Routes isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default App;

//add spinners
