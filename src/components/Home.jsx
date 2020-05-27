import React from 'react';

import Products from './Products/Products';
import { UserConsumer } from '../context/CartContext';
class Home extends React.Component {
    render() {
        return (
            <UserConsumer>
                {(products) => {
                    return (<>
                        <h1 style={{ textAlign: 'center' }}>Ultimos Produtos</h1>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                            {products.products.map(product =>
                                <Products key={product.id} product={product} handleClick={() => products.handleClick(product.Value)} addToCart={() => products.addToCart(product)} />
                            )}
                        </div>
                    </>)
                }}
            </UserConsumer>
        );
    }
}
export default Home;