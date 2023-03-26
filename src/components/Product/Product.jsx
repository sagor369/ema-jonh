import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const addToCart = props.addToCart
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
                <button onClick={()=>addToCart(props.product)}>Add to cart  <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>

        </div>

        
    );
};

export default Product;