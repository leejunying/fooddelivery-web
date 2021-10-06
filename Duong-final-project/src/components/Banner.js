import React from 'react'
import image from "./banner-image.jpg";
import './Banner.css'
function Banner() {
    return (
        <div className = 'banner'>
            <div className = 'banner__left'>
                <h1>Safe food</h1>
                <h1>Delivery</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel alias maxime consectetur. Ad iusto vitae nesciunt sunt dolor Amet</p>
                <button>ORDER NOW</button>
            </div>
            <img src={image} alt='banner'/>            
        </div>
    )
}

export default Banner
