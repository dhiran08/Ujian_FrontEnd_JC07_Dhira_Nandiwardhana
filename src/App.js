import React, { Component } from 'react';
import Jam from './komponen_iseng/Jam.js';
import HeaderBeneran from './component/HeaderBeneran.js';
import Produk from './component/Produk.js';

import cobaGambar1 from './komponen_iseng/gambar/Coba4_2.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={cobaGambar1} className="App-logo" alt="logo" />
          <Jam className="cssJam"></Jam>
          <HeaderBeneran className="HeaderBeneran"></HeaderBeneran>
          <Produk></Produk>
        </header>
      </div>
    );
  }
}

export default App;
