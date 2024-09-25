import React, { useState } from 'react';
import './Sozlamalar.css'; // Separate file for CSS styling
import { IoMdMenu } from "react-icons/io";
import { FaGlobe } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
const Sozlamalar = () => {
  const [formData, setFormData] = useState({
    email: '',
    officeAddressUz: '',
    officeAddressRu: '',
    phone: '',
    workingDaysUz: '',
    workingDaysRu: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your submission logic here
  };

  return (
   <>
   <div className='mahsulotlar_parent1'>
<div className='mahsulotlar_parent'>
   <IoMdMenu className='IoMdMenu33'/>
    <p className='IoMdMenu33_text'>Home</p>
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
   <div className="form-container">
      <form onSubmit={handleSubmit} className="custom-form">
        <div className="form-group">
          <label>EMAIL ADRES</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=""
            required
          />
        </div>

        <div className="form-group">
          <label>Office address [O'zbekcha]</label>
          <input
            type="text"
            name="officeAddressUz"
            value={formData.officeAddressUz}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Office address [Русский]</label>
          <input
            type="text"
            name="officeAddressRu"
            value={formData.officeAddressRu}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Telefon raqam</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Ish kunlari [O'zbekcha]</label>
          <input
            type="text"
            name="workingDaysUz"
            value={formData.workingDaysUz}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Ish kunlari [Русский]</label>
          <input
            type="text"
            name="workingDaysRu"
            value={formData.workingDaysRu}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="save-button">Сохранить</button>
      </form>
    </div>
   </>
  );
};

export default Sozlamalar;









