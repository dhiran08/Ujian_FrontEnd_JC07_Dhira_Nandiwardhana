import React, { Component } from 'react';

class Jam extends Component {
    constructor (props) {
        super (props);
        this.state = {
            waktu: new Date().toLocaleString()
        }
    }

    detik = () => {
        this.setState ({
            waktu: new Date().toLocaleString()
        });
    }

    componentDidMount () {
        this.perDetik = setInterval (
            () => {this.detik()},
            1000
        );
    }

    componentWillUnmount () {
        clearInterval(this.perDetik);
    }

    render () {
        return (
            <div>
                {this.state.waktu}
            </div>
        );
    }
}

export default Jam;