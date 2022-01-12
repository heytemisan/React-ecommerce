import React from "react";
import "./App.css";
import { Shop, Pricelist, Benefit, Learn, Home } from "./components/index";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/pricelist" element={<Pricelist/>}/>
          <Route path="/benefit" element={<Benefit/>}/>
          <Route path="/learn" element={<Learn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
