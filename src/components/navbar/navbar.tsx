import React from "react";
import "./navbar.css";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="#">SHEY PIZZA</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};

export default NavBar;