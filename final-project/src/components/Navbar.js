import React from "react";


import './Navbar.css';
function Navbar() {
  return (
    <div className = 'navbar__main'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            FoodHub
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item nav__hover">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item nav__hover">
                <a className="nav-link active" aria-current="page" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item nav__hover">
                <a className="nav-link active" aria-current="page" href="#">
                 About us
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-secondary btn__login" type="submit">
                Login
              </button>
              <button className="btn btn-outline-success btn__register" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
