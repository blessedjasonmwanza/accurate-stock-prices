import React from 'react';
import { NavLink } from 'react-router-dom';
export default function StockCard() {
  return (
    <NavLink to="#" className='stock-card' style={
      {
        backgroundImage: 'url(https://financialmodelingprep.com/image-stock/AAPL.png)',
        backgroundImage: 'linear-gradient(rgba(4, 156, 85, 0.1) 0%, rgba(0, 0, 0, 0.01) 100%), url(https://financialmodelingprep.com/image-stock/AAPL.png)'
      }
    }>
      <h3 className='company'>Apple Inc</h3>
      <h4 className='stock-price'>
        <code>USD</code>
        <span>145.85</span>
      </h4>
    </NavLink>
  );
}
