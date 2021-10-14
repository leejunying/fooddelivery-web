import React, { useState } from "react";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import ListSubheader from "@mui/material/ListSubheader";
// import SearchIcon from "@mui/icons-material/Search";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import MenuIcon from "@mui/icons-material/Menu";
// import { IconButton } from "@material-ui/core";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AddIcon from "@mui/icons-material/Add";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TuneIcon from '@mui/icons-material/Tune';
import { Link } from "react-router-dom";
import "./Header.css";
import "../App.css";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light flex jus-center al-center">
        <div className="container-fluid ">
          <Link to="/">
            <h3>FoodHub</h3>
          </Link>

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav__list">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item input__item">
                <div className="input-group input-group-sm">
                  <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Địa điểm, món ăn, loại hình..." width="400"/>
                </div>
                <div> 
                  Bộ lọc
                </div>
              </li>

              <li className="nav-item ">
                
              </li>

              <li className="nav-item ">
                
              </li>
            </ul>
            <div>
              <Link to="">
                Đăng nhập
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
