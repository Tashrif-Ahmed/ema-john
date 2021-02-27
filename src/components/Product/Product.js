import React from 'react';
import "./Product.css"

const Product = (props) => {
    console.log(props.product.name);
    const {name, img, seller, price ,stock} = props.product
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p>by{seller}</p>
                <h3>${price}</h3>
                <p>only {stock} left -order soon</p>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;