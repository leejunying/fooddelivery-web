import React from 'react'
import './Product.css';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

function Product({id, title, address, type, image}) {

    return (
        <div className = 'product'>
            <img src={image} alt = 'Product' className='product__image'/>
            <div className = 'product__info'>
                <h6>{title}</h6>
                <p>{address}</p>  
            </div>
            <div className = 'product__type'>
                {LabelImportantIcon}
                <p>{type}</p>
            </div> 
            
        </div>
    )
}

export default Product; 
