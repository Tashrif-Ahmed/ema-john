import React from 'react';

const Card = (props) => {

    const card = props.card
    console.log(card);
    const total = card.reduce((total, prd) => total + prd.price, 0);
    let shipping = 0;

    
    if (total > 60) {
        shipping = 1;
    }
    else if (total > 35) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99
    }

    let tax = Math.round(total *.05);
    // const shipping= card.reduce((shipping, prd) => shipping + prd.shipping, 0);

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: { Math.round(card.length)}</p>
            <p><small>Product price: { Math.round(total)}$</small></p>
            <p><small>Tax: {tax}$</small></p>
            <p><small>Shipping price: {shipping}$</small></p>
            <p>Total price: {Math.round(total + shipping + tax)}$</p>

        </div>
    );
};

export default Card;