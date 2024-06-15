import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
const Footer = () => {
  const today = new Date(); // Define the 'today' variable
  const year = today.getFullYear(); // Get the current year

  return (
    <footer className='container-fluid rounded'>
      <p>&copy; {year} up&co.com</p>
    </footer>
  );
};

export default Footer;
