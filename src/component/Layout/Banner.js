import React from 'react';
import banner2 from '../assets/banner/banner-2.jpg'
import banner1 from '../assets/banner/banner-1.jpg'
import banner3 from '../assets/banner/banner-3.jpg'
import "../Layout/Header/Style.css"
const Banner = () => {
  return (
    <div className="width-100 margin-top-50">
      <div className="container">
        <div className="width-33">
          <div className="banner-list">
            <a href="#">
              <img className="wimg100" src={banner1} alt="Banner 1" />
            </a>
          </div>
        </div>
        <div className="width-33">
          <div className="banner-list">
            <a href="#">
              <img className="wimg100" src={banner2} alt="Banner 2" />
            </a>
          </div>
        </div>
        <div className="width-33">
          <div className="banner-list">
            <a href="#">
              <img className="wimg100" src={banner3} alt="Banner 3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
