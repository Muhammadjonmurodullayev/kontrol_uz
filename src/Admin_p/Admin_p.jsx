import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaGlobe } from "react-icons/fa6";
import { MdContactPage } from "react-icons/md";
import { IoMdCopy } from "react-icons/io";
import { TbBrandAlgolia } from "react-icons/tb";
import { FaBloggerB } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { MdSms } from "react-icons/md";
import "./Admin_p.css"

const Homeadmin = () => {
  

 

  return (
    <div className='container_button2'>

      <div className='container_button1'>
        <div className='parent_chail'>
          <div className='bukvaf'>
            <p className='parent_id_f'>S</p>
          </div>
          <h3 className='kontrol_b'>Schetchik</h3>
        </div>
        <hr />
       <Link to="home">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <IoHome className='IoHome1'/>
          <p className='link_p2'>Home</p>
        </div>
        </div>
       </Link>


       <Link to="Sozlamalar">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <IoSettingsSharp  className='IoHome1'/>
          <p className='link_p2'>Sozlamalar</p>
        </div>
        </div>
       </Link>

       <Link to="Xarakteristika">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <TfiMenuAlt  className='IoHome1'/>
          <p className='link_p2'>Xarakteristika</p>
        </div>
        </div>
       </Link>

       <Link to="Kategoriya">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <TfiMenuAlt  className='IoHome1'/>
          <p className='link_p2'>Kategoriya</p>
        </div>
        </div>
       </Link>        
        

       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <FaGlobe  className='IoHome1'/>
          <p className='link_p2'>Menyular</p>
        </div>
        </div>
       </Link>
       
       <Link to="mahsulotlar">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <FaGlobe  className='IoHome1'/>
          <p className='link_p2'>MahsulotlarK</p>
        </div>
        </div>
       </Link>
           
     

       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <MdContactPage   className='IoHome1'/>
          <p className='link_p2'>Sahifalar</p>
        </div>
        </div>
       </Link>

       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <MdContactPage   className='IoHome1'/>
          <p className='link_p2'>Buyutmalar</p>
        </div>
        </div>
       </Link>    

       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <TfiMenuAlt  className='IoHome1'/>
          <p className='link_p2'>Mijozlar</p>
        </div>
        </div>
       </Link>   

       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <TfiMenuAlt  className='IoHome1'/>
          <p className='link_p2'>Sayt foydalanuvchilari</p>
        </div>
        </div>
       </Link>   

       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <TbBrandAlgolia  className='IoHome1'/>
          <p className='link_p2'>Brand</p>
        </div>
        </div>
       </Link>   

       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <FaBloggerB  className='IoHome1'/>
          <p className='link_p2'>Blog</p>
        </div>
        </div>
       </Link>   


       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <FaQuestion  className='IoHome1'/>
          <p className='link_p2'>FQA</p>
        </div>
        </div>
       </Link>   


       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <MdSms  className='IoHome1'/>
          <p className='link_p2'>Contact</p>
        </div>
        </div>
       </Link>   
       

       
       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <FaGlobe  className='IoHome1'/>
          <p className='link_p2'>Tarjimalar</p>
        </div>
        </div>
       </Link>   
      </div>


<div className='container_button3'>
  <Outlet/>
</div>

    
    </div>
  );
};

export default Homeadmin;
