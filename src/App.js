
// import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

import Nav from "./components/nav"
import Terms from "./Pages/Terms";
import Contact from "./Pages/Contact";

function App(){
  return (
 
      <>
    

    

   <Nav/>
        <Routes>

         <Route path="/" element={<Home/>}/>
       <Route path="about" element={<About />} />
    
       <Route path="terms" element={<Terms/>} />
         <Route path="contact" element={<Contact />} />
        

      </Routes>

      </>
   
  )
}



export default App;