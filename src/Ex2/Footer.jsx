import React, { Component } from "react";
import promotion_1 from './assets/img/promotion_1.png';
import promotion_2 from './assets/img/promotion_2.png';
import promotion_3 from './assets/img/promotion_3.jpg';
import './Footer.css'
class Footer extends Component {
  render() {
    return (
      <footer id="promotion" className="container-fluid pt-5 pb-5 footer">
        <h1 className="text-center text-white">PROMOTION</h1>
        <div className="container bg-light pt-5 pb-5">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div className="container">
                <img
                  src={promotion_1}
                  alt = "img"
                  
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div className="container">
                <img
                  src={promotion_2}
                  alt = "img"
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <div className="container">
                <img
                  src={promotion_3}
                  alt = "img"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
