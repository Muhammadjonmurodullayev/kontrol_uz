import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CategoriesAndProducts1.css";
import { FaStar } from "react-icons/fa";

// API chaqiruvlari uchun funksiya
const fetchCategories = async () => {
  try {
    const response = await fetch('https://schetchik.com.uz/api/v1/category/all');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    console.log('Categories Data:', data);
    return data.data; // 'data' maydonini qaytaramiz
  } catch (error) {
    console.error('Error fetching categories:', error);
    return []; // Agar xatolik bo'lsa, bo'sh massiv qaytaramiz
  }
};

const fetchProducts = async () => {
  try {
    const response = await fetch('https://schetchik.com.uz/api/v1/product/all');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    console.log('Products Data:', data);
    return data.data; // 'data' maydonini qaytaramiz
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Agar xatolik bo'lsa, bo'sh massiv qaytaramiz
  }
};

const CategoriesAndProducts1 = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const categoriesData = await fetchCategories();
      const productsData = await fetchProducts();
      setCategories(categoriesData);
      setProducts(productsData);
    };

    getData();
  }, []);
  
  const navigator = useNavigate();

  // Ma'lumotlar to'g'ri formatda ekanligini tekshiramiz
  if (!Array.isArray(categories)) {
    console.error('Categories is not an array:', categories);
    return <div>Error: Categories is not an array</div>;
  }

  if (!Array.isArray(products)) {
    console.error('Products is not an array:', products);
    return <div>Error: Products is not an array</div>;
  }

  // Faqat `name_uz` qiymati "panellar" yoki "suv" bo'lgan kategoriyalarni filtrlash
  const filteredCategories = categories.filter(category =>
    category.name_uz === 'Новые продукты' || category.name_uz === 'Скидки на Товары' || category.name_uz === 'Бестселлеры'
  );

  return (
    <div className='products_vcatd'>
      {filteredCategories.map(category => (
        <div key={category._id} className='categotr_name_uz'>
          <h2 id='category_name_uz_id67'
          style={{
            fontSize:"30px"
          }}
          >{category.name_uz}</h2>
          <div className='categoru_poroduct_card'>
            {products
              .filter(product => product.category_id === category._id)
              .map(filteredProduct => (
                <div
                  className='card'
                  onClick={() => { navigator("/product/" + filteredProduct._id) }}
                  key={filteredProduct._id}
                  style={{ border: '1px solid #ddd', padding: '10px', marginTop: '10px' }}
                >
                  <div className='card_input_card'>
                    <img
                      src={`https://schetchik.com.uz${filteredProduct.image}`}
                      alt={filteredProduct.name_uz}
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      onError={() => console.error('Error loading image for product:', `https://schetchik.com.uz${filteredProduct.image}`)}
                    />
                  </div>
                  <h3 className='card_name3232'>{filteredProduct.name_uz}</h3>
                  <FaStar id='star'/>
                  <FaStar id='star'/>
                  <FaStar id='star'/>
                  <FaStar id='star'/>
                  <FaStar id='star'/>
                  <FaStar id='star'/><br />
                  <span className='span_price'>{filteredProduct.price} so'm</span>
                  <p className='Oldingi_narx'><del id='decoration'>{filteredProduct.priceMonth} so'm</del></p>
                  <p className='Omborda_po'>Omborda: {filteredProduct.count}ta qoldi</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesAndProducts1;
