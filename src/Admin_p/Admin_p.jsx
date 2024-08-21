import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Admin_p.css"







 const Homeadmin = () => {
  let [category, setcategory] = useState([]);
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

  const navigator = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/category/all`)
      .then((response) => setcategory(response.data["data"]))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/ads/all`)
      .then((response) => setads(response.data["data"]))
      .catch((error) => console.log(error));
  }, []);

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
          } else {
            setcategory([...category, response.data.data]);
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
        } else {
          setads(getads.filter(item => item._id !== id));
        }
        alert("Item deleted successfully!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
    <button className="button" onClick={() => { setShowForm(true); setFormType("category"); setEditMode(false); }}>+ Add Category</button>
    <button className="button" onClick={() => { setShowForm(true); setFormType("ads"); setEditMode(false); }}>+ Add Ads</button>
  
<div>
  <input type="text" />
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
        {formType === "ads" && (
          <input
            className="input"
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
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
  
    {category.map((item) => (
      <div className="itemmm" key={item._id}>
        <div className="item-info">
          <div className='name___ru'>{item.name_uz}</div>
          <div className="name-ruuu">{item.name_ru}</div>
        </div>
       <div className='img_button_id'>
       <img
       className='img_button_id_121'
          src={process.env.REACT_APP_BASE_URL + item.image}
          alt=""
          width="50px"
          height="50px"
          onClick={() => { navigator("/admin/category/" + item._id); }}
        />
       </div>
        <div className="item-buttons">
          <button className="edit-button" onClick={() => handleEdit(item, "category")}>Edit</button>
          <button className="delete-button" onClick={() => handleDelete(item._id, "category")}>Delete</button>
        </div>
      </div>
    ))}
    <hr />
    {/* {getads.map((item1) => (
      <div className="item" key={item1._id}>
        <div className="item-info">{item1.title}</div>
        <img
          src={process.env.REACT_APP_BASE_URL + item1.image}
          alt=""
          width="50px"
          height="50px"
        />
        <div className="item-buttons">
          <button className="edit-button" onClick={() => handleEdit(item1, "ads")}>Edit</button>
          <button className="delete-button" onClick={() => handleDelete(item1._id, "ads")}>Delete</button>
        </div>
      </div>
    ))} */}
  </div>
  
  );
};


export default Homeadmin;