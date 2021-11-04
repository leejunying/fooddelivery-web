import React from "react";

import Home from "../Pages/Home/View/Home";
import Map from "../Components/Heremaps/View/Heremap";

import Product from "../Components/Fooditems/View/Product";

import Btngmail from "../Components/LoginGoogle/Btngmail";

//Map component default call
// <Map    address={"507 Gia Phú,Phường 3,Quận 6"}  location={{lat:0,lng:0}}  />

const Main = [
  {
    path: "/",
    exact: true,
    main: () => <Home></Home>,
  },

  // {
  //     path:'/Products',
  //     exact:true,
  //     main: ({location})=><Products location={location}></Products>
  // },
  // {

  //     path:'/Products/:name',
  //     exact:true,
  //     main:({match})=><Carddetail match={match}  ></Carddetail>
  // },

  //Demo map component
  //   <Map
  //   address={"555 Bùi Thị Xuân, Phường 1, Tân Bình, Thành phố Hồ Chí Minh"}
  // ></Map>
];

export default Main;
