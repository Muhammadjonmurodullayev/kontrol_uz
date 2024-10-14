import { useState, useEffect } from 'react';
import "./Chaild.css"
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Logo from "./kontrol.uz_svg.png";
import { FaSearch } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaRobot } from "react-icons/fa6";
import { GiCubeforce } from "react-icons/gi";
import { PiSolarPanelDuotone } from "react-icons/pi";
import axios from 'axios';
import { IoClose } from "react-icons/io5";
import { IoWaterSharp } from "react-icons/io5";
import { OneProductss } from './OneProductss';
import CategoriesAndProducts from './CategoriesAndProducts';
import Panel1 from "./panel1.webp"
import Panel2 from "./panel2.webp"
import Panel3 from "./Panel3.webp"
import Panel4 from "./Panel4.webp"
import Gaz from "./Gaz_logo.jpg"
import Water from "./water_logo.jpg"
import Quvvat from "./Quvvat_logo.jpg"
import Panel from "./Panel_logo.jpg"
import bannerrr from "./bannner.jpg"
import logo_image from "./logo image 3.webp"
import logo_image2 from "./logo image 4.png"
import logo_image3 from "./logo imge 1.webp"
import logo_image5 from "./solar_panel.webp"
// import { GiCubeforce } from 'react-icons/gi'; // Ensure you import your icon correctly
// import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom
const Chaild = ({ cards }) => {
  const [showDiv1, setShowDiv1] = useState(false);


  const [isExpanded, setIsExpanded] = useState(false);





  const [selectedWord1, setSelectedWord1] = useState(localStorage.getItem('selectedWord1') || '');
  const words1 = [
    "Uz", "Ru"
  ];
  const formatPrice = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  useEffect(() => {
    localStorage.setItem('selectedWord1', selectedWord1);
  }, [selectedWord1]);

  const handleSalomClick1 = () => {
    setShowDiv1(!showDiv1);
  };

  const handleWordClick1 = (word1) => {
    setSelectedWord1(word1);
    setShowDiv1(false);
  };
  const [filteredCards, setFilteredCards] = useState(cards);
  // const [menuOpen, setMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    const filtered = cards.filter(card =>
      card.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  const handleFilterByPrice = (Narxi) => {
    if (Narxi === 'All') {
      setFilteredCards(cards);
    } else {

      const filtered = cards.filter(card => parseFloat(card.Narxi.slice(1)) <= parseFloat(Narxi.slice(1)));
      setFilteredCards(filtered);
    }
    setMenuOpen(false);
  };

  const handleFilterByDescription = (Panellar) => {
    if (Panellar === 'All') {
      setFilteredCards(cards);
    } else {
      const filtered = cards.filter(card => card.Panellar === Panellar);
      setFilteredCards(filtered);
    }
    setMenuOpen(false);
    setIshochiksOpen(false)
    setIshochiksOpen2(false)
    setIshochiksOpen3(false)
  };

  const handleFilterByDescriptionn = (Shochik) => {
    if (Shochik === 'All') {
      setFilteredCards(cards);
    } else {
      const filtered = cards.filter(card => card.Shochik === Shochik);
      setFilteredCards(filtered);
    }
  };














  const handleBlur = () => {
    setIsInputFocused(false);
  };
  const [getchat, setchat] = useState(false)

  const chathandleBlur = () => {
    setchat(!getchat)
  }
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }; // bot uchun 

  const handleSubmit = async () => {
    const botToken = '7431288007:AAGJLfjZf2_mRVWszsouH5SVuRvz7slw2QA';
    const chatId = '789670134';
    const chatId2 = '1583348688';
    const message = `Ism: ${formData.input1}\nFamiliya: ${formData.input2}\nTelfon raqam: ${formData.input3}\nSMS: ${formData.input4}`;
    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        // chat_id: chatId,
        chat_id: chatId2,
        text: message
      });
    } catch (error) {
    }

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        // chat_id: chatId2,
        text: message
      });
    } catch (error) {
    }

  };


  const [loading, setLoading] = useState(true);




  // banner tutorial 
  const banners = [
    {
      id: 1,
      text: "",
      bgColor: "linear-gradient(135deg, #ff7e5f, #feb47b)",
      imgSrc: bannerrr // Replace with your image path
    },
    {
      id: 2,
      text: "",
      bgColor: "linear-gradient(135deg, #42e695, #3bb2b8)",
      imgSrc: bannerrr // Replace with your image path
    },
    {
      id: 3,
      text: "",
      bgColor: "linear-gradient(135deg, #ff758c, #ff7eb3)",
      imgSrc: bannerrr // Replace with your image path
    },
    {
      id: 4,
      text: "",
      bgColor: "linear-gradient(135deg, #ff758c, #ff7eb3)",
      imgSrc: bannerrr // Replace with your image path
    }
  ];// corusel 




  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/category/all`);
      console.log('Fetched Data:', response.data);

      if (response.data && Array.isArray(response.data.data)) {
        setProducts(response.data.data);
      } else {
        console.error('Unexpected data format:', response.data);
        setProducts([]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0); //corusel 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);//corusel 

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % banners.length);
  };//corusel 

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + banners.length) % banners.length);
  };//corusel 

  //////////////////////////////////////

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


  const navigate = useNavigate();
  const [expandedCategoryId, setExpandedCategoryId] = useState(null);

  const toggleSubcategories = (categoryId) => {
    setExpandedCategoryId(prevId => (prevId === categoryId ? null : categoryId));
  };



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
  const otherCategories1 = categoryes.filter(category =>
    !['газовый счетчик', 'Счетчики воды', 'электрический счетчик'].includes(category.name_uz)
  );


  return (
    <div className='Chaild'>
      {/* <p>yangilanyabdi</p> */}
      <div onClick={chathandleBlur} className="telegram-icon-container">
        <div className="telegram-icon">
          <IoChatbubbleEllipsesSharp className='IoChatbubbles' />
        </div>
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>
        <div className="ring ring3"></div>
      </div>








      {getchat && (
        <div className="chat_id">
          <div className="parent_oline">
            <div className="fgfgh">
              <FaRobot className='FaRobot' />
              <div className='online_consultata'>

              </div>
              <p className='online_bot'>Kontrol.uz Online konsultat</p>
              <IoClose
                onClick={() => { setchat(false) }}
                className='setcha14'
              />
            </div>
            {/* <hr /> */}
          </div>




          <div className='bot_chat_input1'>
            <input
              className="bot_chat_input"
              type="text"
              name="input1"
              value={formData.input1}
              onChange={handleChange}
              placeholder="Ism"
            />
            <input
              className="bot_chat_input"
              type="text"
              name="input2"
              value={formData.input2}
              onChange={handleChange}
              placeholder="Familiya"
            />
            <input
              className="bot_chat_input"

              type="number"
              name="input3"
              value={formData.input3}
              onChange={handleChange}
              placeholder="Telfon raqam"
            />
            <input
              className="bot_chat_input"

              type="text"
              name="input4"
              value={formData.input4}
              onChange={handleChange}
              placeholder="sms"
            />
            <button onClick={() => {
              return handleSubmit(),
                setchat(false),
                setFormData({
                  input1: '',
                  input2: '',
                  input3: '',
                  input4: ''
                });

            }

            }>Botga yuborish</button>
          </div>
        </div>)}




      <div className="parent_chaild1">
        <div className="logo_img">
          <img className='logo1' src={Logo} alt="logo" />
        </div>
        <div className="input_type">
          <div className="input_type_chaild">
            <input className='input_type_text12' type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder=" Qidiruv..."
            />
            <div className="serch233223">
              <FaSearch className='FaSearch12' />
            </div>
          </div>
        </div>
        <div className="til" onClick={handleSalomClick1}>
          <FaGlobeAmericas className='FaGlobeAmericas' />
          <span className='uz'>{selectedWord1}</span>
        </div>
        {showDiv1 && (
          <div className="dropdown1">
            {words1.map((word1, index) => (
              <div className="p43">
                <p className='p_claasname' key={index} onClick={() => handleWordClick1(word1)}>{word1}</p>
              </div>
            ))}
          </div>
        )}
        <div className="help">
          <IoIosHelpCircle className='IoIosHelpCircle' />

        </div>
        <div className="hamkorlar">
          <MdMenuBook className='MdMenuBook' />
        </div>


      </div>
      <div className='hr13'>
        <hr className='hr121243' />
      </div>
      {searchTerm ?
        <div className='main-content'>
          <p>Продукты</p>
          <div className='card_container1'>
            {loading ? (
              <div className='Loading6'>
                <div className="spinner">
                </div>
              </div>
            ) : (
              <div className='card_container'>



                {
                  filteredProducts.map((product) => (
                    <div key={product._id} className='cardd1'
                      onClick={() => { navigator("/product/" + product._id) }}
                    >

                      {product.image && (
                        <div className='card_input_card'>
                          <img
                            id='src_img11'
                            src={`${process.env.REACT_APP_BASE_URL}${product.image}`} // Append base URL to image path
                            alt={product.name_uz}
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                          />
                        </div>
                      )}
                      <p className='sikidka2'>{Math.floor(((product.priceMonth-product.price)/product.priceMonth*100))}% скидка</p>
                      <p className='card_name3232'>{product.name_uz}</p><br />
                      {/* <p>{product.name_ru}</p> */}

                      <div>
                        <span className='span_price22'>{formatPrice(product.price)}</span>
                        <p className='Oldingi_narx'><del id='decoration'>{formatPrice(product.priceMonth)}</del></p>

                      </div>

                    </div>

                  ))
                }

              </div>
            )}
          </div>
        </div>
        :
        <div className='card-list-container'>
          <div className="card-list-container">
            <div className='shochik_uzlk'>
              <div className="BiSolidCategory" >
                <div className='BiSolidCategory21coin'>
                  <BiSolidCategory className='BiSolidCategory21' />
                  <span className='Category_item'>Category</span>
                </div>

                {/* <div className='GiCubeforce12'>
                  {
                    categoryes.map((category) => (
                      <div key={category._id} className='category_id9696'>
                        <div className='GiCubeforce1' onClick={() => {
                          navigator("/category/" + category._id)

                        }}>
                          <GiCubeforce className='GiCubeforce' />
                          <p className='category_name_uz'>{category.name_uz}</p>
                        </div>
                      </div>
                    ))
                  }
                  <hr />
                </div> */}









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
              <div className='carousel_parent'>
                <div className="carousel">
                  <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
                  <div className="carousel-banner" style={{ background: banners[currentIndex].bgColor }}>
                    <img src={banners[currentIndex].imgSrc} alt={`Banner ${banners[currentIndex].id}`} className="banner-image" />
                    <motion.div
                      className="banner-text"
                      key={banners[currentIndex].id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                    >
                      {banners[currentIndex].text}
                    </motion.div>
                  </div>
                  <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
                </div>


                <div className='kontainer_id_item'>
                  <div className="kontainer_id_item1"
                    onClick={() => navigator("/category/" + "66fe29c1a1ac1b08272d5012")}
                  >
                    <img src={logo_image} alt="#" className='Card_loco_iconsid1' />
                  </div>
                  <div className="kontainer_id_item2"
                    onClick={() => navigator("/category/" + "66e04294e8bc2bedd57b2cf2")}

                  >
                    <img src={logo_image2} alt="" className='Card_loco_iconsid2' />

                  </div>
                  <div className="kontainer_id_item3"
                    onClick={() => navigator("/category/" + "66e17e3911b8489150edf115")}

                  >
                    <img src={logo_image3} alt="#" className='Card_loco_iconsid3' />
                  </div>
                  <div className="kontainer_id_item4">
                    <div className='Loading6'
                      onClick={() => navigator("/category/" + "66e11def5429c67e4f1de279")}

                    >
                      <img src={logo_image5} alt="#" className='Card_loco_iconsid4' />
                    </div>
                  </div>


                </div>







              </div>
            </div>
          </div>



          <div className='main-content'>
            <CategoriesAndProducts />
            <h1 style={{
              color: "rgb(87, 87, 221)"

            }}>
              <p className='rerf'>Продукты</p>

            </h1>
            <div className='card_container1'>
              {loading ? (
                <div className='Loading6'>
                  <div className="spinner">
                  </div>
                </div>
              ) : (
                <div className='card_container'>



                  {
                    filteredProducts.map((product) => (
                      <div key={product._id} className='cardd1'
                        onClick={() => { navigator("/product/" + product._id) }}
                      >

                        {product.image && (
                          <div className='card_input_card'>

                            <img
                              id='src_img11'
                              src={`${process.env.REACT_APP_BASE_URL}${product.image}`} // Append base URL to image path
                              alt={product.name_uz}
                              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />

                          </div>
                        )}
                        <p className='sikidka2'>{Math.floor(((product.priceMonth-product.price)/product.priceMonth*100))}% </p>

                        <p className='card_name3232'>{product.name_uz}сум</p><br />

                        <div>
                          <span className='span_1price'>{formatPrice(product.price)} сум</span>
                          <p className='Oldingi_narx'><del id='decoration'>{formatPrice(product.priceMonth)}сум</del></p>
                        </div>



                      </div>
                    ))
                  }

                </div>
              )}
            </div>
          </div>


        </div>
      }




      <div className='meta_tag'>
        <h1>Schetchik.com.uz - Сифатли Сув, Газ ва Электр Энергия Улчагычлари</h1><br />
        <p className='meta_tag1'>
          Schetchik.com.uz — ведущая онлайн-платформа, предлагающая счетчики воды, газа и электроэнергии и другое промышленное оборудование по всему Узбекистану. В нашем ассортименте представлена ​​продукция, разработанная на основе самых передовых технологий, которая станет надежным решением для вашего дома и бизнеса.

          Наши продукты:
          Счетчики воды (Скетчики): Счетчики воды, изготовленные по новейшим технологиям, доступны в различных размерах и условиях использования.
          Счетчики газа. Высокоточные счетчики газа — эффективное решение для дома или бизнеса.
          Счетчики электроэнергии: Качественные и современные счетчики электроэнергии, которые помогают экономить электроэнергию.
          Автоматика и релейное оборудование: Автоматизированные системы управления, устройства управления электрическими нагрузками.
          Системы компенсации: Компенсационные устройства для экономии и улучшения качества электроэнергии.
          Системы сигнализации: Системы безопасности и оповещения, обеспечивающие полную безопасность.
          Почему стоит выбрать Kontrol.uz?
          Качественная продукция: Вся наша продукция соответствует международным стандартам качества.
          Гибкая ценовая политика: доступные цены для любого бюджета.
          Быстрая доставка: Быстрая и надежная служба доставки по всему Узбекистану.
          Техническая поддержка: Профессиональная поддержка и обслуживание даже после покупки.
          Ключевые слова:
          Счетчики воды в Узбекистане
          Покупка газовых счетчиков
          Цены на электросчетчики
          Промышленное оборудование Узбекистан
          Счетчики и дилеры счетчиков
          Автоматика и релейное оборудование
          Системы безопасности и сигнализации
          Найдите необходимые счетчики и промышленное оборудование через Kontrol.uz. Экономьте энергию и используйте надежные решения с нашей продукцией!
          Счетчики воды: Инновационные счетчики воды обеспечивают высокую точность и эффективность для бытовых и промышленных объектов.
          Счетчики газа: Счетчики газа по индивидуальному заказу для крупных и мелких потребителей.
          Счетчики электроэнергии: Современные электронные счетчики для контроля и экономии энергии.
          Системы автоматизации: Передовые технологии промышленной автоматизации.
          Системы сигнализации и безопасности: Высокопроизводительные охранные решения для защиты устройств.
          Почему именно Kontrol.uz?
          Новейшие технологии: новейшие инновации и надежные устройства.
          Лучшие цены: Конкурентная и выгодная ценовая политика на рынке.
          Оперативное обслуживание: своевременная доставка и поддержка клиентов.
          Широкий ассортимент: Широкий ассортимент продукции на любой вкус.
          Ключевые слова:
          Покупка счетчиков воды
          Газовые счетчики в Узбекистане
          Цены на электросчетчики
          Системы автоматического управления
          Поставка счетчиков и промышленного оборудования
          Системы энергоконтроля и безопасности
          На сайте Kontrol.uz вы сможете найти все необходимые вам счетчики и средства промышленной автоматизации. Мы предлагаем Вам надежные и качественные технологии!
        </p>
      </div>






      <div>
      </div>

    </div>
  )
}
export default Chaild


















































































