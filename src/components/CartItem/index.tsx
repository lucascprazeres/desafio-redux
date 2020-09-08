import React, { useCallback } from 'react';
import formatPrice from '../../utils/formatPrice';

import './styles.css';

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
}

const CartItem: React.FC<CartItemProps> = (props) => {
  const handleAddProductToCart = useCallback(() => {}, []);

  const handleRemoveProductFromCart = useCallback(() => {}, []);
  
  return (
    <li id="cart-item-container">
      <div id="cart-item-header">
        <span>{props.name}</span>
        <strong>{formatPrice(props.price)}</strong>
      </div>

      <div id="cart-item-footer">
        <div id="cart-item-control">
          <button>+</button>
          <button>-</button>
        </div>
        <strong>{props.quantity}</strong>
      </div>
    </li>
  )
}

export default CartItem;