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
    return (
        <div className='products'>
            <div>
            <h1>Products comeing son {products.length}</h1>
            <div  className='product-card'>
            {
                products.map(product => <Product key = {product.id} product={product}></Product>)
            }
            </div>

            </div>
            <div>
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Products;