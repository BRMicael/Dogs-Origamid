import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
// import Api from './api/Api'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login/Login';

const App = () => {
  return (
    <div >
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
