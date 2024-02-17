import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbarstyle.css"
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import logo from "../images/gallery/VTBIF logo.png"
import { useEffect } from 'react';

export default function Nav()
    { 
        const [isopen, setIsOpen] = useState(false)


        const [scrolled, setScrolled] = useState(false);

        useEffect(() => {
          const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);





        

  return (
    <>
    <nav className={scrolled ? 'outer_div scrolled' : 'outer_div'}>
    
    
    
    <a href="/">
         {/* <p>VLaunch - <span className='fm'>Pad
         </span></p> */}
        
         </a>
         <div className='logo_div'><img src={logo} className='logo'>
            
         </img><p>VLaunchPad</p></div>
        <div>
        <ul className={isopen ?"ul_list" :"ul_list1"}>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/about" } onClick={()=>{
            setIsOpen (!isopen)
         } }>About Us</Link>
            </li>
            <li>
               
               
               
                {/* <Link    to={""}onClick={()=>{
            setIsOpen (!isopen)
         } }>Events</Link> */}
            </li>
            <li>
                <Link   to={"/"}onClick={()=>{
            setIsOpen (!isopen)
         } }>Tracks</Link>
            </li><li>
                <Link   to={"/"}onClick={()=>{
            setIsOpen (!isopen)
         } }>Template</Link>
            </li><li>
                <Link    to={"/terms"}onClick={()=>{
            setIsOpen (!isopen)
         } }>Terms & Conditions</Link>
            </li><li>
                <Link   to={"/Contact"}onClick={()=>{
            setIsOpen (!isopen)
         } }>Contact</Link>
            </li><div className="gpt3__cta-btn">
      <button type="button">Brochure</button>
    </div>
        </ul>
        
        
        
        
        </div>
        {/* <Link to={"/pricing"}><button className='btn'>Products</button></Link> */}
        
         <FaBars className='icon' onClick={()=>{
            setIsOpen (!isopen)
         } }/>
             
    
    </nav>
    </>
  )
}