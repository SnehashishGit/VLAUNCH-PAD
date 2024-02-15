
// import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Nav from "./components/nav"
import Features from "./container/features/Features";
import Info from "./components/Info/Info";
import CTA from "./components/cta/CTA";
import Brand from "./components/brand/Brand";

import Footer from "./components/Footer/Footer";
import Prizes from "./components/Prizes/Prizes";
import Contact from "./components/Contact/Contacts";
import Terms from "./components/Terms/Terms"


function App(){
  return (
 
      <>
    

    

   <Nav/>
        <Routes>

         <Route path="/" element={<Home/>}/>
       <Route path="about" element={<About />} />
    
         {/*<Route path="contact" element={<Contact />} />
         */}

      </Routes>
      <Features />
      <Info />
      <Prizes/>
      <CTA/>
      <Contact/>
      <Terms/>
        <Brand/>
        <Footer/>
      </>
   
  )
}



export default App;