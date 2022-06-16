import React from 'react';
import './pcard.css'
import Licard from './Licard'
import FundCard from './fundCard';
function Pcard(props) {
  return <div  className='cards'>
      <h6 className='font'>{props.header}</h6>
      <p className='about'>{props.about}</p>
      <button className='next'>see all</button>
     {(props.header==="Fund Portfolio Baskets")?<div className='fun'><FundCard status="Basket Size: $500K" header="Institutional Funds Growth Basket" />
     <FundCard status="Min Size: $50,000" header="Mutual Funds Growth Basket" />
     </div>:<div className="data">
       <Licard/>
        <Licard/>
        <Licard/>
          
  </div>}
   </div>;
}

export default Pcard;

