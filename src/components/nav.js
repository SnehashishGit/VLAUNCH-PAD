import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbarstyle.css"
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
import logo from "../images/gallery/VTBIF logo.png"


export default function Nav()
    { 
        const [isopen, setIsOpen] = useState(false)
        

  return (
    
    <div className='outer_div'>
    
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
            </li><li>
                <Link    to={"/pricing"}onClick={()=>{
            setIsOpen (!isopen)
         } }>Events</Link>
            </li><li>
                <Link   to={"/pricing"}onClick={()=>{
            setIsOpen (!isopen)
         } }>Tracks</Link>
            </li><li>
                <Link   to={"/gallery/page-1"}onClick={()=>{
            setIsOpen (!isopen)
         } }>Template</Link>
            </li><li>
                <Link    to={"/pricing"}onClick={()=>{
            setIsOpen (!isopen)
         } }>Advisory Committee</Link>
            </li><li>
                <Link   to={"/contact"}onClick={()=>{
            setIsOpen (!isopen)
         } }>Contact</Link>
            </li>
        </ul></div>
        {/* <Link to={"/pricing"}><button className='btn'>Products</button></Link> */}
        
         <FaBars className='icon' onClick={()=>{
            setIsOpen (!isopen)
         } }/>
             <div className="gpt3__cta-btn">
      <button type="button">Brochure</button>
    </div>
    </div>
  )
}