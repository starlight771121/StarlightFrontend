import React from 'react';
import './Title.css';
import { Divider } from 'antd';

const Title = ({ text }) => {
  return (
    <div className='title-container'>
      <div className='title-wrapper'>
      <Divider style={{fontSize: '40px', fontFamily: 'Playfair Display'}}>{text}</Divider>
      </div>
    </div>
  );
};

export default Title;
