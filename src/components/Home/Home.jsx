import React from 'react';

import Products from '../Products/Products';
import { UserConsumer } from '../../context/CartContext';
import { HomeTitle, HomeContainer } from './Home.styles'

class Home extends React.Component {
        render() {
            return (
                <UserConsumer>
                    {(products) => {
                        return (<>
                            <HomeTitle>Ultimos Produtos</HomeTitle>
                            <HomeContainer>
                                {products.products.map(product =>
                                    <Products key={product.id} product={product} handleClick={() => products.handleClick(product.Value)} addToCart={() => products.addToCart(product)} />
                                )}
                            </HomeContainer>
                        </>)
                    }}
                </UserConsumer>
            );
        }
    }
export default Home;