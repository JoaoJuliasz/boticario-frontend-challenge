import React from 'react';
import './Products.scss'
const Products = ({ product, handleClick, addToCart }) => {
    return (
        <div>
            <div 
                className="product-card">
                <img src={product.images[0].imageUrl} alt={product.name} style={{ width: '150px' }} />
                <h4>{product.name}</h4>
                <h5>{`R$${product.Value.toFixed(2).replace('.', ',')}`}</h5>
                <button className="custom-button" onClick={() => { addToCart ()}}>Add to card</button>
            </div>
        </div>
    );
}

export default Products;