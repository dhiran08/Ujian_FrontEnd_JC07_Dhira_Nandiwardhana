import React, { Component } from 'react';

var PRODUK = {
    '1': {id: 1, kategori: "Popok Bertasbih", harga: 200000, nama: "Popok Bertasbih 1"},
    '2': {id: 2, kategori: "Popok Hokage", harga: 50000, nama: "Popok Hokage 1"}
};

class Produk extends Component {
    constructor (props) {
        super (props);
        this.state = {
            produk : PRODUK
        };
    }
    render () {
        return (
            <div>
                {this.state.produk.kategori}
            </div>
        );
    }
}

export default Produk;