import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {
    // console.log(props);
    const {name, img, seller, price ,stock, key} = props.product
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p>by{seller}</p>
                <h3>${price}</h3>
                <p>only {stock} left -order soon</p>
                <button 
                    onClick= {()=> props.handleProductAdd(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;