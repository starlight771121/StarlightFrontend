import React, { useState, useEffect } from 'react';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import ItemDisplay from '../ItemDisplay/ItemDisplay';
import { Modal } from 'antd';

import './Carousel.css';
//itemType can be beauty, product, image
const Carousel = ({ items, itemType }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const s3BucketUrl = process.env.REACT_APP_S3_BUCKET_URL;
  const [modalIndex, setModalIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleImageClick = () => {
    showModal(true);
    setModalIndex(currentIndex);
    console.log('imageclicked')
  };

  // Auto-advance every second
  useEffect(() => {
    const interval = setInterval(goToNext, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className='carousel'>
        <div className='carousel-controls'>
        <CaretLeftOutlined className='control-icon' onClick={goToPrev} />
      </div>
      <div className='carousel-container'>
        {itemType === 'image' ?  
          <img className='carousel-image' src={`${s3BucketUrl}${items[currentIndex]}`} alt='Carousel image' onClick={() => handleImageClick()}/>
          :
          <ItemDisplay item={items[currentIndex]} itemType={itemType}/>
        }
      </div>
      <div className='carousel-controls'>
        <CaretRightOutlined className='control-icon' onClick={goToNext} />
      </div>
      <Modal open={isModalOpen} onCancel={()=>handleCancel()} width="100vw" height="100%" style={{top:0}} footer={<div style={{ display: 'none' }}></div>}>
        <img
          src={`${s3BucketUrl}${items[modalIndex]}`}
          alt='Modal Image'
          style={{ width: '100%', height: '100%', maxHeight: '90vh', objectFit: 'contain' }}
        />
      </Modal>
    </div>
  );
};

export default Carousel;
