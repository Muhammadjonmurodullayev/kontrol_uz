import React from 'react'
import { useState, useEffect } from 'react';
import "./Parent.css"
import { Link } from 'react-router-dom';
// import Logo from "./kontrol.uz svg.jpg"
import { MdPlace } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";
import { BiSolidShoppingBags } from "react-icons/bi";
import { GrHelpBook } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdHelp } from "react-icons/md";
const Parent = () => {
  const [showDiv1, setShowDiv1] = useState(false);
  const [selectedWord1, setSelectedWord1] = useState(localStorage.getItem('selectedWord') || '');
  const words1 = [
    "Uz", "Ru"
  ];

  useEffect(() => {
    localStorage.setItem('selectedWord', selectedWord1);
  }, [selectedWord1]);

  const handleSalomClick1 = () => {
    setShowDiv1(!showDiv1);
  };

  const handleWordClick1 = (word1) => {
    setSelectedWord1(word1);
    setShowDiv1(false);
  };



  const [showDiv, setShowDiv] = useState(false);
  const [selectedWord, setSelectedWord] = useState(localStorage.getItem('selectedWord') || '');
  const words = [
     'Buxoro', 
    'Samarqand','Toshkent'
  ];

  useEffect(() => {
    localStorage.setItem('selectedWord', selectedWord);
  }, [selectedWord]);

  const handleSalomClick = () => {
    setShowDiv(!showDiv);
  };

  const handleWordClick = (word) => {
    setSelectedWord(word);
    setShowDiv(false);
  };
  return (
    <div className='parent1'>
      <div className='parent_img'>
        <div className='shahar'>
          <MdPlace className='MdPlace' />
          <p onClick={handleSalomClick} className='p_shaharlar'>Shahar:<span><u>{selectedWord}</u></span> </p>
          {showDiv && (
            <div className='showDiv21'>
              <div className="dropdown">
                {words.map((word, index) => (
                  <div key={index} onClick={() => handleWordClick(word)} className='button_showdiv'>{word}</div>
                ))}
              </div>
            </div>
          )}
        </div>

        
        <div className="hamkor">
          <FaHandshake className='FaHandshake' />
          <span className='Hamkorlarimiz'>Hamkorlarimiz</span>
        </div>


       <div className="yuridik">
          <BiSolidShoppingBags className='BiSolidShoppingBags' />
       <Link to="/admin" className='Yuridik'>
          <span className='Yuridik'
          style={{color:"black"}}>Войти</span>
       </Link>
        </div>


        <Link to="/Yordam">
        <div className="yordam">
          <MdHelp className='MdHelp' />
          <span className='Yordam1'>Yordam</span>
        </div>  
        </Link>
      


        <div className="tel">
        <BsFillTelephoneFill className='BsFillTelephoneFill12' />
         <a href="tel:+998712006800">
         <span className='tel11'>+998 (71) 200 68 00</span>
         </a>

        </div>
      </div>
   <div className='hr1'>
   <hr className='hr1212' />
   </div>

    </div>
  )
}
export default Parent;
