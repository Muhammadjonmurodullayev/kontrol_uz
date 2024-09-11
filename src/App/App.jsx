import React,{useState,useEffect} from 'react'
import Parent from '../Parent/Parent'
import "./App.css"
import Kontact from '../Kontact/Kontact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Chaild  from '../Chaild/Chaild.jsx'
import  { Products } from '../Products/Products.jsx'
import  { OneProduct } from '../OneProduct/OneProduct.jsx'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Mobile from "../Mobile/Mobile.jsx"
import Profil from '../Mobile/Profil.jsx'
import Call from '../Mobile/Call.jsx'
import Home from '../Mobile/Home.jsx'
import Admin from '../Admin_panel/Admin.jsx'
import { AdminProducts } from '../Admin_p/Products.jsx'
import Homeadmin from '../Admin_p/Admin_p.jsx'
import { Productss } from '../Mobile/SelectedCardsPage1.jsx'
import { OneProductt } from '../Mobile/Carddetal.jsx'
import Yordam from '../Chaild/yordam.jsx'
export const App = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <=800);

 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
  <BrowserRouter>




    {isMobile?(


      <>
      <Routes>
      <Route path="/" element={<Home />} />

      <Route path='/product/:id' element={<OneProductt />} />
      <Route path='/category/:id' element={<Productss />} />
      <Route path="/Profil" element={<Profil/>} />
      <Route path="/Call" element={<Call/>} />
      </Routes>
        <Mobile/>
      </>





    ):(
      <>
      <Parent/>
      <div className='page65753'>
      <Routes>
          <Route path="/" element={<Chaild />} />
      <Route path="/yordam" element={<Yordam/>} />

      <Route  path='/product/:id'   element={<OneProduct/>} />

      <Route  path='/category/:id'   element={<Products/>} />

          <Route path="/admin"  >
          <Route index element={<Admin/>} />
          
          <Route path="products" element={<Homeadmin/>} />
          <Route path='category/:id' element={<AdminProducts/>} />
          </Route>
      </Routes>
      </div>
      <Kontact  />
      </>
    )}


    

  
    </BrowserRouter>
  )
}
