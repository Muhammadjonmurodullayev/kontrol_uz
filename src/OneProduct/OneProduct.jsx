import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
// import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { IoIosStar } from "react-icons/io";
import 'jspdf-autotable';
import './OneProduct.css';
import pechat from "./pechat.jpg";  // Placeholder for the stamp image

export const OneProduct = () => {
  let { id } = useParams();
  let [product, setProduct] = useState();
  const formatPrice = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const generatePDF = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL({ pechat });
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("commercial_proposal.pdf");
    });
  };
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: process.env.REACT_APP_BASE_URL + '/api/v1/product/' + id,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        setProduct(response.data["data"]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const [currentDate, setCurrentDate] = useState("");
  const [currentDate2, setCurrentDate2] = useState("");

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; // Oy 0 dan boshlanadi, shuning uchun 1 qo'shamiz.
    const year = date.getFullYear();

    setCurrentDate(`${day}/${month}/${year}`);
  }, []);
  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; // Oy 0 dan boshlanadi, shuning uchun 1 qo'shamiz.
    const year = date.getFullYear();

    setCurrentDate2(`${day}${month}${year}`);
  }, []);


  return (
    <div>
      <div className="product-page">
        {
          product ? (
            <div className="product-container">
              <div className="image-section">
                <div className="main-image-container">
                  <img className="main-image" src={process.env.REACT_APP_BASE_URL + product.image} alt={product.name_uz} />
                </div>
                <div className="thumbnail-images">
                  <img src={process.env.REACT_APP_BASE_URL + product.image} alt={product.name_uz} />
                  <img src={process.env.REACT_APP_BASE_URL + product.image} alt={product.name_uz} />
                  <img src={process.env.REACT_APP_BASE_URL + product.image} alt={product.name_uz} />
                </div>
              </div>








              <div className="delivery-section">
                <h1 className="product-name">{product.name_uz}</h1>

{/* <br /> */}
                <div>
<IoIosStar className='IoIosStarOutline'/>
<IoIosStar className='IoIosStarOutline'/>
<IoIosStar className='IoIosStarOutline'/>
<IoIosStar className='IoIosStarOutline'/>
<IoIosStar className='IoIosStarOutline'/>
                </div>
                <p>
                  Краткое описание

                  Процессор: 8х ядерный AMD Ryzen 7 6800H
                  Частота процессора: до 4.7 ГГц
                  Операционная система: FreeDOS
                  Оперативная память: DDR5, 16 Гб
                  Накопитель данных: SSD 512 Гб
                  Модель видеокарты: GeForce RTX3050 Ti
                  Тип видеокарты: дискретный
                  Диагональ экрана: 16″
                  Комплект: ноутбук, адаптер питания, документация
                </p>
              </div>

              <div className="product_card">

                <div className="price-section">
                  <h2 className="price">{formatPrice(product.price)} сум</h2>
                <div className='format_firice_id'>
                <p className="price-in-usd" id='price_in_usd'>≈ {formatPrice(product.price)} so'm </p>
                </div>
                  <p className="availability">В наличии</p>
                </div>







                <div className="delivery-info">
                  <p className="free-delivery">Бесплатная доставка</p>
                  <p className="delivery-time">
                    Доставка по г.Ташкенту до 24 часов, по Республике Узбекистан до 2 рабочих дней.
                  </p><br />
                  <a href="tel:+998 (90) 329 12 84">
                <a href="tel:+998712006800">
                <button className="add-to-cart">Добавить в корзину</button>
                </a>

                  </a>
                  <button className="add-to-cart"
                    onClick={generatePDF}

                  >Коммерческий</button>
                </div>

                <div className="installment-info">
                  <h3 className="installment-title">Расрочка</h3>
                  <p className="installment-amount">12% сум/месяц на 6 месяцев.</p>
                  <p className="initial-payment">Первоначальный взнос: 0 сум.</p>
                  <p className="total-installment-price">Цена в рассрочку:12%сум.</p>
                  <p className="installment-note">
                    Расрочка осуществляется при оформлении заказа.
                  </p>
                  <a href="#" className="more-info-link">Узнать больше об условиях рассрочки</a>
                </div>
              </div>
            </div>
          ) : (
            <h1>loading</h1>
          )
        }
      </div>









































      <div className='pdfl'>
        <div id="pdf-content" style={{ padding: "20px" }}>
          <div className='currentDate2'>
            <p className='h21'>Письмо №{currentDate2}</p>
          </div>
          <div className='currentDate2'>
            <p className='h21'>Коммерческое предложение от {currentDate}</p>

          </div>
          <p className='h21'>
            На всю продукцию имеются сертификаты соответствия Агентства «УзСтандарт». Гарантийный срок от 1 года при соблюдении требований Поставщика. Срок поставки согласно заключенному контракту. Форма оплаты - любая. ВНИМАНИЕ! Наименования товаров (формулировка одного и того же товара) на сайте и в бухгалтерских документах могут различаться. Перед заказом уточните наличие необходимого товара и его количества у менеджера.
          </p>

          {
            product ? (<table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
              <thead>
                <tr>
                  <th>№</th>
                  <th>Товар</th>
                  <th>Цена</th>
                  <th>Количество</th>
                  <th>Общая стоимость</th>
                </tr>
              </thead>
              <tbody>
                <th>1</th>
                <th>{product.name_uz}</th>
                <th>{formatPrice(product.price)}</th>
                <th>1</th>
                <th>{formatPrice(product.price)}</th>
              </tbody>
            </table>) : ""
          }

          <div className='parend_pdff'>
            <div>
              <p style={{ marginTop: "20px" }}>НДС:</p>
              <p>Общая сумма:</p>
              <p>Общее количество:</p>
            </div>

            <div style={{ marginTop: "50px" }} >
              <img
                src={pechat} // replace with the actual stamp image path
                alt="Stamp"
                style={{ width: "150px", height: "150px" }}
              />
              <p>Директор: Улашев А.У</p>

            </div>

          </div>

        </div>


      </div>




    </div>
  );
}
