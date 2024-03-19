import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTruck, faCircleArrowRight, faLifeRing, faGift, faCreditCard, } from '@fortawesome/free-solid-svg-icons';
import '../Layout/Header/Style.css';
const feature = () => {
  return (
    <div class="width-100 margin-top-50 feature-sect">
    <div class="container-feature">
      <div class="width-20 featured-padding">
        <div class="featured-border">
          <div class="width-20 featured-content">
            <i>
                <FontAwesomeIcon icon={faTruck}/>
            </i>
          </div>
          <div class="width-80 featured-content margin-top-8">
            <h4>Instant Delivery</h4>
            <p>One day shipping on all order</p>
          </div>
        </div>
      </div>
      <div class="width-20 featured-padding">
        <div class="featured-border">
          <div class="width-20 featured-content">
            <i>
                <FontAwesomeIcon icon={faCircleArrowRight}/>
            </i>
          </div>
          <div class="width-80 featured-content margin-top-8">
            <h4>Online Support 24/7</h4>
            <p>Support online 24 hours a day</p>
          </div>
        </div>
      </div>
      <div class="width-20 featured-padding">
        <div class="featured-border">
          <div class="width-20 featured-content">
            <i>
                <FontAwesomeIcon icon={faLifeRing}/>
            </i>
          </div>
          <div class="width-80 featured-content margin-top-8">
            <h4>Try and Buy</h4>
            <p>Try Product, If you like it then buy it</p>
          </div>
        </div>
      </div>
      <div class="width-20 featured-padding">
        <div class="featured-border">
          <div class="width-20 featured-content">
            <i>
                <FontAwesomeIcon icon={faGift}/>
            </i>
          </div>
          <div class="width-80 featured-content margin-top-8">
            <h4>Instant Discount</h4>
            <p>Upto 50% instant discount on all product</p>
          </div>
        </div>
      </div>
      <div class="width-20 featured-padding">
        <div class="featured-border">
          <div class="width-20 featured-content">
            <i>
                <FontAwesomeIcon icon={faCreditCard}/>
            </i>
          </div>
          <div class="width-80 featured-content margin-top-8">
            <h4>Secure Payment</h4>
            <p>All cards accepted</p>
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default feature