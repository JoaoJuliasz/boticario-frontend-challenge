import React from 'react';
import { UserConsumer } from '../context/CartContext';

class Cart extends React.Component {
    render() {
        return (
            <UserConsumer>
                {(cartValues) => {
                    return (
                        <div>
                            {cartValues.cart > 0 ?
                                cartValues.cartItems.map(item =>
                                    <div key={item.id} style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                                        <p>{item.name}</p>
                                        <img src={item.images[0].imageUrl} alt={item.name} style={{ width: '150px' }} />
                                        <span>{item.name}</span>
                                        <span>{`R$${item.Value.toFixed(2).replace('.', ',')}`}</span>
                                        <div>
                                            <i onClick={() => cartValues.removeItem(item)} className="fas fa-angle-left"></i><span>{item.quantity}</span><i onClick={() => cartValues.addItem(item)} className="fas fa-angle-right"></i>
                                        </div>
                                    </div>
                                ) :
                                <></>
                            }
                            <button onClick={cartValues.cleanCart}>Clear</button>
                        </div>
                    )
                }}
            </UserConsumer>
        );
    }
}
export default Cart;