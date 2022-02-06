import React from 'react';
import './App.css'
import {BsFillChatSquareTextFill} from 'react-icons/bs'
import {FiUser} from  "react-icons/fa";
import {GoSignOut} from "react-icons/go";
export default function Header() {
  return <div>
       <header>
    <img className="logo"src="https://global-uploads.webflow.com/614a9edd8139f5d…839ce5fefe853138_Kristal%20Logotype%20Primary.svg"alt="logo"
   />
   <nav>
       <ul className="nav_links">
           <li><a href="#">Home</a></li>
           <li><a href="#">Explore</a></li>
           <li><a href="#">Reports</a></li>
           <li><a href="#">Bookmarks</a></li>

       </ul>
 
    

   </nav>
   
  
   
   <button><FiUser/></button>
    <button><BsFillChatSquareTextFill/></button> 
    <button><GoSignOut/></button>
    </header>
  </div>;
}
