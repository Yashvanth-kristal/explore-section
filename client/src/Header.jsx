import React from 'react';
import './App.css'
import {BsFillChatSquareTextFill} from 'react-icons/bs'
import {FiUser} from  "react-icons/fi";
import {GoSignOut} from "react-icons/go";
export default function Header() {
  return <div>
       <header>
    <img className="logo"src=""alt="logo"/>
   <span>KRISTAL</span>
   <nav>
       <ul className="nav_links">
           <li><a href="#">Home</a></li>
           <li><a href="#">Explore</a></li>
           <li><a href="#">Reports</a></li>
           <li><a href="#">Bookmarks</a></li>

       </ul>
 
    

   </nav>
   
  
   <div >
   <button><FiUser/></button>
    <button><BsFillChatSquareTextFill/></button> 
    <button><GoSignOut/></button>
    </div>
    </header>
  </div>;
}
