import React from 'react';
import PropTypes from 'prop-types';
import './fund.css'
import logo from "./../images/Frame 2815.svg"
function fundCard(props) {
  return <div className='fund'>
     <text>{props.status}</text>
     
     <img className='image' src={logo}  alt='vector'/>
     <br/>
     <text className='text-2'>{props.header}</text>
    

    
  </div>;
}


export default fundCard;
