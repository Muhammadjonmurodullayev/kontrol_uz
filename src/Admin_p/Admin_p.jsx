import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaGlobe } from "react-icons/fa6";
import { MdContactPage } from "react-icons/md";
import { IoMdCopy } from "react-icons/io";
import "./Admin_p.css"
import BarChart from './Bar';
import CustomBarChart from './Bar';

const Homeadmin = () => {
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
    <div className='container_button2'>

      <div className='container_button1'>
        <div className='parent_chail'>
          <div className='bukvaf'>
            <p className='parent_id_f'>K</p>
          </div>
          <h3 className='kontrol_b'>Kontrol</h3>
        </div>
        <hr />
       <Link to="home">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <IoHome className='IoHome1'/>
          <p className='link_p2'>Home</p>
        </div>
        </div>
       </Link>


       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <IoSettingsSharp  className='IoHome1'/>
          <p className='link_p2'>Sozlamalar</p>
        </div>
        </div>
       </Link>

       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <TfiMenuAlt  className='IoHome1'/>
          <p className='link_p2'>Xarakteristika</p>
        </div>
        </div>
       </Link>

       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <TfiMenuAlt  className='IoHome1'/>
          <p className='link_p2'>Kategoriya</p>
        </div>
        </div>
       </Link>        
        

       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <FaGlobe  className='IoHome1'/>
          <p className='link_p2'>Menyular</p>
        </div>
        </div>
       </Link>
       
       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <FaGlobe  className='IoHome1'/>
          <p className='link_p2'>Mahsulotlar</p>
        </div>
        </div>
       </Link>

       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <MdContactPage   className='IoHome1'/>
          <p className='link_p2'>Sahifalar</p>
        </div>
        </div>
       </Link>

       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <MdContactPage   className='IoHome1'/>
          <p className='link_p2'>Buyutmalar</p>
        </div>
        </div>
       </Link>    

       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <TfiMenuAlt  className='IoHome1'/>
          <p className='link_p2'>Mijozlar</p>
        </div>
        </div>
       </Link>   

       <Link to="about">
       <div className='admin_link_1'>
        <div className='admin__icons'>
        <TfiMenuAlt  className='IoHome1'/>
          <p className='link_p2'>Sayt foydalanuvchilari</p>
        </div>
        </div>
       </Link>   

       



        <Link to="about">
          <h1>about</h1>
        </Link>
        <Link to="game">
          <h1>game</h1>
        </Link>
      </div>


<div className='container_button3'>
  <Outlet/>
</div>

      {/* <div className="container">
     <div className='container_id90'>
      <h1>hello</h1>
      <div className='sort_id'>
        <input id='sort_id'
          type="text"
          placeholder="Search by Name UZ"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
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

      {filteredCategory.map((item) => (
        <div className="itemmm" key={item._id}
          style={{ cursor: "pointer" }}
        >
          <div className="item-info">
            <div className='name___ru'>{item.name_uz}</div>
            <div className="name-ruuu">{item.name_ru}</div>
          </div>
          <div className='img_button_id'>
            <img
          onClick={() => { navigator("/admin/category/" + item._id); }}
              className='img_button_id_121'
              src={process.env.REACT_APP_BASE_URL + item.image}
              alt=""
              width="50px"
              height="50px"
            />
          </div>
          <div className="item-buttons">
            <button className="edit-button" onClick={() => handleEdit(item, "category")}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete(item._id, "category")}>Delete</button>
          </div>
        </div>
      ))}
      <hr />
      <CustomBarChart />
    </div> */}
    </div>
  );
};

export default Homeadmin;
