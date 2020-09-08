import React from 'react';
import Catalog from '../../components/Catalog';
import Cart from '../../components/Cart';

import { FiShoppingBag } from 'react-icons/fi';

import './styles.css'
;
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header>
        <div id="title-container">
          <FiShoppingBag size={32} color="#fff"/>
          <h1>Go<strong>Marketplace</strong></h1>
        </div>
      </header>
      <Catalog />
      <Cart />
    </div>
  )
}

export default Dashboard;