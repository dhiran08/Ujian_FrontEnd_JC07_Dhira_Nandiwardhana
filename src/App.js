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

// dokumentasi

/*
(1). Detik dalam react?
mas baron, kemarin saya menemukan cara membuat serupa dengan jam digital.
Dia nge-get dari new Date() lalu dijadikan string awalnya. Itu kan statis mas tapi.
Nah, dia setelah itu buat componentDidMount sama componentWillUnmount.
componentDidMount tugasnya buat new Date() dan setting interval sedangkan componentwillUnmount clearInterval.
Pertanyaan saya,
- Berarti dia setiap detik render ulang kah? refresh page terus-terusan begitu apa baik untuk web?
- nge-get menit dan detik tertentu itu apa hanya pakai if lalu kalau memenuhi di push ke array kosong saja kah mas? atau ada cara lain di react ini?

(2). Powerful UI?
Saya sempat baca dokumentasi yang mengatakan bahwa react itu bisa digunakan untuk membuat UI yang powerful.
Web yang pakai react itu harus nge-get semua data dulu batu ditampilkan dilayar. Lalu, untuk pemrosesan apapun
yang ada di web tersebut dijalankan lewat "belakang"
Pertanyaan saya,
- Benarkah pernyataan diatas?

(3). Yarn?
Menurut dokumentasi, Yarn itu, "a package manager for node.js"
Pertanyaan saya,
- apa npm juga serupa dengan Yarn?

(4). Non-javascript assets?
"CSS, web fonts, images, and svg can be used as normally in HTML, but can also be 
loaded through the module system if they are included in the app's `src` directory."
Menurut dokumen diatas ituuu, "How does React handle non-javascript assets like CSS and web fonts?"
- saya belum mudeng mas ._."

(5). Pertanyaan?
"On the initial page load, how does the browser get the initial HTML for 
the react app's web page?"

-Saya ingin tahu jawaban pertanyaan diatas secara detil mas m(_ _)m

5 Pertanyaan diatas saya temukan waktu belajar liburan kemarin mas.
Kalau mas baron ndak sibuk bisa tolong dibantu jawab mas? hehe,
liburan ini saya juga masih mau cari jawabannya mas, kalau ndak 
ketemu yaa saya tanya mas lagi m(_ _)m

Sama saya mohon maaf mas belum bisa mengerjakan soalnya m(_ _)m
*/