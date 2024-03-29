
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import MainMenu from "./component/Layout/Header/Mainmenu";
import Slider from "./component/Layout/Slider/Slider";
import Banner from "./component/Layout/Banner";
import Productlist from './component/Product/Productlist';
import Feature from './component/Layout/Feature';
import Wishlist from './component/Pages/Wishlist';
import Login from './component/Pages/Login'; 
import Signup from "./component/Pages/Signup";
import Cart from './component/Pages/Cart';
import Dashboard from "./component/Pages/Dashboard";
import Order from "./component/Pages/Order";
import ProductDetail from "./component/Product/ProductDetail";
import VisibilityIcon from "@mui/icons-material/Visibility";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <MainMenu onUserClick={handleToggleSidebar} />
              <Slider />
              <Banner />
              <Productlist />
              <Feature/>
            </Layout>
          }
        />
        <Route path="/wishlist" element={<Layout><Wishlist/></Layout>} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Layout><Signup /></Layout>} />
        <Route path="/cart" element={<Layout><Cart/></Layout>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/order" element={<Order />} />
        <Route
          path="/order"
          element={
            <Layout>
              <Order />
            </Layout>
          }
          />
          <Route path="/visibilityicon" element={<VisibilityIcon />} /> 
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route
          path="/productdetail"
          element={
            <Layout>
              <ProductDetail/>
            </Layout>
          }
          />
      </Routes>
    </Router>
  );
}

export default App;
