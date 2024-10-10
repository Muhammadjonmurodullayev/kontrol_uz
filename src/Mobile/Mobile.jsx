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
        <a href="https://t.me/kontrol_uz"  id='FaHome12121'  className="footer-nav-item">
        <BsTelegram />
          <span>Telegram</span>
        </a>
       <a href="tel:+998 95 015 55 48">
     
       <div className='call12212'>
       <BsFillTelephoneFill className='BsFillTelephoneFill' />
          <span className='CallCallCall'>Call</span>
       </div>
 
       </a>
        <Link  to="/Profil"  id='FaHome12123'  className="footer-nav-item">
          <FaUser />
          <span>Profile</span>
        </Link>
      </nav>
      
    </footer>
  );
};

export default Mobile;
