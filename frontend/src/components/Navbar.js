import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when clicking outside
  const handleOutsideClick = (e) => {
    if (isMobileMenuOpen && !e.target.closest('.dropdown-menu') && !e.target.closest('.hamburger')) {
      setMobileMenuOpen(false);
    }
  };

  // Attach event listener for outside click
  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen]); // Use the isMobileMenuOpen state as the dependency

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src="/images/TextLogo.png" alt="ArToe Logo" />
          </Link>
        </div>

        {/* Centered Links (Sneakers, About Us, Contact) */}
        <div className="navbar-menu">
          <ul>
            <li><Link to="/sneakers">Sneakers</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Your Bag Button */}
        <Link to="/bag" className="bag-button">Your Bag</Link>

        {/* Hamburger Button for Mobile */}
        <button className="hamburger" onClick={handleMenuToggle}>
          <FaBars />
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div className={`dropdown-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/sneakers" onClick={() => setMobileMenuOpen(false)}>Sneakers</Link></li>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/bag" onClick={() => setMobileMenuOpen(false)}>Your Bag</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
