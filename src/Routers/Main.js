import React from "react";

import Home from "../Pages/Home/View/Home";
import Map from "../Components/Googlemap/View/Heremap";

const Main = [
  {
    path: "/",
    exact: true,
    main: () => <Map location={"507 Gia Phú,Phường 3,Quận 6"} />,
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
];

export default Main;
