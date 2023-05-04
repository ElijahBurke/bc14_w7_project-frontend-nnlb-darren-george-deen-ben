import React from 'react';

const Footer = () => {

  const year = new Date();

  return (
    <footer data-testid="footer-component" className="footer">
    {/* fetch the current year */}
    <p>No Nerds Left Behind &copy; {year.getFullYear()}</p>
    </footer>
  )
}

export default Footer;