import React from 'react';
import { UserConsumer } from '../../context/CartContext';
import { CartContainer, CartHeader, CartProducts, BackgroundImage, ProductDescription, ProductQuantity, CartTotal, ImageCointainer } from './Cart.styles';
class Cart extends React.Component {
    render() {
        return (
            <UserConsumer>
                {(cartValues) => {
                    return (
                        <CartContainer>
                            <CartHeader>
                                <div>Product</div>
                                <div>Description</div>
                                <div>Quantity</div>
                                <div>Price</div>
                            </CartHeader>
                            {cartValues.cart > 0 ?
                                cartValues.cartItems.map(item =>
                                    <CartProducts key={item.id}>
                                        <ImageCointainer>
                                            <BackgroundImage src={item.images[0].imageUrl} />
                                        </ImageCointainer>
                                        <ProductDescription>{item.name}</ProductDescription>
                                        <ProductQuantity>
                                            <div><i onClick={() => cartValues.removeItem(item)} className="fas fa-angle-left"></i></div>
                                            <span>{item.quantity}</span>
                                            <div><i onClick={() => cartValues.addItem(item)} className="fas fa-angle-right"></i></div>
                                        </ProductQuantity>
                                        <span>{`${item.Value.toFixed(2).replace('.', ',')}`}</span>
                                    </CartProducts>
                                ) :
                                <></>
                            }
                            <CartTotal>
                                <span>Total: R${`${cartValues.cart.toFixed(2).replace('.', ',')}`}</span>
                                <button onClick={cartValues.cleanCart}>Clear</button>
                            </CartTotal>
                        </CartContainer>
                    )
                }}
            </UserConsumer>
        );
    }
}
export default Cart;