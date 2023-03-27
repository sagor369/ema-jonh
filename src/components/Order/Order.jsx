import React from "react";
import './Order.css'

const Order = ({cart}) => {
    let total = 0
    let shippingCharge = 0
    for(const product of cart){
        total = total + product.price
        shippingCharge = shippingCharge + product.shipping
    }
    const tex = (total *7/100)
    const grandTotal = total + shippingCharge + tex

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items : {cart.length}</p>
      <p>Price: ${total}</p>
      <p>Total Shipping Charge: ${shippingCharge}</p>
      <p>Tex: ${tex.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>

    </div>
  );
};

export default Order;
