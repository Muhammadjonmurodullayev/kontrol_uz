import React, {useMemo} from 'react'
import { useState,useEffect} from 'react';
import { useTable } from 'react-table';
import { IoMdMenu } from "react-icons/io";
import { FaGlobe } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { FaPencil } from "react-icons/fa6";
import axios from 'axios';
import "./Mahsulotlar.css"
import BarChart from './Bar';
import CustomBarChart from './Bar';
// import { useNavigate } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom';
export const Mahsulotlar = () => {

    let [category, setcategory] = useState([]);
    let [filteredCategory, setFilteredCategory] = useState([]);
    let [getads, setads] = useState([]);
    let [showForm, setShowForm] = useState(false);
    let [formType, setFormType] = useState(""); // "category" or "ads"
    let [formData, setFormData] = useState({
      name_uz: "",
      name_ru: "",
      image: null,
      title: ""
    });
    let [editMode, setEditMode] = useState(false);
    let [editId, setEditId] = useState(null);
    let [searchTerm, setSearchTerm] = useState(""); // State for search input
  
    const navigator = useNavigate();
  
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/category/all`)
        .then((response) => {
          setcategory(response.data["data"]);
          setFilteredCategory(response.data["data"]); // Initialize the filtered category list
        })
        .catch((error) => console.log(error));
    }, []);
  
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/ads/all`)
        .then((response) => setads(response.data["data"]))
        .catch((error) => console.log(error));
    }, []);
  
    const handleSearchChange = (e) => {
      const searchValue = e.target.value.toLowerCase();
      setSearchTerm(searchValue);
  
      // Filter the categories based on the search term
      const filtered = category.filter(item =>
        item.name_uz.toLowerCase().includes(searchValue)
      );
      setFilteredCategory(filtered);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      let url;
      let method;
      let data;
  
      if (editMode) {
        if (formType === "category") {
          url = `${process.env.REACT_APP_BASE_URL}/api/v1/category/${editId}`;
          method = 'put';
          data = {
            name_uz: formData.name_uz,
            name_ru: formData.name_ru,
            image: formData.image
          };
        } else if (formType === "ads") {
          url = `${process.env.REACT_APP_BASE_URL}/api/v1/ads/${editId}`;
          method = 'put';
          data = {
            title: formData.title,
            image: formData.image
          };
        }
      } else {
        if (formType === "category") {
          url = `${process.env.REACT_APP_BASE_URL}/api/v1/category/create`;
          method = 'post';
          data = {
            name_uz: formData.name_uz,
            name_ru: formData.name_ru,
            image: formData.image
          };
        } else if (formType === "ads") {
          url = `${process.env.REACT_APP_BASE_URL}/api/v1/ads/create`;
          method = 'post';
          data = {
            title: formData.title,
            image: formData.image
          };
        }
      }
  
      const formDataToSend = new FormData();
      for (let key in data) {
        formDataToSend.append(key, data[key]);
      }
  
      axios({ method, url, data: formDataToSend, headers: { 'Content-Type': 'multipart/form-data' } })
        .then((response) => {
          alert('Data submitted successfully!');
          setShowForm(false);
          setFormData({ name_uz: "", name_ru: "", image: null, title: "" });
          setEditMode(false);
          setEditId(null);
  
          if (formType === "category") {
            if (editMode) {
              setcategory(category.map(item => item._id === editId ? response.data.data : item));
              setFilteredCategory(category.map(item => item._id === editId ? response.data.data : item));
            } else {
              setcategory([...category, response.data.data]);
              setFilteredCategory([...category, response.data.data]);
            }
          } else if (formType === "ads") {
            if (editMode) {
              setads(getads.map(item => item._id === editId ? response.data.data : item));
            } else {
              setads([...getads, response.data.data]);
            }
          }
        })
        .catch((error) => console.log(error));
    };
  
    const handleEdit = (item, type) => {
      setFormType(type);
      setShowForm(true);
      setEditMode(true);
      setEditId(item._id);
  
      if (type === "category") {
        setFormData({ name_uz: item.name_uz, name_ru: item.name_ru, image: null, title: "" });
      } else if (type === "ads") {
        setFormData({ name_uz: "", name_ru: "", image: null, title: item.title });
      }
    };
  
    const handleDelete = (id, type) => {
      let url = type === "category"
        ? `${process.env.REACT_APP_BASE_URL}/api/v1/category/${id}`
        : `${process.env.REACT_APP_BASE_URL}/api/v1/ads/${id}`;
  
      axios.delete(url)
        .then(() => {
          if (type === "category") {
            setcategory(category.filter(item => item._id !== id));
            setFilteredCategory(filteredCategory.filter(item => item._id !== id));
          } else {
            setads(getads.filter(item => item._id !== id));
          }
          alert("Item deleted successfully!");
        })
        .catch((error) => console.log(error));
    };

  return (
    <div className='mahsulotlar_admin'>
<div className='mahsulotlar_parent1'>
<div className='mahsulotlar_parent'>
   <IoMdMenu className='IoMdMenu33'/>
    <p className='IoMdMenu33_text'>Mahsulotlar</p>
</div>
<div className='mahsulotlar_parent2'>
<div className='globale1'>
<FaGlobe className='FaGlobe5'/>
<p>o'zbekcha</p>
</div>
<div className='Admin_product5'>
<RiAdminFill  className='RiAdminFill6'/>
<p>Admin</p>
</div>
</div>

</div>
<br />
<hr />
<div className='mahsulotlar_panel6'>

<div className='table'>
  <div className="container">
    <div className='container_id90'>
      {/* <h1>Product Table</h1> */}
      
      <div className='button_item_id9'>
        <button className="button_id66" onClick={() => { setShowForm(true); setFormType("category"); setEditMode(false); }}>+ Add</button>
      </div>
    </div>

    {showForm && (
      <form className="form" onSubmit={handleFormSubmit}>
        {formType === "category" && (
          <>
            <input
              className="input"
              type="text"
              placeholder="Name UZ"
              value={formData.name_uz}
              onChange={(e) => setFormData({ ...formData, name_uz: e.target.value })}
              required
            />
            <input
              className="input"
              type="text"
              placeholder="Name RU"
              value={formData.name_ru}
              onChange={(e) => setFormData({ ...formData, name_ru: e.target.value })}
              required
            />
          </>
        )}
        <input
          className="input"
          type="file"
          onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
          required
        />
        <button className="submit-button" type="submit">Submit</button>
        <button className="cancel-button" type="button" onClick={() => { setShowForm(false); setEditMode(false); setFormData({ name_uz: "", name_ru: "", image: null, title: "" }); }}>Cancel</button>
      </form>
    )}

    <table className="styled-table">
      <thead>
        <tr>
          <th><div className='sort_id'>
        <input id='input_sotr_buy'
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div></th>
          <th> </th>
          <th></th>
          <th> </th>
          <th> </th>
          <th></th>
          <th> </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>№</th>
          <th>Product Name</th>
          <th>Narxi</th>
          <th>Rassrochka narxi</th>
          <th>Buyurtmalar soni</th>
          <th>Kategoriya</th>
          <th>Flag Id</th>
          <th>Статус</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {filteredCategory.map((item, index) => (
          <tr key={item._id}>
            <td>{index + 1}</td>
            <td>{item.name_uz}</td>
            <td>{item.price}</td>
            <td>{item.installmentPrice}</td>
            <td>{item.orderCount}</td>
            <td>{item.category}</td>
            <td>{item.flag}</td>
            <td>
  {item.image ? (
    <img
    onClick={() => { navigator("/products/category/" + item._id); }}
      src={`${process.env.REACT_APP_BASE_URL}/${item.image}`}
      alt={item.name_uz}
      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
    />
  ) : (
    'No Image'
  )}
</td>

            <td>
              <div className="item-buttons">
                <button id="edit-button" onClick={() => handleEdit(item, "category")}>
                  {/* <div> */}<br />
                    <FaPencil/>
                  {/* </div> */}
                  </button>
                <button className="delete-button" onClick={() => handleDelete(item._id, "category")}>Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <hr />
    <CustomBarChart />
  </div>
</div>


</div>
    </div>
  )
}
