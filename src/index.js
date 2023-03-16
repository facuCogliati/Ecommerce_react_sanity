import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Toaster } from 'react-hot-toast';


import Home from './pages/Index'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductDetail from './pages/ProductDetail';
import { Footer, Navbar } from './components';
import {StateContext} from './context/StateContext'
import Success from './pages/Succes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <StateContext>
      
      <header>
        <Navbar/>
      </header>

      <Toaster/>
      <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/product/:productid' element={<ProductDetail />}/>
          <Route path='/succes' exact element={<Success />}/>
      </Routes>

      <footer>
        <Footer/>
      </footer>


      </StateContext>
    </BrowserRouter>
  </React.StrictMode>
);

