import React from "react";
import "../Styled/Product.css";

function Product() {
  return (
    <div className="product">
      <img
        src={"https://cdn.tgdd.vn/2021/04/CookProduct/1200-1200x676-87.jpg"}
        alt="Product"
        className="product__image"
      />
      <div className="product__info">
        <h6>haha</h6>
        <p>555551221</p>
      </div>
      <div className="product__type">
        <p>dsadsada</p>
      </div>
    </div>
  );
}

export default Product;
