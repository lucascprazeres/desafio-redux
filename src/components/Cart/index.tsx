import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';

import './styles.css';
import { FiShoppingCart } from 'react-icons/fi';

const Cart: React.FC = () => {
  // const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  const cart: any[] = [];

  return (
    <section id="cart-container">
      <div id="cart-title-container">
        <FiShoppingCart size={32} color="#e83f5b" />
        <h1>
          Seu carrinho
      </h1>
      </div>
      <ul id="cart-items-list">
        {cart.map(item => (
          <CartItem
            key={item.product.id}
            name={item.product.title}
            price={item.product.price}
            quantity={item.quantity}
          />
        ))}
      </ul>
    </section>
  )
}

export default Cart;