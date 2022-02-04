import React from 'react';
import {Card} from 'antd';
import './pcard.css'
import './App.css'
function pcard(props) {
  return <div className='cards'>
      <h6 className='font'>{props.header}</h6>
      <p className='about'>{props.about}</p>
      <Card>
          <p>card content</p>
      </Card>
  </div>;
}

export default pcard;

