import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    const [cart, setCart] = useState([])
    const addToCart= (product)=>{
        const newCart = [...cart,product];
        setCart(newCart)
    }
    return (
        <div className='products'>
            <div>
            <h1>Products comeing son {products.length}</h1>
            <div  className='product-card'>
            {
                products.map(product => <Product key = {product.id} product={product} addToCart = {addToCart}></Product>)
            }
            </div>

            </div>
            <div className='cart'>
                <h2>Order Summary</h2>
                <p>Selected Items : {cart.length}</p>
            </div>
        </div>
    );
};

export default Products;