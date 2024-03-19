import React from "react";
import Topheader from "./Header/Topheader";
import Searchpanel from "./Header/Searchpanel";


import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Topheader />
      <Searchpanel />
      <main>{children}</main>
      <Footer/>

    </>
  );
};

export default Layout;
