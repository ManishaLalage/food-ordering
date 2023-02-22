import React from 'react';
import "./App.css"

import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
// import Body from './components/RestaurantCard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
 {/* < h1>hello</h1> */}

      <Header />
      <Body />
      <Footer />
    </>
);

