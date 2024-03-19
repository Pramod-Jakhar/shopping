import React from 'react';
import './Productlist.css';
import product1 from '../assets/Product/product-1.png';
import product2 from '../assets/Product/product-2.png';
import product3 from '../assets/Product/product-3.png';
import product4 from '../assets/Product/product-4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Productlist = () => {
  const handleLoadMore = () => {
    // Implement your load more logic here
  };

  const handleAddToCart = (productName) => {
    // Implement your add to cart logic here
    
  };

  const renderProduct = (productImage, productName, productRating, discountedPrice, originalPrice, discount) => {
    return (
      <div className="width-25" key={productName}>
        <div className="product-section">
          <div className="product-border">
            <div className="product-img-center">
              <a href="#">
                <img className="product-img" src={productImage} alt={productName} />
              </a>
            </div>
            <div>
              <p className="product-name">
                <a href="#">{productName}</a>
              </p>
              <p className="product-rating">
                {[...Array(4)].map((_, index) => (
                  <i key={index} aria-hidden="true">
                    <FontAwesomeIcon icon={faStar}/>
                  </i>
                ))}
                <span>({productRating})</span>
              </p>
              <p className="product-price">
                <span className="product-discounted-price">{discountedPrice}</span>
                <span className="product-original-price">{originalPrice}</span>
                <span className="product-discount">{discount}</span>
              </p>
              <button onClick={() => handleAddToCart(productName)} className="add-to-cart-button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="width-100 margin-top-50">
      <div className="containerp">
        {renderProduct(product1, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
        {renderProduct(product2, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
        {renderProduct(product3, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
        {renderProduct(product4, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
        {renderProduct(product1, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
        {renderProduct(product2, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
        {renderProduct(product3, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
        {renderProduct(product4, 'New iphone 11 Max Pro 64 GB', 4, 'Rs.549.00', 'Rs.554', '90%OFF')}
      </div>
      <div className="container">
        {/* Repeat the renderProduct function for the second set of products */}
      </div>
      <div className="load-more-container">
        <button onClick={handleLoadMore} className="load-more-button">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Productlist;





