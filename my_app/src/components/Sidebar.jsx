import React, { useState } from 'react';
import {
    FaHome,
    FaRegQuestionCircle,
    FaSearch,
    FaBars,
    FaRocketchat
}from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
      
        {
            path:"/Home",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/About",
            name:"About",
            icon:<FaRegQuestionCircle/>
        },
    
        {
            path:"/Explore",
            name:"Explore",
            icon:<FaSearch/>
        },
        {
            path:"/Contact",
            name:"Contact",
            icon:<FaRocketchat/>
        },
        {
            path:"Signin",
            name:"Signin",
            icon:<CgLogIn/>
        },
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">ProjectSpire</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar