import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import StockCard from '../components/StockCard';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <StockCard />
        <StockCard />
        <StockCard />
        <StockCard />
      </main>
    </>
  );
}
