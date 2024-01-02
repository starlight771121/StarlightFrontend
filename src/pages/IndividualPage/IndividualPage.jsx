import React, { useState, useEffect } from 'react';
import './IndividualPage.css'; 
import { useLocation } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';

const IndividualPage = () => {
  const location = useLocation();
  const s3BucketUrl = process.env.REACT_APP_S3_BUCKET_URL;
  const apiUrl = process.env.REACT_APP_API_URL;
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const [beauty, setBeauty] = useState(null); 
  useEffect(()=>{
    fetch(`${apiUrl}beauties/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error){
        alert(data.error)
      } else {
        setBeauty(data);
        console.log(data);
      }
    })
  }, [])

  return (
    <div className='individual-page-container'>
      {beauty ? (
        <>
          <div className='tags-wrapper'>
            {beauty.tags.map((tag, index) => (
              <span key={index} className='tag'>
                {tag}
              </span>
            ))}
          </div>
          <div className='individual-title'>{beauty.heading}</div>
          <div className='cover-image-wrapper'><img className='cover-image' src={`${s3BucketUrl}beauties/${id}/${id}_0.jpg`} alt='Item Image' /></div>
          <div className='individual-description' dangerouslySetInnerHTML={{ __html: beauty && beauty.description }} />
          <Carousel items={beauty.imgUrl} itemType='image'/>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );  
}

export default IndividualPage;