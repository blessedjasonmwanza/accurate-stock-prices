import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { saveProfiles, currentCompany } from '../redux/store/stocks';
import Apis, { key as apiKey } from '../components/Apis';
import PageHeader from '../components/PageHeader';
import '../components/css/StockDetails.css';

export default function StockDetails() {
  const {company:symbol} = useParams();
  const profiles = useSelector((state) => state.stocks.profiles);
  const companyData = useSelector((state) => state.stocks.currentData);
  // current
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    const savedData = JSON.parse(localStorage.getItem('profiles')) || [];
    if (savedData && savedData !== null && savedData.find(profile => profile.symbol === symbol)) {
      savedData.map(profile => {
        if(profile.symbol === symbol){
          dispatch(currentCompany(profile));
        }
      });
      dispatch(saveProfiles(savedData));
    } else {
      axios.get(`${Apis.profiles}${symbol}?apikey=${apiKey}`).then((res) => {
        savedData.push(res.data[0]);
        dispatch(saveProfiles(savedData));
        dispatch(currentCompany(res.data[0]));
      }).catch((error) => {
        console.log('an error ocurred');
      });
    }
  }, []);
  const {companyName, ipoDate, range, ceo, description, image, website, price, industry, sector, currency, address, city, state, phone, country} = companyData;
  return (
    <>
      <PageHeader  title={companyName}/>
      <main style={{gap:'5%'}}>
        <div className="card">
          <img src={image} className="stockLogo"/>
          <div className="row">
            <span>Symbol</span>
            <b className="row-value">{symbol}</b>
          </div>
          <div className="row">
            <span> Industry</span>
            <b className="row-value">{industry}</b>
          </div>
          <div className="row">
            <span> Sector</span>
            <b className="row-value">{sector}</b>
          </div>
          <div className="row">
            <span> Price </span>
            <b className="row-value">{currency} {price}</b>
          </div>
          <div className="row">
            <span>Range</span>
            <b className="row-value">{currency} {range}</b>
          </div>
          <div className="row">
            <span>Country</span>
            <b className="row-value">{country}</b>
          </div>
          <div className="row">
            <span>State</span>
            <b className="row-value">{state}</b>
          </div>
          <div className="row">
            <span>City</span>
            <b className="row-value">{city}</b>
          </div>
          <div className="row">
            <span>Address</span>
            <b className="row-value">{address}</b>
          </div>
          <div className="row">
            <span>Phone</span>
            <b className="row-value">{phone}</b>
          </div>
          <div className="row">
            <span>CEO</span>
            <b className="row-value">{ceo}</b>
          </div>
          <div className="row">
            <span>IPO Date</span>
            <b className="row-value">{ipoDate}</b>
          </div>
          <div className="row">
            <span>Website</span>
            <a href={website} target="_blank" className="row-value">{website}</a>
          </div>
        </div>
        <section className="card stockInfo">
          <h2>
            About
          </h2>
          <p>
            {description}
          </p>
        </section>
      </main>
    </>
  );
}
