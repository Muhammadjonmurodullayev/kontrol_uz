import React, { useState } from 'react';
import './Kategoriya.css'; // Import CSS for styling
import { IoMdMenu } from "react-icons/io";
import { FaGlobe } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";

const Kategoriya = () => {
  // State to hold the data
  const [data, setData] = useState([
    { id: 1, uzbek: 'Material', russian: 'Материал', group: 'Основные характеристики', status: 'active' },
    { id: 2, uzbek: 'O\'lchamlari (mm)', russian: 'Габариты (ШхВхТ) мм', group: 'Основные характеристики', status: 'inactive' },
    { id: 3, uzbek: 'Korpus turi', russian: 'Тип корпуса', group: 'Дополнительные характеристики', status: 'inactive' },
    // { id: 4, uzbek: 'Korpus turisa', russian: 'Тип корпуса', group: 'Дополнительные характеристики', status: 'inactive' },
  ]);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  const handleEdit = (id) => {
    // Handle edit functionality
    console.log(`Edit item with id: ${id}`);
  };

  return (
   <>
   <div className='mahsulotlar_parent1'>
<div className='mahsulotlar_parent'>
   <IoMdMenu className='IoMdMenu33'/>
    <p className='IoMdMenu33_text'>Kategoriya</p>
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
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Название [O'zbekcha]</th>
            <th>Название [Русский]</th>
            <th>Guruh</th>
            <th>Статус</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>{row.uzbek}</td>
              <td>{row.russian}</td>
              <td>{row.group}</td>
              <td>
                <span className={row.status === 'active' ? 'status-active' : 'status-inactive'}>
                  {row.status === 'active' ? 'Актив' : 'Неактив'}
                </span>
              </td>
              <td>
                <button onClick={() => handleEdit(row.id)} className="edit-btn">✏️</button>
                <button onClick={() => handleDelete(row.id)} className="delete-btn">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </>
  );
};

export default Kategoriya;










