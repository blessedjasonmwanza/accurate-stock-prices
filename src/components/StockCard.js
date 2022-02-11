import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const StockCard = ({ data }) => {
  const { symbol, price, name } = data;

  const image = (symbol) => {
    const imgUrl = (symbol, ext) => `https://financialmodelingprep.com/image-stock/${symbol}.${ext}`;
    const img = new Image();
    img.src = imgUrl(symbol, 'png');
    return img.height !== 0 ? imgUrl(symbol, 'png')
      : imgUrl(symbol, 'jpg');
  };
  return (
    <NavLink
      to={`/company/${symbol}`}
      className="stock-card"
      style={
      {
        backgroundImage: `linear-gradient(rgba(4, 156, 85, 0.1) 0%, rgba(0, 0, 0, 0.01) 100%), url(${image(symbol)})`,
      }
    }
    >
      <h3 className="company">{name}</h3>
      <h4 className="stock-price">
        <code>USD</code>
        <span>{price}</span>
      </h4>
    </NavLink>
  );
};

StockCard.defaultProps = {
  data: {},
  symbol: '',
  price: '',
  name: '',
};
StockCard.propTypes = {
  data: PropTypes.PropTypes.instanceOf(Object),
  symbol: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
};

export default StockCard;
