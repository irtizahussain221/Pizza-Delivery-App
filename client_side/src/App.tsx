import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { cartItem } from "./interfaces/interfaces";
import Routes from "./routes/routes";

AOS.init();
function App() {
  let [isLoggedIn, setLoggedIn] = useState(
    !(localStorage.getItem("currentUser") === null)
  );

  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([] as cartItem[]));
  }

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
//Screens ka masla hal krna hy
//Comments
//to do
//animations
//Remove any
//add spinners for loading
//reconfigure file system
//error boundaries
