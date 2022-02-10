import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { saveProfiles } from '../redux/store/stocks';
import Apis from '../components/Apis';
export default function StockCard({ data }) {
  const { symbol, price, name } = data;
  const image = (symbol) => {
    const img = new Image();
    img.src = `https://financialmodelingprep.com/image-stock/${symbol}.png`
    return img.height != 0 ? 
    `https://financialmodelingprep.com/image-stock/${symbol}.png`
    : `https://financialmodelingprep.com/image-stock/${symbol}.jpg`
  }
  // const bgImage = `https://financialmodelingprep.com/image-stock/${symbol}.png`;
  return (
    <NavLink to="#" className='stock-card' style={
      {
        backgroundImage: image(symbol),
        backgroundImage: `linear-gradient(rgba(4, 156, 85, 0.1) 0%, rgba(0, 0, 0, 0.01) 100%), url(${image(symbol)})`
      }
    }>
      <h3 className='company'>{name}</h3>
      <h4 className='stock-price'>
        <code>USD</code>
        <span>{price}</span>
      </h4>
    </NavLink>
  );
}
