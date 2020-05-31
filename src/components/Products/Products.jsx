import React from 'react';
import {ProductContainer, CustomButton, BackgroundImage} from './Products.styles'

const Products = ({ product, addToCart }) => {
    return (
            <ProductContainer>
                <BackgroundImage src={product.images[0].imageUrl}/>
                <h4>{product.name}</h4>
                <h5>{`R$${product.Value.toFixed(2).replace('.', ',')}`}</h5>
                <CustomButton onClick={() => { addToCart ()}}>Add to cart</CustomButton>
            </ProductContainer>
    );
}

export default Products;