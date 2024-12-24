import React from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Products from "./components/Products"
import SearchResults from "./components/SearchResults";
import Checkout from "./components/Checkout"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/search" element={<SearchResults />} />
        <Route exact path="/products/:id" element={<Products />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
