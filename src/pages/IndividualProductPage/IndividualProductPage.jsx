import React, { useState, useEffect } from 'react';
import './IndividualProductPage.css'; 
import { useLocation } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';

const IndividualProductPage = () => {
  const location = useLocation();
  const s3BucketUrl = process.env.REACT_APP_S3_BUCKET_URL;
  const apiUrl = process.env.REACT_APP_API_URL;
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const [product, setProduct] = useState(null); 

  useEffect(()=>{
    console.log(id)
    fetch(`${apiUrl}products/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error){
        alert(data.error)
      } else {
        console.log(data);
        setProduct(data);
      }
    })
  }, [])

  return (
    <div className='individual-page-container'>
      {product ? (
        <>
          <div className='individual-title'>{product.heading}</div>
          <div className='cover-image-wrapper'><img className='cover-image' src={`${s3BucketUrl}products/${product.id}/${product.id}_0.jpg`} alt='Item Image' /></div>
          <div className='individual-description' dangerouslySetInnerHTML={{ __html: product && product.description }} />
          <Carousel items={product.imgUrl} itemType='image'/>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );  
}

export default IndividualProductPage;