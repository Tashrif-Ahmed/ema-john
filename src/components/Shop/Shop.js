import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Card from '../Card/Card';
import Product from '../Product/Product';
import "./Shop.css";
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)
    const [card, setCard] = useState([])
    console.log(products);

    const handleProductAdd = (product) =>{
        // console.log('Product added',product);
        const newCard =[...card,product];
        setCard(newCard)
        
    } 

    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        products.map(pd => 
                        <Product 
                        handleProductAdd = {handleProductAdd}
                        product={pd}
                        ></Product>)
                    }
                </ul>
            </div>
            <div className="card-container">
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;