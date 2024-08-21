import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./AdminProducts.css"
export const AdminProducts = () => {
    let { id } = useParams(); // Category ID from URL
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [formData, setFormData] = useState({
        name_uz: '',
        name_en: '',
        desc: '',
        price: '',
        count: '',
        priceMonth: '',
        image: null
    });

    useEffect(() => {
        // Fetch products based on category ID
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/?category_id=${id}`)
            .then(response => {
                setProducts(response.data["data"]);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            image: e.target.files[0]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let url;
        let method;
        let data = { ...formData, category_id: id };

        if (editMode) {
            url = `${process.env.REACT_APP_BASE_URL}/api/v1/product/${editId}`;
            method = 'put';
        } else {
            url = `${process.env.REACT_APP_BASE_URL}/api/v1/product/create/`;
            method = 'post';
        }

        const formDataToSend = new FormData();
        for (let key in data) {
            formDataToSend.append(key, data[key]);
        }

        axios({ method, url, data: formDataToSend, headers: { 'Content-Type': 'multipart/form-data' } })
            .then(response => {
                alert('Product submitted successfully!');
                setShowForm(false);
                setFormData({
                    name_uz: '',
                    name_en: '',
                    desc: '',
                    price: '',
                    count: '',
                    priceMonth: '',
                    image: null
                });
                setEditMode(false);
                setEditId(null);

                // Optionally refetch products
                return axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/product/?category_id=${id}`);
            })
            .then(response => {
                setProducts(response.data["data"]);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleEdit = (product) => {
        setShowForm(true);
        setEditMode(true);
        setEditId(product._id);
        setFormData({
            name_uz: product.name_uz,
            name_en: product.name_en,
            desc: product.desc,
            price: product.price,
            count: product.count,
            priceMonth: product.priceMonth,
            image: null
        });
    };

    const handleDelete = (productId) => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/api/v1/product/${productId}`)
            .then(() => {
                setProducts(products.filter(product => product._id !== productId));
                alert('Product deleted successfully!');
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <h1>Products for Category 
            </h1>
            <button  onClick={() => setShowForm(true)}>Add Product</button>

            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name_uz"
                        value={formData.name_uz}
                        onChange={handleInputChange}
                        placeholder="Name (UZ)"
                        required
                    />
                    <input
                        type="text"
                        name="name_en"
                        value={formData.name_en}
                        onChange={handleInputChange}
                        placeholder="Name (EN)"
                        required
                    />
                    <textarea
                        name="desc"
                        value={formData.desc}
                        onChange={handleInputChange}
                        placeholder="Description"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="Price"
                        required
                    />
                    <input
                        type="number"
                        name="count"
                        value={formData.count}
                        onChange={handleInputChange}
                        placeholder="Count"
                        required
                    />
                    <input
                        type="number"
                        name="priceMonth"
                        value={formData.priceMonth}
                        onChange={handleInputChange}
                        placeholder="Price per Month"
                        required
                    />
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        required
                    />
                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => { setShowForm(false); setEditMode(false); setFormData({ name_uz: '', name_en: '', desc: '', price: '', count: '', priceMonth: '', image: null }); }}>Cancel</button>
                </form>
            )}

            <div>
                {products.length > 0 ? products.map(product => (
                    <div key={product._id}>
                        <div>{product.name_uz}</div>
                        <div>{product.name_en}</div>
                        <div>{product.desc}</div>
                        <div>{product.price}</div>
                        <div>{product.count}</div>
                        <div>{product.priceMonth}</div>
                        <img
                            src={`${process.env.REACT_APP_BASE_URL}${product.image}`}
                            alt={product.name_uz}
                            width="50px"
                            height="50px"
                        />
                        <button onClick={() => handleEdit(product)}>Edit</button>
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                    </div>
                )) : <h1>No products available</h1>}
            </div>
        </div>
    );
};
