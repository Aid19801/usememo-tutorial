import React from 'react';
import './styles.css';

function ShoppingBasket({ total, items }) {
    console.log("Re Rendered Shopping Basket" + Date.now());
    return (
        <div className="basket__container">
            <h4 className="basket__heading">Shopping Basket</h4>
            <p className="basket__info">Total: ${total}</p>
            <p className="basket__info">No. of Items: {items.length}</p>
        </div>
    )
}

export default ShoppingBasket;