import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';  
import Header from './components/Header'
import SeparationBar from './components/SeparationBar';
import Navbar from './components/Navbar';
import SupermarketOffer from './components/SupermarketOffer';
import OfferContainer from './components/OfferContainer';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <SeparationBar/>
      <OfferContainer/>
      <Footer/>

    </div>
  );
}

export default App;
