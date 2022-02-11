import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import StockCard from '../components/StockCard';
import { saveStocksList, searchResults } from '../redux/store/stocks';
import Apis from '../components/Apis';

export default function Home() {
  const stocksLists = useSelector((state) => state.stocks.stocksList);
  const dispatch = useDispatch();
  const savedData = JSON.parse(localStorage.getItem('stocksList'));
  useEffect(() => {
    if (savedData && savedData !== null) {
      dispatch(saveStocksList(savedData));
    } else {
      axios.get(Apis.stocksList).then((res) => {
        dispatch(saveStocksList(res.data));
      }).catch((error) => error);
    }
  }, []);

  const Search = (value) => {
    if (value.length > 0) {
      const results = stocksLists.filter((company) => (
        company.name.includes(value)
          || company.name.search(value) !== -1
          || company.symbol.search(value) !== -1
      ));
      dispatch(searchResults(results));
    } else {
      dispatch(searchResults(savedData));
    }
  };
  return (
    <>
      <Header />
      <main>
        <div className="search-container">
          <input type="search" id="filter" placeholder="Search" onKeyDown={(e) => Search(e.target.value)} />
          <span>
            <FontAwesomeIcon icon={faMicrophone} />
            <FontAwesomeIcon icon={faCog} />
          </span>
        </div>
        {stocksLists.slice(0, 100).map(
          (company) => <StockCard key={company.symbol} data={company} />,
        )}
      </main>
    </>
  );
}
