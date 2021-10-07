import React from 'react'
import './Product.css';

function Product({id, title, description, type, price, image}) {

    return (
        <div className = 'product'>
            <div className = 'product__info'>
                <h6>{title}</h6>
                <span>{description}</span>
                <span>{type }</span>
                <p className = 'product__price'>
                    <small>$</small>
                    <small>{price}</small>  
                </p>
            </div>
            <img src={image} alt = 'Product' className='product__image'/>
        </div>
    )
}

export default Product; 
