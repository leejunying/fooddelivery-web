import React from "react";
import styled from "styled-components";

export const TopbarDesk = styled.div`
  nav {
    padding: 0 170px;
  }

  .nav__list li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input__item {
    width: 350px;
  }

  .button {
    padding: 10px 20px;
    border-radius: 15px;
    cursor: pointer;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-transition: background-color 100ms linear;
    -ms-transition: background-color 100ms linear;
    transition: background-color 100ms linear;
    text-decoration: none;
  }

  .button span {
    color: red;
    font-size: 16px;
    font-family: "Quicksand", sans-serif;
    -webkit-transition: color 100ms linear;
    -ms-transition: color 100ms linear;
    transition: color 100ms linear;
  }

  .button:hover {
    background: #fff;
  }

  .button:hover span {
    color: #242424;
  }
`;

export const MainMenu = styled.div`
  .Container {
    border-radius: 10px;
    background-color: #2b2828;
  }
`;
