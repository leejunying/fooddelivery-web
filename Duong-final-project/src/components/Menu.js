import React from "react";
import Product from "./Product";
import './Menu.css'; 
import image1 from './banner-image.jpg'
function Menu() {
  return (
    <div className="menu">
      <Product
        id={1}
        title={"Red Aubergine Pureé with Burnt Toast"}
        address={
          "Whipped roasted eggplant & red pepper puree with char-grilled baguette."
        }
        type={"Vegan · Vegetarian · Organic"}
        price={`15.00 `}
        image={image1}
      />

    </div>
  );
}

export default Menu;
