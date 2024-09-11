import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './OneProduct.css';
import pechat from "./pechat.jpg"
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

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFont('Helvetica');  // To'g'ri shriftni tanlang
        doc.text('Коммерческое предложение', 20, 30);  // Matnni to'g'ri joylashtiring
        doc.save('document.pdf');
        
        

    
        // Set up the PDF content
        doc.setFont('Arial', 'normal');
        doc.setFontSize(16);
        doc.text('Коммерческое предложение', 300, 40, { align: 'center' });
    
        // Adding table and content (as explained earlier)
        doc.autoTable({
            startY: 80,
            head: [['№', 'Товар', 'Цена', 'Количество', 'Общая стоимость']],
            body: [
                ['1', 'Пример товара', '250000 сум', '1', '250000 сум']
            ],
            theme: 'grid',
            styles: { halign: 'center' },
            headStyles: { fillColor: [0, 128, 0], textColor: [255, 255, 255] }
        });
    
        const vat = (250000 * 0.12).toFixed(3); // Example VAT calculation
        const total = 250000 + parseFloat(vat);
    
        let finalY = doc.lastAutoTable.finalY + 20;
        doc.text(`НДС 12%: ${vat} сум`, 40, finalY);
        doc.text(`Общая сумма: 250000 сум`, 40, finalY + 20);
    
        // Saving the PDF
        doc.save('commercial-offer.pdf');
    };
    
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
                            <button className="add-to-cart" onClick={generatePDF}>Коммерческий</button>
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
