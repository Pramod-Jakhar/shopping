// import React, { useState } from 'react';
// import Breadcrumb from './Breadcrumb';
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(true);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform login/signup logic here (authentication, API calls, etc.)
//     console.log(`Email: ${email}, Password: ${password}, isLogin: ${isLogin}`);
//     // Reset form fields after submission
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div>
//       <Breadcrumb/>
//       <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Email:</label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label>Password:</label>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
//       </form>

//       <p onClick={() => setIsLogin(!isLogin)}>
//         {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
//       </p>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "../../App.css";
import Breadcrumbs from "./Breadcrumb";
import Footer from "../Layout/Footer";
import TopHeader from "../Layout/Header/Topheader";
import SearchPanel from "../Layout/Header/Searchpanel";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  

  const handleLogin = (e) => {
    e.preventDefault();  
 
    onLogin();

    console.log(
      "Logging in with username:",
      username,
      "and password:",
      password
    );
    
    navigate("/dashboard");
     
  };

  const paths = [
    {
      name: "Home",
      url: "/",
      icon: "fa fa-home",
    },
    {
      name: "Login",
      url: "/login",
      icon: "fa fa-info-circle",
    },
    {
      name: " ",
      url: " ",
      icon: " ",
    },
  ];

  return (
    <div>
      <TopHeader />
      <SearchPanel />
      <Breadcrumbs paths={paths} />
      <div className="login-container">
        <h2>Login Page</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;