import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';

import './styles.css';
import { FiShoppingCart } from 'react-icons/fi';
import formatPrice from '../../utils/formatPrice';

const Cart: React.FC = () => {
  // const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  const cart: any[] = [];

  return (
    <section id="cart-container">
      <div id="cart-header">
        <div id="cart-title-container">
          <FiShoppingCart size={32} color="#3d3d4d" />
          <h2>
            Seu carrinho
          </h2>
        </div>

        <h3>{formatPrice(0)}</h3>
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