// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faHeart, faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import websitelogo from '../../assets/images/image1.jpeg';
// import "./Style.css";

// const Searchpanel = () => {
//   return (
//     <div className="width-100 search-panel">
//       <div className="container">
//         <div className="width-20">
//           <img src={websitelogo} className="logo" alt="example" /> {/* Use the imported logo */}
//         </div>
//         <div className="width-50">
//           <input className="search-textbox" type="text" placeholder="Search for products, brand and more" />
//           <button className="search-button">
//             <FontAwesomeIcon icon={faSearch} />
//           </button>
//         </div>
//         <div className="width-30">
//           <ul className="cart-sect">
//             <li>
              
//               <FontAwesomeIcon icon={faHeart} />
//               <a className="head1mr" href="#">Wishlist</a>
//             </li>
//             <li>
//               <FontAwesomeIcon icon={faUserCircle} />
//               <a href="#">Login & Signup</a>
//             </li>
//             <li>
//               <FontAwesomeIcon icon={faShoppingCart} />
//               <a href="#">Cart (0)</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Searchpanel;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import websitelogo from '../../assets/images/logo2.png';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import "./Style.css";

const Searchpanel = ({ cartItemCount, isDashboardPage }) => {
  const iconStyle = { color: "white" };
  return (
    <div className="width-100 search-panel">
      <div className="container">
        <div className="width-20">
          <Link to="/">
            <img src={websitelogo} className="logo" alt="example" /> {/* Use the imported logo */}
          </Link>
        </div>
        <div className="width-50">
          <input className="search-textbox" type="text" placeholder="Search for products, brand and more" />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="width-30">
          <ul className="cart-sect">
            <li>
              <FontAwesomeIcon icon={faHeart} />
              <Link className="head1mr" to="/Wishlist">Wishlist</Link>
            </li>
            {!isDashboardPage && (
              <>
                <li>
                <FontAwesomeIcon icon={faUserCircle} />
                  <Link to="/login">Login</Link>
                </li>
                <li>
                <FontAwesomeIcon icon={faUserCircle} />
                  <Link to="/signup">Signup</Link>
                </li>
              </>
            )}
            <li>
            <FontAwesomeIcon icon={faShoppingCart} />
              <Link to="/cart">Cart ({cartItemCount})</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Searchpanel;

 