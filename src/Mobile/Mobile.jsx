import React from 'react';
import './Mobile.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaHome,  FaUser } from 'react-icons/fa';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsTelegram } from "react-icons/bs";
const Mobile = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link to="/" className="footer-nav-item">
          <FaHome  id='FaHome1212'/>
          <span>Home</span>
        </Link>
        <a href="https://t.me/kontroluz"  id='FaHome12121'  className="footer-nav-item">
        <BsTelegram />
          <span>Telegram</span>
        </a>
        <Link to="/Call"  id='FaHome12122'  className="footer-nav-item">
        <BsFillTelephoneFill />
          <span>Cart</span>
        </Link>
        <Link  to="/Profil"  id='FaHome12123'  className="footer-nav-item">
          <FaUser />
          <span>Profile</span>
        </Link>
      </nav>
      
    </footer>
  );
};

export default Mobile;
