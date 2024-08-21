import { useNavigate } from "react-router-dom"
import React, { useState } from 'react'
import {credentials } from "./login_pasword"
import "./Admin.css"
const Admin = () => {
   const navigatore =useNavigate()
   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [isLoggedIn, setIsLoggedIn] = useState(false);
 
   const handleLoginChange = (e) => setLogin(e.target.value);
   const handlePasswordChange = (e) => setPassword(e.target.value);
   
 
   const handleSubmit = (e) => {
     e.preventDefault();
     if (login === credentials.login && password === credentials.password) {
       setIsLoggedIn(true);
       setError('');
     } else {
       setError('Login yoki parol xato');
     }
   };
 
  
  return (
    <div className="admin_panel">
  <div className="login-container">
      <h2>Login Page</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Login:</label>
          <input type="text" value={login} onChange={handleLoginChange} />
        </div>
        <div className="input-group">
          <label>Parol:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" onClick={()=>navigatore("/admin/products")}>Kirish</button>
      </form>
    </div>
    </div>
  )
}
export default Admin;
{/* <button type="submit" onClick={()=>navigatore("/admin/products")}>Kirish</button> */}
