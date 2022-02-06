import React from 'react';
import { Card, Col, Row } from 'antd';

import './pcard.css'


function Pcard(props) {
  return <div  className='cards'>
      <h6 className='font'>{props.header}</h6>
      <p className='about'>{props.about}</p>
     <div className="data"style={{ background: '#ECECEC', padding: '30px' }}> 
    <Row gutter={16}>
      <Col span={8}>
        <Card  title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card   title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card   title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
   </div>;
}

export default Pcard;

