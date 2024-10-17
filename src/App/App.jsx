import React,{useState,useEffect, lazy} from 'react'
import Parent from '../Parent/Parent'
import "./App.css"
import Kontact from '../Kontact/Kontact'
import { BrowserRouter,Routes,Route,Outlet } from 'react-router-dom'
// import Chaild  from '../Chaild/Chaild.jsx'
import  { Products } from '../Products/Products.jsx'
import  { OneProduct } from '../OneProduct/OneProduct.jsx'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Mobile from "../Mobile/Mobile.jsx"
import Profil from '../Mobile/Profil.jsx'
import Call from '../Mobile/Call.jsx'
// import Home from '../Mobile/Home.jsx'
import Admin from '../Admin_panel/Admin.jsx'
import { AdminProducts } from '../Admin_p/Products.jsx'
import Homeadmin from '../Admin_p/Admin_p.jsx'
import { Productss } from '../Mobile/SelectedCardsPage1.jsx'
import { OneProductt } from '../Mobile/Carddetal.jsx'
import Yordam from '../Chaild/yordam.jsx'
import { Home1 } from '../Admin_p/home_admnin.jsx'
import { About1 } from '../Admin_p/about_admin.jsx'
import { Game1 } from '../Admin_p/Game_admin.jsx'
import { Mahsulotlar } from '../Admin_p/Mahsulotlar.jsx'
import Xarakteristika from '../Admin_p/Xarakteristika.jsx'
import Sozlamalar from '../Admin_p/Sozlamalar.jsx'
import Kategoriya from '../Admin_p/Kategoriya.jsx'

const Home = lazy(()=> import("../Mobile/Home.jsx"))
const Chaild = lazy(()=> import("../Chaild/Chaild.jsx"))

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
      <Route path="/" element={<Home/>} />
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
          <Route path="/admin" element={<Admin/>} />
          {/* <Route  path='/generatePDF'   element={<GeneratePDF/>} /> */}

           <Route path="products" element={<Homeadmin/>} >
               <Route path='home' element={<Home1/>} />
               <Route path='Xarakteristika' element={<Xarakteristika/>} />
               <Route path='Sozlamalar' element={<Sozlamalar/>} />
               <Route path='Kategoriya' element={<Kategoriya/>} />
               
               <Route path='category/:id' element={<AdminProducts/>} />
               <Route path='mahsulotlar' element={<Mahsulotlar/>} />
               <Route path='about' element={<About1/>} />
               <Route path='game' element={<Game1/>} />
         

            </Route>

          </Routes>
      </div>
      <Kontact  />
      </>
    )}


    

  
    </BrowserRouter>
  )
}
