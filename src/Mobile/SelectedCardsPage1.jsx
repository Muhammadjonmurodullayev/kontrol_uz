import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from "react-icons/fa";
import './SelectedCardsPage.css';
import kontrol_uz from "./kontrol.uz svg (1) 2.svg"
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
export const Productss = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState({});

  const formatPrice = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const toggleItem = (item) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item.id]: prev[item.id]
        ? { ...prev[item.id], selected: !prev[item.id].selected }
        : { ...item, selected: true, quantity: 1 },
    }));
  };

  const changeQuantity = (item, delta) => {
    setSelectedItems((prev) => ({
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
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSalom, setShowSalom] = useState(false);

  function productClick(productId) {
    navigate("/product/" + productId);
  }

  useEffect(() => {
    const fetchCategoryAndProducts = async () => {
      try {
        // Fetch category info
        const categoryResponse = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/category/${id}`);
        console.log("Category Data:", categoryResponse.data); // Debugging line
        setCategory(categoryResponse.data);

        // Check if category name matches "panel"
        if (categoryResponse.data.data.name_uz === 'Стабилизатор') {
          setShowSalom(true);
        } else {
          setShowSalom(false);
        }

        // Fetch products
        const productsResponse = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/?category_id=${id}`);
        console.log("Products Data:", productsResponse.data); // Debugging line
        setProducts(productsResponse.data["data"]);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryAndProducts();
  }, [id]);

  return (
    <div className="products_container">
      {/* <h1>sa</h1> */}
      <div className='kontrol____uz'>
        {/* <img 
        style={{
          backgroundColor:"blue",
          width:"95%",
          height:'auto',
          boxSizing:"border-box"
        }}
        
        src={kontrol_uz} alt="" /> */}
        <h1 className='paage21e' >Schetchik</h1>
      </div>
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
            {products.length ? (
              products.map((product) => (
                <div 
                style={{
                  width:"46%"
                }}
                key={product._id} className="product_card21" onClick={() => productClick(product._id)}>
                  <div className='img_product_id121'>
                  <img  id='product__image'
                   style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  src={process.env.REACT_APP_BASE_URL + product.image} alt=""  />
                  </div>
                  <div id='product-name-uz' className="product-name-uz">{product.name_uz}</div>
                  {/* <FaStar className='star' />
                  <FaStar className='star' />
                  <FaStar className='star' />
                  <FaStar className='star' />
                  <FaStar className='star' /> */}

                  {/* <div className="product-name-en">{product.name_ru}</div> */}
                  {/* <div className="product-desc">{product.desc}</div> */}
                  <div id='product-priceMonth1' className="product-priceMonth"><del id='product-priceMonth'>{formatPrice(product.priceMonth)}</del></div>
                  <div id='product-price' className="product-price" style={
                    {
                      fontSize:"12px"
                    }
                  }>{formatPrice(product.price)}</div>
                  {/* <div id='product-count' className="product-count">{product.count} ta qoldi </div> */}
                </div>
              ))
            ) : (
              <h2 className="no-products">No products available</h2>
            )}
            
          </div>
          
        </div>
      )}

      <div className='Decription_id'>
        {category ? (
          <>
          {showSalom && (
        <div className="power-calculator">
        <h2>Stabilizator quvvati kalkulyatori</h2>
        <div className="items-container">
          {items.map((item) => (
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
                  <span className="item-power">
                    {item.power * selectedItems[item.id].quantity} vt
                  </span>
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
            <h3 className="category_name1">Decription</h3>
            <p className="category_name11">{category.data.name_ru}</p>
          </>
        ) : (
          <h2 className="no-category">Category not found</h2>
        )}
      </div>

      
    </div>
  );
};
