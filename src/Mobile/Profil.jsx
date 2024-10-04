import React, { useState } from 'react';
import "./Profil.css";
import kontrol___uz from "./kontrol.uz svg (1) 2.svg";

const Profil = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className='parent_1_i_1'>
      <div className='kontrol__1_uz'>
        {/* <img
          style={{
            width: '350px',
            height: "auto",
          objectFit: 'cover',
          }}
          src={kontrol___uz} alt="" /> */}
          <h1 className='page2122'>Schetchik</h1>
      </div>
      <div className="sidebar-item1">
        <i className="fa fa-user-circle"></i>
        <span>Войти или создать аккаунт</span>
      </div>
      <div className="sidebar-item1">
        <i className="fa fa-globe"></i>
        <span>Язык: Русский</span>
      </div>
      <div className="sidebar-item1">
        <i className="fa fa-map-marker"></i>
        <span>Город: Ташкент</span>
      </div>
      <div className="sidebar-item1">
        <i className="fa fa-heart"></i>
        <span>Мои избранные товары</span>
      </div>
      <div className="sidebar-section1">
        <button onClick={() => handleToggle('contacts')}>
          Контакты
        </button>
        <div className={`sidebar-dropdown ${openSection === 'contacts' ? 'open' : ''}`}>
          <p>Контакт информация: Телефон, Email</p>
        </div>

        <button onClick={() => handleToggle('company')}>
          Компания
        </button>
        <div className={`sidebar-dropdown ${openSection === 'company' ? 'open' : ''}`}>
          <p>Информация о компании: История, Миссия</p>
        </div>

        <button onClick={() => handleToggle('help')}>
          Помощь
        </button>
        <div className={`sidebar-dropdown ${openSection === 'help' ? 'open' : ''}`}>
          <p>Часто задаваемые вопросы и помощь</p>
        </div>

        <button onClick={() => handleToggle('social')}>
          Мы в социальных сетях
        </button>
        <div className={`sidebar-dropdown ${openSection === 'social' ? 'open' : ''}`}>
          <p>Наши социальные сети: Facebook, Instagram</p>
        </div>
      </div>
    </div>
  );
}

export default Profil;
