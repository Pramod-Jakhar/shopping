import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const styles = {
  sidebar: {
    marginTop: "20px",
    padding: 10,
    width: "200px",
    backgroundColor: '#f1f1f1',
    height: '100%',
    overflow: 'auto',
    border: "",
    display: 'table-cell'
  },
  sidebarLink: {
    display: 'block',
    color: 'black',
    padding: 16,
    textDecoration: 'none'
  },
  activeLink: {
    backgroundColor: '#04AA6D',
    color: 'white',
    margin: "10",
    textAlign: "center"
  }
};

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div style={styles.sidebar}>
      <Link to="/dashboard" style={{ ...styles.sidebarLink, ...(pathname === '/dashboard' && styles.activeLink) }}>Dashboard</Link>
      <Link to="/order" style={{ ...styles.sidebarLink, ...(pathname === '/order' && styles.activeLink) }}>Order</Link>
      <Link to="/contact" style={{ ...styles.sidebarLink, ...(pathname === '/contact' && styles.activeLink) }}>Contact</Link>
      <Link to="/about" style={{ ...styles.sidebarLink, ...(pathname === '/about' && styles.activeLink) }}>About</Link>
      <Link to="/logout" style={styles.sidebarLink}>Logout</Link>
    </div>
  );
};

export default Sidebar;