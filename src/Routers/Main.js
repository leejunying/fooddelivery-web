import React from "react";

import Home from "../Pages/Home/View/Home";


const Main=[

    {
        path:'/',
        exact:true,
        main:()=><Home></Home>
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


]

export default Main;