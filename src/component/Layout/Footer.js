import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faFax, faGlobe, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import '../Layout/Header/Style.css';
const Footer = () => {
  return (
    <div class="width-100 margin-top-50 footer">
  <div class="container">
    <div class="width-25">
      <h2 class="quicklink-heading">Account Detail</h2>
      <ul class="quicklink-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Cart</a></li>
        <li><a href="#">Checkout</a></li>
      </ul>
    </div>
    <div class="width-25">
      <h2 class="quicklink-heading">Quick Link</h2>
      <ul class="quicklink-menu">
        <li><a href="#">My Profile</a></li>
        <li><a href="#">Change Password</a></li>
        <li><a href="#">Order History</a></li>
        <li><a href="#">My Wishlist</a></li>
        <li><a href="#">My Cashback</a></li>
      </ul>
    </div>
    <div class="width-25">
      <h2 class="quicklink-heading">Quick Link</h2>
      <ul class="quicklink-menu">
        <li><a href="#">Login</a></li>
        <li><a href="#">Faq</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Download App</a></li>
        <li><a href="#">Refer & Earn Cashback</a></li>
      </ul>
    </div>
    <div class="width-25">
      <h2 class="quicklink-heading">GET IN TOUCH</h2>
      <ul class="get-in-touch">
        <li>
            <i aria-hidden="true">
            <FontAwesomeIcon icon={faEnvelope}/>
            </i> 
            E-MAIL:
            <a href="#" class="footer-e-mail"> 
            info@Phone-becho.com
            </a>
            </li>
        <li>
            <i aria-hidden="true">
                <FontAwesomeIcon icon={faHeadphones}/>
                </i> 
                WHATS-APP: +91 -123 456 789
                </li>
        <li>
            <i aria-hidden="true">
                <FontAwesomeIcon icon={faFax}/>
                </i> 
                CONTACT NO.: +91 -(123)-4567890
                </li>
        <li>
            <i aria-hidden="true">
                <FontAwesomeIcon icon={faGlobe}/>
                </i> 
                WEBSITE:
                <a href="#" class="footer-website">
                     https://www.dezven.com
                     </a>
                     </li>
      </ul>
    </div>
    </div>
    </div>
  )
}

export default Footer