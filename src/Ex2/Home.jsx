import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Product from './Product';
import Carousel from './Carousel';

class Home extends Component {
    render() {
        return (
            <div className="bg-dark">
                <Header/>
                <Carousel/>
                <Product/>
                <Footer/>
            </div>
        );
    }
}

export default Home;