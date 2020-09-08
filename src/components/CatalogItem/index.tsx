import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatPrice from '../../utils/formatPrice';

import './styles.css';

interface CatalogItemProps {
  product: {
    title: string;
    price: number;
  }; // TODO
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    // TODO add product
  }, []);

  const hasFailedStockCheck = false; //TODO verify error based on the ordered ammount

  return (
    <article className="product-container">
      <img
        src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/camiseta-ecommerce.jpg"
        alt="camisa"
      />
      <span>{product.title}</span>

      <div className="product-footer">
        <strong>{formatPrice(product.price)}</strong>
        <button
          type="button"
          onClick={handleAddProductToCart}
        >
          +
    </button>
      </div>

      {hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de estoque</span>}
    </article>
  );
}

export default CatalogItem;