import React from 'react'
import "./home_admnin.css"
import { IoMdMenu } from "react-icons/io";
import { FaGlobe } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";



export const Home1 = () => {
  const cards = [
    {
      id: 1,
      number: '5',
      title: 'district',
      color: 'card-blue',
      icon: '🌐', // Replace with an appropriate icon
    },
    {
      id: 2,
      number: '6',
      title: 'edu institutions',
      color: 'card-green',
      icon: '🏛', // Replace with an appropriate icon
    },
  ];
  return (
    <div className='home_panel'>
<div className='mahsulotlar_parent1'>
<div className='mahsulotlar_parent'>
   <IoMdMenu className='IoMdMenu33'/>
    <p className='IoMdMenu33_text'>Home</p>
</div>
<div className='mahsulotlar_parent2'>
<div className='globale1'>
<FaGlobe className='FaGlobe5'/>
<p>o'zbekcha</p>
</div>
<div className='Admin_product5'>
<RiAdminFill  className='RiAdminFill6'/>
<p>Admin</p>
</div>
</div>

</div>
<br />
<hr />
  <div className='home_panel1'>
  <div className="card-container">
      {cards.map((card) => (
        <div key={card.id} className={`card ${card.color}`}>
          <div className="card-content">
            <h1>{card.number}</h1>
            <div className="card-icon">{card.icon}</div>
            <p>{card.title}</p>
          </div>
          <div className="card-footer">
            <span>➔ {card.title}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
    </div>
  )
}
