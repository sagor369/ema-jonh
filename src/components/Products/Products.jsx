import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Order from '../Order/Order';
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
        addToDb(product.id)
    }
    useEffect(()=>{
        const getCart =  getShoppingCart()
        console.log(getCart)
    },[])
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
                <Order cart = {cart}></Order>
            </div>
        </div>
    );
};

export default Products;