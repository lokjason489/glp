import React,{useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import {Helmet} from "react-helmet";

const Layout = ({ skin, children }) => {

  const currencyList = [
    { label: 'mop', value: 1 },
    { label: 'hkd', value: 1 },
    { label: 'rmb', value: 1 },
    { label: 'twd', value: 1 },
    { label: 'jpy', value: 1 },
    { label: 'krw', value: 1 }
  ]

  const setTheme = (theme) => {
    if (theme && (theme.toUpperCase() === 'TKL' || theme.toUpperCase() === 'GLP' || theme.toUpperCase() === 'PVM')) {
      document.getElementsByTagName('html')[0].setAttribute('data-theme', theme.toUpperCase());
      return;
    }
    document.getElementsByTagName('html')[0].setAttribute('data-theme', 'GLP');
  }

  useEffect(() => {
    setTheme(skin);
    const favicon = document.getElementById('favicon');
    if(favicon){
      if (skin && skin.toUpperCase() === 'TKL') {
        favicon.href = '/K-head_black_RGB.ico';
      } else if (skin && skin.toUpperCase() === 'PVM') {
        favicon.href = '/pvmfavicon.ico';
      } else {
        favicon.href = '/favicon.ico';
      }
    } 
  }, [skin]);

  const [currency, setCurrency] = useState(currencyList.filter(el => el.label === "mop")[0].label);

  return(
  <div className="flex flex-col min-h-screen">
    <Helmet>
      <link id='favicon' rel="icon" href="/favicon.ico" />
    </Helmet>
    <Header currencyList={currencyList} currency={currency} setCurrency={setCurrency} skin={skin && (skin.toUpperCase() === 'TKL' || skin.toUpperCase() === 'GLP' || skin.toUpperCase() === 'PVM')? skin:'GLP'} />
    <main className="flex-grow bg-white">
      <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6 min-h-50xl py-6">{children(currency)}</div>
    </main>
    <Footer/>
  </div>
  )
};

export default Layout;