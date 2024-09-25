import React from 'react';
import './Xarakteristika.css'; // Separate file for CSS styling
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing icons
import { IoMdMenu } from "react-icons/io";
import { FaGlobe } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";

const Xarakteristika = () => {
  const data = [
    {
      id: 1,
      nameUz: "Asosiy xususiyatlar",
      nameRu: "Основные характеристики",
      count: 2,
      status: "Aktiv",
    },
    {
      id: 2,
      nameUz: "Qo'shimcha xususiyatlar",
      nameRu: "Дополнительные характеристики",
      count: 1,
      status: "Aktiv",
    },
  ];

  return (
 <>

<div className='mahsulotlar_parent1'>
<div className='mahsulotlar_parent'>
   <IoMdMenu className='IoMdMenu33'/>
    <p className='IoMdMenu33_text'>Xarakteristika</p>
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


    <div className="table-container">
      <div className="table-header">
        {/* <button className="add-button">+</button> */}
      </div>
      <table className="custom-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Название [O'zbekcha]</th>
            <th>Название [Русский]</th>
            <th>Xususiyatlar soni</th>
            <th>Status</th>
            <th>Harakatlar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.nameUz}</td>
              <td>{item.nameRu}</td>
              <td>{item.count}</td>
              <td><span className="status-label">{item.status}</span></td>
              <td>
                <FaEye className="action-icon view-icon" />
                <FaEdit className="action-icon edit-icon" />
                <FaTrashAlt className="action-icon delete-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <span>1-2/Jami: {data.length} ta</span>
      </div>
    </div>
 </>
  );
};

export default Xarakteristika;






























// import React from 'react'
// import "./Xarakteristika.css"
// export const Xarakteristika = () => {
//   return (
//     <div>Xarakteristika</div>
//   )
// }
