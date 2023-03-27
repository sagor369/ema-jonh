import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Products.css'

// products load function 
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    // cart items added function 
    const [cart, setCart] = useState([])

    const addToCart= (product)=>{
        // const newCart = [...cart,product];
        // setCart(newCart)
        let newCart =[]
        const exit = cart.find(pd => pd.id === product.id)
        if(!exit){
             product.quantity = 1
             newCart = [...cart,product];
        }
        else{
            exit.quantity = exit.quantity +1
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining ,exit]
        }
        setCart(newCart)
        addToDb(product.id)
    }

    // local storage to cart items load 
    useEffect(()=>{
        const getCart =  getShoppingCart()
        const addProduct = []
        for (const id in getCart){
            const saveProduct = products.find(product => product.id === id )
            if(saveProduct){
                const quantity = getCart[id]
                saveProduct.quantity = quantity
                addProduct.push(saveProduct)
            }
            
            setCart(addProduct)
        }
    },[products])


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