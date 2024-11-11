import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaSearch } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { FaCircleLeft } from "react-icons/fa6";
import './Products.css';
import Logo from "./kontrol.uz_svg.png";

const items = [
  { id: 1, name: "Televizor", power: 300, icon: "📺" },
  { id: 2, name: "Printer", power: 200, icon: "🖨️" },
  { id: 3, name: "Kompyuter", power: 300, icon: "💻" },
  { id: 4, name: "Soch uchun fen", power: 100, icon: "💇‍♂️" },
  { id: 5, name: "Dazmol", power: 1000, icon: "🧺" },
  { id: 6, name: "Elektr choynak", power: 1500, icon: "🍵" },
  { id: 7, name: "Ventilyatorlar", power: 75, icon: "🌬️" },
  { id: 8, name: "Mikrotolqinli pech", power: 800, icon: "🍲" },
  { id: 9, name: "Pech", power: 1500, icon: "🍞" },
  { id: 10, name: "Elektr plita", power: 2000, icon: "🍳" },
  { id: 11, name: "Sovutgich", power: 600, icon: "❄️" },
  { id: 12, name: "Kir yuvish mashinasi", power: 1000, icon: "🧺" },
  { id: 13, name: "Yoritish", power: 200, icon: "💡" },
  { id: 14, name: "Konditsioner", power: 1500, icon: "❄️" },
  { id: 15, name: "Toster", power: 850, icon: "🍞" },
  { id: 16, name: "Kofe qaynatgich", power: 1000, icon: "☕" },
  { id: 17, name: "Changyutgich", power: 1400, icon: "🧹" },
  { id: 18, name: "Isitgich", power: 2000, icon: "🔥" },
  { id: 19, name: "Gazli qozon", power: 150, icon: "🍲" },
  { id: 20, name: "Drel", power: 500, icon: "🔩" },
  { id: 21, name: "Perforator", power: 600, icon: "🔨" },
  { id: 22, name: "Suv isitgich", power: 2000, icon: "🚿" },
  { id: 23, name: "Gazon o'rgich", power: 1500, icon: "🌾" },
  { id: 24, name: "Payvandlash agregati", power: 5000, icon: "🔧" },
  { id: 25, name: "Suv nasosi", power: 1000, icon: "💧" },
  { id: 26, name: "Elektromobil uchun zaryadka", power: 3000, icon: "⚡" },
];

export const Products = () => {
  const [categoryes1, setCategory1] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSalom, setShowSalom] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const config = { method: 'get', maxBodyLength: Infinity, headers: {} };

    // Fetch categories
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/category/all`, config)
      .then(response => setCategory1(response.data.data))
      .catch(error => console.log(error));

    // Fetch all products
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/all`, config)
      .then(response => setProducts(response.data.data))
      .catch(error => console.log(error));
  }, []);

  // Fetch specific category and products in that category
  useEffect(() => {
    const fetchCategoryAndProducts = async () => {
      try {
        const categoryResponse = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/category/${id}`);
        setCategory(categoryResponse.data);

        if (categoryResponse.data.data.name_uz === 'Стабилизатор') {
          setShowSalom(true);
        } else {
          setShowSalom(false);
        }

        const productsResponse = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/?category_id=${id}`);
        setProducts(productsResponse.data.data);
        setFilteredProducts(productsResponse.data.data); // Set all products initially
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryAndProducts();
  }, [id]);

  const toggleItem = (item) => {
    setSelectedItems(prev => ({
      ...prev,
      [item.id]: prev[item.id] ? { ...prev[item.id], selected: !prev[item.id].selected } : { ...item, selected: true, quantity: 1 }
    }));
  };

  const changeQuantity = (item, delta) => {
    setSelectedItems(prev => ({
      ...prev,
      [item.id]: {
        ...prev[item.id],
        quantity: Math.max(1, prev[item.id].quantity + delta),
      },
    }));
  };

  const getTotalPower = () =>
    Object.values(selectedItems).reduce(
      (total, item) => (item.selected ? total + item.power * item.quantity : total),
      0
    );

  const formatPrice = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const productClick = (productId) => {
    navigate("/product/" + productId);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter products based on search query or show all products if query is empty
    setFilteredProducts(
      query ? products.filter(product => product.name_uz.toLowerCase().includes(query)) : products
    );
  };

  return (
    <div className="products-container">
      <div className='containet_meta1'>
        <div className='left_item'>
          <Link to="/">
            <FaCircleLeft className='FaCircleLeft' />
          </Link>
        </div>
        <div className="input_type">
          <div className="input_type_chaild">
            <input
              className='input_type_text12'
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder=" Qidiruv..."
            />
            <div className="serch233223">
              <FaSearch className='FaSearch12' />
            </div>
          </div>
        </div>
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

      {showSalom && (
        <div className="power-calculator">
          <h2>Stabilizator quvvati kalkulyatori</h2>
          <div className="items-container">
            {items.map(item => (
              <div key={item.id} className={`item ${selectedItems[item.id]?.selected ? 'selected' : ''}`}>
                <label className="item-label">
                  <input
                    type="checkbox"
                    checked={selectedItems[item.id]?.selected || false}
                    onChange={() => toggleItem(item)}
                  />
                  <span className="icon">{item.icon}</span>
                  {item.name} -
                  {selectedItems[item.id]?.selected && (
                    <span className="item-power">{item.power * selectedItems[item.id].quantity} vt</span>
                  )}
                </label>
                {selectedItems[item.id]?.selected && (
                  <div className="quantity">
                    <button onClick={() => changeQuantity(item, -1)}>-</button>
                    <input
                      type="number"
                      value={selectedItems[item.id].quantity}
                      onChange={(e) =>
                        changeQuantity(item, parseInt(e.target.value) - selectedItems[item.id].quantity)
                      }
                      min="1"
                    />
                    <button onClick={() => changeQuantity(item, 1)}>+</button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="total-power">
            <strong>Umumiy quvvat: {getTotalPower()} vt</strong>
          </div>
        </div>
      )}

      {loading ? (
        <h1 className="loading-text">Loading...</h1>
      ) : (
        <div className='product_katecory'>
          {category ? (
            <h2 className="category-name1">{category.data.name_uz}</h2>
          ) : (
            <h2 className="no-category">Category not found</h2>
          )}
          <div className='product_katecory_p'>
            {filteredProducts.length ? (
              filteredProducts.map(product => (
                <div
                  style={{ width: "15%" }}
                  key={product._id}
                  className="product-card21"
                  onClick={() => productClick(product._id)}
                >
                  <div className='img_product_id'>
                    <img
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      src={process.env.REACT_APP_BASE_URL + product.image}
                      alt=""
                      className="product_image"
                    />
                  </div>
                  <p className='sikidka21' style={{ color: 'red' }}>
                    {Math.floor(((product.priceMonth - product.price) / product.priceMonth * 100))}% 
                  </p>
                  <div id='product-name-uz1' className="product-name-uz">{product.name_uz}</div>
                  <div id='product-priceMonth1' className="product-priceMonth">
                    <del id='product-priceMonth'>{formatPrice(product.priceMonth)}</del>
                  </div>
                  <div id='product-price' className="product-price">{formatPrice(product.price)} so'm</div>
                </div>
              ))
            ) : (
              <h2 className="no-products">No products available</h2>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
