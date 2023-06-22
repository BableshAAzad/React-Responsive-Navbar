import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/Products'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/services' exact element={<Services/>}></Route>
          <Route path='/products' exact element={<Products/>}></Route>
          <Route path='/sign-up' exact element={<SignUp/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
