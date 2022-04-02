import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './containers/Error';
import ProductComponent from './containers/ProductComponent';
// import Header from './containers/Header';
import ProductDetails from './containers/ProductDetails';
import ProductListing from './containers/ProductListing';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          {/* <Header /> */}
          <Route path="/" element={<ProductListing />} />
          <Route path="/product" element={<ProductComponent />} />  
          <Route path="/product/:id" element={<ProductDetails />} />  
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
