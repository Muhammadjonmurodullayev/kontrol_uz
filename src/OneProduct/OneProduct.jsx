import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './OneProduct.css';

export const OneProduct = () => {
    let { id } = useParams();
    let [product, setProduct] = useState();

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

    return (
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
                        <div className="details-section">
                            <h1 className="product-name">{product.name_uz}</h1>
                            <div className="product-rating">
                                <span>⭐⭐⭐⭐⭐</span> 
                                <span>0 Отзывов</span>
                            </div>
                            <div className="product-description">
                                <h3>Краткое описание</h3>
                                <p>Количество баночек: 12</p>
                                <p>Объем банки: 85 мл.</p>
                                <p>Материал банок: Панель</p>
                                <p>Материал основания: Металл</p>
                                <p>Материал держателей: нержавеющая сталь</p>
                            </div>
                            <div className="product-price-section">
                                <div className="price-wrapper">
                                    <span className="current-price">{product.price} сум</span>
                                    <span className="old-price">{product.priceMonth} сум</span>
                                    <span className="discount"></span>
                                </div>
                                <p className="price-in-usd">Omborda:{product.count} ta qoldi</p>
                                <p>В наличии</p>
                            </div>
                            <Link to="/">
                            <button className="add-to-cart">Добавить в корзину</button>
                            </Link>
                            {/* <div className="installment-info">
                                <p>Рассрочка: 77 280 сум/месяц на 6 месяцев.</p>
                                <p>Первоначальный взнос: 0 сум.</p>
                                <p>Цена в рассрочку: 463 680 сум.</p>
                            </div> */}
                        </div>
                        <div className="delivery-section">
                            <h3>Доставка</h3>
                            <p>Бесплатная доставка</p>
                            <p>Доставка по г.Ташкенту до 24 часов, по Республике Узбекистан до 2 рабочих дней.</p>
                        </div>
                    </div>
                ) : (
                    <h1>loading</h1>
                )
            }
        </div>
    );
}
