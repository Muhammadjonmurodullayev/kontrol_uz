import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { credentials } from "./login_pasword";
import "./Admin.css";

const Admin = () => {
   const navigate = useNavigate();
   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [loginError, setLoginError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);

   const handleLoginChange = (e) => {
     setLogin(e.target.value);
     setLoginError(false); // Reset error when user types
   };

   const handlePasswordChange = (e) => {
     setPassword(e.target.value);
     setPasswordError(false); // Reset error when user types
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     let isValid = true;

     if (login !== credentials.login) {
       setLoginError(true);
       isValid = false;
     } else {
       setLoginError(false);
     }

     if (password !== credentials.password) {
       setPasswordError(true);
       isValid = false;
     } else {
       setPasswordError(false);
     }

     if (isValid) {
       setError('');
       navigate("/products");
     } else {
       setError('Login yoki parol xato');
     }
   };

   return (
     <div className="admin_panel">
       <div className="login-container">
         <h2>Online shop </h2>
         {error && <p className="error">{error}</p>}
         <form onSubmit={handleSubmit}>
           <div className="input-group">
             <label>Login:</label>
             <input
               type="text"
               value={login}
               onChange={handleLoginChange}
               className={loginError ? 'error-border' : 'success-border'} // Conditional border class
             />
           </div>
           <div className="input-group">
             <label>Parol:</label>
             <input
               type="password"
               value={password}
               onChange={handlePasswordChange}
               className={passwordError ? 'error-border' : 'success-border'} // Conditional border class
             />
           </div>
           <button type="submit">Kirish</button>
         </form>
       </div>
     </div>
   );
};

export default Admin;
