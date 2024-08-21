import React from 'react';
import './Call.css';
import kontrol from "./kontrol.uz svg (1) 2.svg"
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import instagram from "./instagram_icons.png"
import facebook from  "./facebook_icons.png"
const Call = () => {
  return (
    <div className='call_centerr'>
      <div style={{backgroundColor:"blue"}} className='kontrol'>
        <img style={{
          width: "350px",
          height:"auto",
          // fontSize:"500px",
          objectFit: 'cover',
        }}  src={kontrol} alt="" />
      </div>
      <div className='contact_info'>
        <p><strong>Call-центр</strong></p>
        <p className='phone'>+998-78 555-35-00</p>
        <p><strong>Телеграм</strong></p>
        <p className='telegram'>@zonuz_admin</p>
      </div>
      <div className='work_schedule'>
        <p><strong>График работы</strong></p>
        <p>В будние с 09:00 до 20:00</p>
        <p>Суббота с 09:00 до 18:00</p>
      </div>
      <div className='address'>
        <p><strong>Адрес:</strong> Ташкент, ул.Мукими 20А</p>
        <div className='map'>
          <img src="map_image_url_here" alt="Map" />
        </div>
      </div>
      <div className='social_media'>
        <p><strong>Мы в социальных сетях</strong></p>
        <div className='icons' id='icons__1'>
        <a href="https://t.me/kontroluz">

        <FaTelegram  className='FaTelegram_1'/>
        </a>
        <a href="https://www.youtube.com/@kontroluz1064">
        <FaYoutube   className='FaYoutube_1'/>
        </a>
         <a href="https://www.instagram.com/kontroluz/">
         <img className='instagram_1'      src={instagram} alt="Instagram" />
         </a>
        <a href="https://www.facebook.com/kontroluzfc">
        <img className='Facebook_1'      src={facebook} alt="Facebook" />
        </a>
        </div>
      </div>
    </div>
  )
}

export default Call;
