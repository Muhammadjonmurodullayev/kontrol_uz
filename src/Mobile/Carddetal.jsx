import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import "./Carddetal.css"
import { FaStar } from "react-icons/fa";
import kontrol_com from "./kontrol.uz svg (1) 2.svg"
export const OneProductt = () => {
    let { id } = useParams();
    let [products, setProducts] = useState();

    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: process.env.REACT_APP_BASE_URL + '/api/v1/product/' + id,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                setProducts(response.data["data"])
            })
            .catch((error) => {
                console.log(error);
            });
        return () => { }
    }, [id])

    return (
      <div className='parent___id__1'>
       <div className='kontrol_com1'>
            <img className='kontrol_com1' src={kontrol_com} alt="" />
          </div>
       <div className="product-card">
         
            {
                products ? (
                    <div className="product-details">
                        <img src={process.env.REACT_APP_BASE_URL + products.image} alt="Product" className="product-image" />
                        <h1>{products.name_uz}</h1>
                        <FaStar className='FaStar'/>
                        <FaStar className='FaStar'/>
                        <FaStar className='FaStar'/>
                        <FaStar className='FaStar'/>
                        <FaStar className='FaStar'/>
                       <del style={{color:"red"}}> <p style={{color:"red"}}>{products.priceMonth}</p></del>
                        <h2>{products.price} сум</h2>
                        <p className='omborda_1_'>{products.count} ta qoldi</p>
                        <p className="price-usd">≈ ${products.price}</p>
                        <p className="availability">В наличии</p>
                        <div className="delivery-info">
                            <p>Бесплатная доставка</p>
                            <p>Доставка по г.Ташкенту до 24 часов, по Республике Узбекистан до 2 рабочих дней.</p>
                        </div>
                        <div className="installment-info">
                            <p>Рассрочка: {products.priceMonth} сум/месяц на 6 месяцев.</p>
                            <p>Первоначальный взнос: {products.initialPayment} сум.</p>
                            <p>Цена в рассрочку: {products.totalPriceInInstallments} сум.</p>
                        </div>
                        <button className="buy-button">Купить</button>
                    </div>
                ) : <h1>loading</h1>
            }
        </div>
        <div className="bosh_joy">
          
        </div>
      </div>
       
    )
}
