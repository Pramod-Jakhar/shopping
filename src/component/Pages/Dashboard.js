import React from 'react';
import TopHeader from '../Layout/Header/Topheader';
import Searchpanel from '../Layout/Header/Searchpanel';
import Footer from '../Layout/Footer';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Sidebar from '../Pages/Sidebar';
  

const Dashboard = () => {
  return (
  <div>
    <TopHeader />
    <Searchpanel isDashboardPage={true} />
    <div style={{ display: "inline-flex", float: "center" }}>
        <Sidebar />
        

       <div>
        <h2 >Responsive Sidebar Example</h2>
        <p >This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
        <p >We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
        <h3>Resize the browser window to see the effect.</h3>
      </div>
     </div>
     <Footer />
    </div>
  );
};
export default Dashboard;