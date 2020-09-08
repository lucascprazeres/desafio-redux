import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import CatalogItem from '../CatalogItem';

import './styles.css';

const Catalog: React.FC = () => {
  // const [catalog, setCatalog] = useState<IProduct[]>([]);

  const catalog: any[] = [];

  useEffect(() => {
    // TODO load products
  }, []);

  return (
    <main id="catalog">
      {catalog.map(product => (
       <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  )
}

export default Catalog;