import React from 'react'
import './App.css';
import {Shop, Pricelist, Benefit, Learn} from './components/index'

function App() {

  return (
    <div className="App">
      <Shop/>
      <Pricelist/>
      <Benefit/>
      <Learn/>
    </div>
  )
}

export default App
