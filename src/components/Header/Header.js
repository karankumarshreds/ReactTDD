import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark" data-test="Header">
      <div className="container">
        <a className="navbar-brand" data-test="BrandName" href="#">
          Navbar
        </a>
      </div>
    </nav>
  );
};

export default Header;
