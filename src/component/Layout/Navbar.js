// import React from "react";
// import { Link, useHistory } from "react-router-dom";

// const Navbar = ({ isLoggedIn, onLogout }) => {
//   const history = useHistory();

//   const handleLogout = () => {
//     onLogout();  
//     history.push("/"); 
//   };

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/wishlist">Wishlist</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         {isLoggedIn ? (
//           <li>
//             <button onClick={handleLogout}>Logout</button>
//           </li>
//         ) : (
//           <li>
//             <Link to="/signup">Signup</Link>
//           </li>
//         )}
//         <li>
//           <Link to="/cart">Cart</Link>
//         </li>
//         <li>
//           <Link to="/dashboard">Dashboard</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;