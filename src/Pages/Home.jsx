import Hero from "../components/Hero/Hero"
import About from "../components/About/About";
import Event from "../components/Eventdetails/Event";

import Features from "../container/features/Features";
import Info from "../components/Info/Info";
import Prizes from "../components/Prizes/Prizes";
import CTA from "../components/cta/CTA";
import Contact from "../components/Contact/Contacts"
import Advisory from "../components/Advisory/Advisory";
import Terms from "../components/Terms/Terms";
import Brand from "../components/brand/Brand";
import Footer from "../components/Footer/Footer"
import Patrons from "../components/Patrons/Patrons";
import Committee from "../components/Committee/Committee";



function Home(){
    return(
        <>
        <Hero/>
        <About />
        <Event/>
        <Features />
      <Info/>
      <Prizes/>
      <CTA/>
      <Contact/>
      <Patrons/>
      <Advisory/>
      <Committee/>
      <Terms/>
        <Brand/>
        <Footer/>
        
        </>
    )
}

export default Home;