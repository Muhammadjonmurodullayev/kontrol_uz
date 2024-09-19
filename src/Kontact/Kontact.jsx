// Contact.js
import React, { useState } from 'react';
import telegram from "./img/icons8-telegram.svg"
import instagram from "./img/icons8-instagram.svg"
import facebook from "./img/icons8-facebook.svg"
import youtube from "./img/icons8-youtube.svg"
import Sofy from "./img/solfy.jpg"
import Anorbank from "./img/Без названия.png"
import "./Kontact.css"
import { Link } from 'react-scroll';
const Contact = () => {
  return (
    <div  className="contact">
     <div className="contact_id_item">
<h3>Kontact</h3>
<p className='call_center'>Call center</p>
<p className='tel_item'>+998 90 329 12 84</p>
<p className='call_center' >Gmail pochta</p>
<p className='tel_item'>Kontrol@gmail.com</p>
<p className='call_center' >Ish grafigi</p>
<div className='ish'>
<p className='tel_item'>Ish kunlari</p> 
<p className='tel_item'>09:00 dan</p> 
<p className='tel_item'>18:00 gacha</p> 
</div>
<div className='ish'>
<p className='tel_item'>Shanba    </p>
<p className='tel_item' id='ish2'>09:00 dan</p> 
<p className='tel_item'>18:00 gacha</p> 

</div>

     </div>
     <div className="contact_id_item">
      <h3>Bizning ishtimoiy tarmoqlar</h3>
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
<img className='sofy' src={Sofy} alt="" />
<img className='anorbank' src={Anorbank} alt="" />
      </div>
      <p className='yil'>Kontrol.uz internet-do‘koni 2017-2024. Barcha huquqlar himoyalangan</p>
     </div>
     <div className="contact_id_item">
      <h3>Kompaniya</h3>
     <div className="kompaniy443434">
     <p >О нас</p>
      <p>Реквизиты</p>
      <p>Контакты</p>
      <p>Вакансии</p>
      <p>Карта сайта</p>
      <p>Публичная оферта</p>
     </div>
      {/* <a href="https://yandex.uz/maps/10335/tashkent/?ll=69.243358%2C41.357223&mode=whatshere&whatshere%5Bpoint%5D=69.242743%2C41.357430&whatshere%5Bzoom%5D=17&z=19.57">location</a> */}
     </div>
     <div className="contact_id_item">
      <h3>Yordam xizmati</h3>
      <div className="kompaniy443434">
     <p>Вопросы и ответы</p>
     <p>Условия рассрочки</p>
     <p>Способ оптлаты</p>
     <p>Доставка</p>
     <p>Возврат товаров</p>
     <p>Сервисные центры</p>
     </div>
     </div>
    </div>
  );
};

export default Contact;
