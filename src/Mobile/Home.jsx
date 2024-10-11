import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GiCubeforce } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import axios from "axios"
import "./Home.css"
import logo2143 from "./kontrol.uz svg (1) 2.svg"
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import konrol___img from "./kontrol.uz svg (1) 2.svg"
///
import telegram from "./img/icons8-telegram.svg"
import instagram from "./img/icons8-instagram.svg"
import facebook from "./img/icons8-facebook.svg"
import youtube from "./img/icons8-youtube.svg"
import Sofy from "./img/solfy.jpg"
import Anorbank from "./img/Без названия.png"
import banner315 from "./DALL·E 2024-08-21 12.52.11 - A website banner design featuring solar panels similar to the ones shown in the provided image. The banner should have a clean, modern look with a foc.webp"
import kontrol_panel from "./Kontrol_panel.webp"
import konrtol_panel_2 from "./Kontrol_panel_2.webp"
import panel_3 from "./panel_3.webp"
import CategoriesAndProducts1 from './CategoriesAndProducts1';
import baneer from "./bannner.jpg"

///
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [filteredCards, setFilteredCards] = useState(cards);






  const [shochikisOpen4, setIshochiksOpen4] = useState(false);
  const [shochikisOpen5, setIshochiksOpen5] = useState(false);
  const [shochikisOpen6, setIshochiksOpen6] = useState(false);

  const toggleMenu4 = () => {
    setIshochiksOpen4(!shochikisOpen4);
  };
  const toggleMenu5 = () => {
    setIshochiksOpen5(!shochikisOpen5);

  };
  const toggleMenu6 = () => {
    setIshochiksOpen6(!shochikisOpen6);

  };
  // corusel ////
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [

    {
      img: baneer,
      text: '',
    },

    {
      img: baneer,
      text: ""
    }

  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]); //
  let [categoryes, setCategory] = useState([]);
  let [products, setProducts] = useState([]);
  let [productAll, setProductAll] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: process.env.REACT_APP_BASE_URL + '/api/v1/category/all',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        setCategory(response.data["data"]);
      })
      .catch((error) => {
        console.log(error);
      });

    let config2 = {
      method: 'get',
      maxBodyLength: Infinity,
      url: process.env.REACT_APP_BASE_URL + '/api/v1/product/all',
      headers: {}
    };

    axios.request(config2)
      .then((response) => {
        setProductAll(response.data["data"]);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  function clickCategoryButton(category_id) {
    setProducts([]);
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: process.env.REACT_APP_BASE_URL + '/api/v1/product/?category_id=' + category_id,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        setProducts(response.data["data"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const navigator = useNavigate();

  function productClick(id) {
    navigator("/product/" + id)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = productAll.filter(product => `${product.name_uz ?? ""}`.toLowerCase().includes(searchTerm.toLowerCase()) || `${product.name_ru ?? ""}`.toLowerCase().includes(searchTerm.toLowerCase()));



  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded); // Toggle expansion
  };

  // Maxsus uchta kategoriya
  const specialCategories = categoryes.filter(category => 
    ['газовый счетчик', 'Счетчики воды', 'электрический счетчик'].includes(category.name_uz)
  );

  // Qolgan barcha kategoriyalar (maxsus bo'lmagan)
  const otherCategories = categoryes.filter(category => 
    !['газовый счетчик', 'Счетчики воды', 'электрический счетчик'].includes(category.name_uz)
  );


  return (
    <div className='home213_parent'>
      <div className="parent_chaild_id">
        <div id='sidebar_id_item' className={`sidebar ${menuOpen ? 'open' : ''}`}>
          <div className="div_clos">
            <img className='konrol___img' src={konrol___img} alt="" />
            <IoIosCloseCircle className='div_clos_item' onClick={() => setMenuOpen(!menuOpen)} />
          </div>
          <div className='Category__all'>Category</div>
{/* 
          
          {
            categoryes.map((category) => (
              <div key={category._id}>
                <div className='fon_bacrount' onClick={() => { navigator("/category/" + category._id) }}>
                  <div className='category___name_uz'>
                    <GiCubeforce className='GiCubeforce' />
                    <p className='category__name_uz'>{category.name_uz} </p>
                  </div>

                </div>
              </div>
            ))
          } */}




<div className='GiCubeforce12'>
      {/* Only other categories, excluding the special ones */}
      {otherCategories.map((category) => (
        <div key={category._id} className='category_id9696'>
          <div
            className='GiCubeforce1'
            onClick={() => navigator("/category/" + category._id)}
          >
            <GiCubeforce className='GiCubeforce' />
            <p className='category_name_uz'>{category.name_uz}</p>
          </div>
        </div>
      ))}

      {/* Name button for expanding the specific categories */}
      <div className='GiCubeforce1' onClick={handleToggle}>
      <GiCubeforce className='GiCubeforce' />
        <p className='category_name_uz'>Счётчики</p> {/* This is the "Name" button */}
      </div>

      {/* Only show special categories if expanded */}
      {isExpanded && (
        <div className='expanded-categories'>
          {specialCategories.map((category) => (
            <div key={category._id} className='category_id9696'>
              <div
                className='GiCubeforce1'
                onClick={() => navigator("/category/" + category._id)}
              >
                <GiCubeforce className='GiCubeforce' />
                <p className='category_name_uz'>{category.name_uz}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <hr />






      
    </div>

        </div>






        <IoMenu className="filter-button" onClick={() => setMenuOpen(!menuOpen)} />
        <h1 className='page21'>Schetchik</h1>
        {/* <img className='page21' src={logo2143} alt="" />   */}
      </div>



      <div className="qiruv_page1">
        <input className='qiruv_page12' name="" id=""
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
        />

      </div>







      {searchTerm === "" &&
        <div className="carousel-container">
          <div className="carousel-slide">
            <img src={slides[currentIndex].img} alt="slide" className="slide-image" />
            <div className="slide-text">{slides[currentIndex].text}</div>
          </div>
        </div>


      }
      <div className="Products_section">
        {/* <div>Products</div> */}
        <CategoriesAndProducts1 className="CategoriesAndProducts_id534" />


        {
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="Product_card"
              onClick={() => navigator("/product/" + product._id)}
            >
              <div className='process_id21'>
                <img id='process_id'
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  src={`${process.env.REACT_APP_BASE_URL}${product.image}`} alt="" />
              </div>
                <p className='sikidka222' style={{color:"red"}}>{product.count}% скидка</p>
              <div className="product_name">{product.name_uz}</div><br />
            
              <div className="product_price">{product.price} so'm</div>
              <del className='del323'>{product.priceMonth} so'm</del>

              {/* <div className="product_count">Ombor: {product.count}</div> */}
            </div>
          ))
        }
      </div>









































      <div className="contact_1">
        <div className="contact_id_item">
          <h3>Kontact</h3>
          <p className='call_center'>Call center</p>
      <a href="tel:+998712006800">
      <p className='tel_item'>+998712006800</p>
      </a>
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


    </div>
  )
}
export default Home