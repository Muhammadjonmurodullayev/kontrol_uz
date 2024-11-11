// Contact.js
import React, { useState } from 'react';
import telegram from "./img/icons8-telegram.svg"
import instagram from "./img/icons8-instagram.svg"
import facebook from "./img/icons8-facebook.svg"
import youtube from "./img/icons8-youtube.svg"
import Sofy from "./img/solfy.jpg"
import Anorbank from "./img/Без названия.png"

import "./Kontact.css"
import { Link } from 'react-router-dom';
const Contact = () => {
  // function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // siljishni silliq qiladi
    });
    // };
  }
  return (
    <div className="contact">
      <div className="contact_id_item">
        <h3>Контакт</h3>
        <p className='call_center'>Call center</p>
       <a href="tel:+998 90 329 12 84"> <p className='tel_item'>+998 90 329 12 84</p></a>
        <p className='call_center' >почта Gmail</p>
        <a href="tel:+998 90 329 12 84"><p className='tel_item'>Kontrol@gmail.com</p></a>
        <p className='call_center' >Иш графи</p>
        <div className='ish'>
          <p className='tel_item'>Иш Кунлари</p>
          <p className='tel_item'>09:00 dan</p>
          <p className='tel_item'>18:00 gacha</p>
        </div>
        <div className='ish'>
          <p className='tel_item'>Шанба</p>
          <p className='tel_item' id='ish2'>09:00 dan</p>
          <p className='tel_item'>18:00 gacha</p>

        </div>

      </div>
      <div className="contact_id_item">
        <h3>Мы в социальных сетях</h3>
        <div className='tarmoqlar'>
          <a href="https://t.me/kontroluz">
            <img className='telegram' src={telegram} alt="" />
          </a>
          <a href="https://www.instagram.com/kontroluz/">
            <img className='instagram' src={instagram} alt="" />
          </a>
          <a href="https://www.youtube.com/@kontroluz1064">
            <img className='youtube' src={youtube} alt="" />
          </a>
          <a href="https://www.facebook.com/search/top?q=kontrol.uz">
            <img className='facebook' src={facebook} alt="" />
          </a>
        </div>
        <div className='hamkorlar_item_id'>
          <a href="tel:+998 90 329 12 84">
          <img className='sofy' src={Sofy} alt="" />
          </a>
         <a href="tel:+998 90 329 12 84"> <img className='anorbank' src={Anorbank} alt="" /></a>
        </div>
        <p className='yil'>Kontrol.uz интернет-до’кони 2017-2024. Барча Хукуклар Химояланган</p>
      </div>
      <div className="contact_id_item">
        <h3>Компания</h3>
        <div className="kompaniy443434">
          <Link to="/yordam" onClick={scrollToTop}>
            <p >О нас</p>
          </Link>

          <Link to="/yordam" onClick={scrollToTop}>
            <p>Реквизиты</p>
          </Link>
          <Link to="/yordam" onClick={scrollToTop}>
            <p>Контакты</p>
          </Link>
          <Link to="/yordam" onClick={scrollToTop}>
            <p>Вакансии</p>

          </Link>
          <Link to="/yordam" onClick={scrollToTop}>
            <p>Карта сайта</p>
          </Link>
          <Link to="/yordam" onClick={scrollToTop}>
            <p>Публичная оферта</p>

          </Link>


        </div>
        {/* <a href="https://yandex.uz/maps/10335/tashkent/?ll=69.243358%2C41.357223&mode=whatshere&whatshere%5Bpoint%5D=69.242743%2C41.357430&whatshere%5Bzoom%5D=17&z=19.57">location</a> */}
      </div>
      <div className="contact_id_item">
        <h3>Помощь</h3>
        <div className="kompaniy443434">
          <Link to="/yordam" onClick={scrollToTop}>
          <p>Вопросы и ответы</p>
          </Link>
          <Link to="/yordam" onClick={scrollToTop}>
          <p>Условия рассрочки</p>
          </Link>
          <Link to="/yordam" onClick={scrollToTop}>
          <p>Способ оптлаты</p>
          </Link>
          <Link to="/yordam" onClick={scrollToTop}>
          <p>Доставка</p>
          </Link>
          <Link to="/yordam" onClick={scrollToTop}>
          <p>Возврат товаров</p>
          </Link>
          <Link to="/yordam" onClick={scrollToTop}>
          <p>Сервисные центры</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
