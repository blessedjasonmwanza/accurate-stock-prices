import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { saveProfiles } from '../redux/store/stocks';
import Apis from '../components/Apis';
export default function StockCard({ data }) {
  const { symbol, price, name } = data;

  const image = (symbol) => {
    const imgUrl = (symbol, ext) => `https://financialmodelingprep.com/image-stock/${symbol}.${ext}`;
    const img = new Image();
    img.src = imgUrl(symbol, 'png')
    return img.height != 0 ? imgUrl(symbol, 'png')
    : imgUrl(symbol, 'jpg');
  }
  return (
    <NavLink to={`/company/${symbol}`} className='stock-card' style={
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
