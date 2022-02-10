import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Header from '../components/Header';
import StockCard from '../components/StockCard';
import { saveStocksList } from '../redux/store/stocks';
import Apis from '../components/Apis';

export default function Home() {
  const stocksLists = useSelector((state) => state.stocks.stocksList);
  const dispatch = useDispatch();
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('stocksList'));
    if (savedData && savedData !== null) {
      dispatch(saveStocksList(savedData));
    } else {
      axios.get(Apis.stocksList).then((res) => {
        dispatch(saveStocksList(res.data));
      }).catch((error) => {
        console.log('an error occured');
      });
      
    }
  }, []);
  return (
    <>
      <Header />
      <main>
        {stocksLists.slice(0, 100).map((company) => <StockCard key={company.symbol} data={company}/>)}
      </main>
    </>
  );
}
