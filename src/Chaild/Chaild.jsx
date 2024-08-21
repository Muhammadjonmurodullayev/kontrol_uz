import { useState, useEffect } from 'react';
import "./Chaild.css"
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Logo from "./kontrol.uz svg.jpg";
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
import banner315 from "./DALL·E 2024-08-21 12.52.11 - A website banner design featuring solar panels similar to the ones shown in the provided image. The banner should have a clean, modern look with a foc.webp"
import kontrol_panel from "./Kontrol_panel.webp"
import konrtol_panel_2 from "./Kontrol_panel_2.webp"
import panel_3 from "./panel_3.webp"
const Chaild = ({ cards, addCard }) => {
  const [showDiv1, setShowDiv1] = useState(false);
  const [selectedWord1, setSelectedWord1] = useState(localStorage.getItem('selectedWord1') || '');
  const words1 = [
    "Uz", "Ru"
  ];

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
    const botToken = 'Bazy_url';
    const chatId = '789670134';
    const message = `Ism: ${formData.input1}\nFamiliya: ${formData.input2}\nTelfon raqam: ${formData.input3}\nSMS: ${formData.input4}`;

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message
      });
    } catch (error) {
    }
  };//bot uchun 
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const banners = [
    {
      id: 1,
      text: "",
      bgColor: "linear-gradient(135deg, #ff7e5f, #feb47b)",
      imgSrc: banner315 // Replace with your image path
    },
    {
      id: 2,
      text: "",
      bgColor: "linear-gradient(135deg, #42e695, #3bb2b8)",
      imgSrc: kontrol_panel // Replace with your image path
    },
    {
      id: 3,
      text: "",
      bgColor: "linear-gradient(135deg, #ff758c, #ff7eb3)",
      imgSrc: konrtol_panel_2 // Replace with your image path
    },
    {
      id: 4,
      text: "",
      bgColor: "linear-gradient(135deg, #ff758c, #ff7eb3)",
      imgSrc: panel_3 // Replace with your image path
    }
  ];// corusel 
//panel_3



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
    },10000);

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








  return (
    <div className='Chaild'>
      <p>yangilanyabdi</p>
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
         <h1>Mahsulotlar</h1>
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
                   <div key={product._id} className='card'
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

                     <p className='card_name3232'>{product.name_uz}</p>
                     {/* <p>{product.name_ru}</p> */}
                       <FaStar className='star' />
                       <FaStar className='star' />
                       <FaStar className='star' />
                       <FaStar className='star' />
                       <FaStar className='star' />
                     <div>
                     <p className='Oldingi_narx'>Oldingi narx: <del id='decoration'>{product.priceMonth}</del></p>
                         <span className='span_price'>Narxi:{product.price} so'm</span>
                       {/* <p>{product.desc}</p> */}
                       <p className='Omborda_po'>Omborda: {product.count}ta qoldi</p>
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

                <div className='GiCubeforce12'>
                  {
                    categoryes.map((category) => (
                      <div key={category._id} className='category_id9696'>
                        <div className='GiCubeforce1' onClick={() => {
                          navigator("/category/" + category._id);

                        }}>
                          <GiCubeforce className='GiCubeforce' />
                          <p className='category_name_uz'>{category.name_uz}</p>
                        </div>
                      </div>
                    ))
                  }
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
                {/* <div className='kontainer_id_item'>
                  <div className="kontainer_id_item1">
                    < IoWaterSharp className='IoWaterSharp' />
                    <p className='Suv_hisoblagichi'>Water meter</p>
                  </div>
                  <div className="kontainer_id_item2">технические работы на сайте
                    <div className='Loading6'>
                      <div className="spinner">
                      </div>
                    </div>

                  </div>
                  <div className="kontainer_id_item3">технические работы на сайте
                    <div className='Loading6'>
                      <div className="spinner">
                      </div>
                    </div>
                  </div>
                  <div className="kontainer_id_item4">технические работы на сайте
                    <div className='Loading6'>
                      <div className="spinner">
                      </div>
                    </div></div>
                  <div className="kontainer_id_item5">
                    <PiSolarPanelDuotone className='PiSolarPanelDuotone' />
                    <p className='solarpanel'>Solar panel</p>
                  </div>

                </div> */}
              </div>
            </div>
          </div>
         


          <div className='main-content'>
            <h1>Mahsulotlar</h1>
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
                      <div key={product._id} className='card'
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

                        <p className='card_name3232'>{product.name_uz}</p>
                        {/* <p>{product.name_ru}</p> */}
                          <FaStar className='star' />
                          <FaStar className='star' />
                          <FaStar className='star' />
                          <FaStar className='star' />
                          <FaStar className='star' />
                        <div>
                        <p className='Oldingi_narx'><del id='decoration'>{product.priceMonth} so'm</del></p>
                            <span className='span_price'>{product.price} so'm</span>
                          {/* <p>{product.desc}</p> */}
                          <p className='Omborda_po'>Omborda: {product.count}ta qoldi</p>
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











      <div>
      </div>

    </div>
  )
}
export default Chaild


















































































