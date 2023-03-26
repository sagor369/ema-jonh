import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, img, price, seller,quantity,ratings} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='title'>
                <div className='info'>
                    <h6>{name}</h6>
                    <p>Price: ${price}</p>
                </div>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <div className='footer'>
                <button>Add to cart</button>
                <img src="" alt="" />
            </div>

        </div>

        
    );
};

export default Product;