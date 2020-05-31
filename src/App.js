import React from 'react';
import { UserProvider } from './context/CartContext';
import { Appcontainer } from './App.styles'

import Header from './components/Header/Header';
import Index from './Routes';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: 0,
      cartItems: [],
    }
  }
  componentDidMount() {
    let id = 0;
    fetch('./products.json', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        data.map(elem => elem.id = id++)
        this.setState({
          products: data,
        }, () => console.warn())
      })
  }
  render() {
    const { products, cartItems, cart } = this.state;
    const cleanCart = this.handleDelete;
    const addToCart = this.addToCart;
    const removeItem = this.removeItem;
    const addItem = this.addItem;
    const value = {
      products,
      cartItems,
      cart,
      cleanCart,
      addToCart,
      removeItem,
      addItem,
    };
    return (
      <>
        <UserProvider value={value}>
          <Appcontainer>
            <Header cart={this.state.cart} onDelete={this.handleDelete} />
            <Index />
          </Appcontainer>
        </UserProvider>
      </>
    );
  };

  updateCartItems = (elem) => {
    this.setState(state => {
      return {
        cartItems: [...state.cartItems, { ...elem, quantity: 1 }],
        cart: state.cart + elem.Value
      }
    },
      () => console.warn()
    );
  };

  addToCart = elem => {
    const { cartItems } = this.state;
    if (Array.isArray(cartItems) && cartItems.length === 0) {
      return this.updateCartItems(elem);
    }
    const existingCartItem = cartItems.find(cartItem => cartItem.id === elem.id);
    if (existingCartItem) {
      const newCartValue = [...cartItems]
      return cartItems.map((item, index) => {
        if (item.id === elem.id) {
          newCartValue[index] = { ...item, quantity: item.quantity + 1 };
          this.setState(state => ({
            cartItems: newCartValue,
            cart: state.cart + item.Value
          }),
            () => console.warn()
          );
        } else {
          this.updateCartItems(item);
        };
      });
    } else {
      this.updateCartItems(elem);
    };
  }

  removeItem = elem => {
    const { cartItems } = this.state;
    const existingCartItem = cartItems.find(cartItem => cartItem.id === elem.id);
    const newCartValue = [...cartItems];
    if (existingCartItem.quantity === 1) {
      newCartValue.filter(cartItem => cartItem.id !== elem.id);
      return this.setState(state => ({
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== elem.id),
        cart: state.cart - elem.Value,
      }),
        () => console.warn()
      );
    } else {
      return cartItems.map((cartItem, index) => {
        if (cartItem.id === elem.id) {
          newCartValue[index] = { ...cartItem, quantity: cartItem.quantity - 1 };
          this.setState(state => ({
            cartItems: newCartValue,
            cart: state.cart - elem.Value,
          }),
            () => console.warn()
          );
        };
      });
    };
  };

  addItem = elem => {
    const { cartItems } = this.state;
    const existingCartItem = cartItems.find(cartItem => cartItem.id === elem.id);
    const newCartValue = [...cartItems];
    if (existingCartItem) {
      return cartItems.map((cartItem, index) => {
        if (cartItem.id === elem.id) {
          newCartValue[index] = { ...cartItem, quantity: cartItem.quantity + 1 };
          this.setState(state => ({
            cartItems: newCartValue,
            cart: state.cart + elem.Value
          }),
            () => console.warn()
          );
        };
      });
    };
  };

  handleDelete = () => {
    this.setState({
      cart: 0,
      cartItems: [],
    })
  };
}
export default App;
