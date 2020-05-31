import React from 'react';

import {
    HeaderContainer,
    TitleContainer,
    AlignCar,
    CartView,
    ProductsCategories,
    FlexDisPlay,
} from './Header.styles';

const Header = ({ cart }) => (
    <HeaderContainer>
        <TitleContainer to='/'>
            MINHA LOJA
        </TitleContainer>
        <FlexDisPlay>
            <ProductsCategories>PERFURMARIA</ProductsCategories>
            <ProductsCategories>MAQUIAGEM</ProductsCategories>
            <ProductsCategories>CABELOS</ProductsCategories>
            <ProductsCategories>INFANTIL</ProductsCategories>
        </FlexDisPlay>
        <AlignCar>
            <CartView to='/cart'>
                <i className="fas fa-shopping-cart"></i>
                {cart > 0 ? ` R$${cart.toFixed(2).replace('.', ',')}` : ''}
            </CartView>
        </AlignCar>
    </HeaderContainer>
);

export default Header;