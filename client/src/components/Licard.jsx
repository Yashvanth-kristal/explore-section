import React from 'react';
import  './Licard.css'
import fundCard from './fundCard';
import vector from './../images/vector.svg'
function Licard() {
  return <div className='licard'>
       
      <div className='card-header'>
      <div className='box'></div>
       <div className='box-header'><text className='status'>Recently closed</text>
        <text className='title'> Chime</text></div>
        </div>
       <div className='bank'> <h6 className='neobanking'>Neobanks</h6>
        <h6 className='mbanking'>Mobile Banking</h6></div>
        <div className='li-footer'> 
        <div className='dates'><h6>$ 25.00B</h6>
        <text>Implied Valuation</text>
        
        </div>
        <div className='foot'>
        <text >25 Oct 2021</text>
        <h6>Book Close Date</h6>
     
        </div> 
        <button><img className='btn' src={vector} alt='vector'/></button>
        </div>
          
  </div>;
}

export default Licard;

