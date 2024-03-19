import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faMobile } from '@fortawesome/free-solid-svg-icons';
import "./Style.css";

function Topheader() {
  return (
    <div className="width-100 top-header">
      <div className="container">
        <div className="width-50">
          <p className="head1p1 headquote">Phone Becho: India's Fastest Online Shopping Destination </p>
        </div>
        <div className="width-50">
          <ul className="head1ul cashback-sect">
            <li>
              <FontAwesomeIcon icon={faUsers} />
              <a className="head1mr" href="#">Refer Your Friend And Earn Rs. 500 Cashback</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faMobile} />
              <a href="#"> Download App</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topheader;
