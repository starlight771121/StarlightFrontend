import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { usePage } from '../../utils/PageContext';
import Title from '../../components/Title/Title'
import Carousel from '../../components/Carousel/Carousel';
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay';

const Home = () => {
  const { activePage, setPage } = usePage();
  const navigate = useNavigate();
  const s3BucketUrl = process.env.REACT_APP_S3_BUCKET_URL;
  const apiUrl = process.env.REACT_APP_API_URL;

  const [beauties, setBeauties] = useState([]);
  const [products, setProducts] = useState([]);

  const handleOurBeautyClick = () => {
    setPage('/ourbeauty');
    navigate('/ourbeauty');
  };

  useEffect(()=> {
    fetch(`${apiUrl}products`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    })
    .then((res)=> res.json())
    .then((data)=> {
      if (data.error) {
        alert(data.error);
      } else {
        setProducts(data);
        console.log(data);
      }
    })
    fetch(`${apiUrl}active-beauties`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    })
    .then((res)=> res.json())
    .then((data)=> {
      if (data.error) {
        alert(data.error);
      } else {
        setBeauties(data);
        console.log(data);
      }
    })
  },[])

  return (
    <div className="home-page">
      <div className="front-cover">
        <div className="content">
          <img className='cover-logo' src='logo.png' alt='Logo'/>
          <p className='title' >StarLightADL</p>
          <p className='subtitle'>Adelaide Finest Escort</p>
          <div className="cta-button" onClick={() => handleOurBeautyClick()}>Our Beauty</div>
        </div>
      </div> 

      <Title text='Today Online'/>
      <div className='today-online-content-wrapper'>
        { beauties && beauties.length > 0  ? (
          <Carousel items={beauties} itemType='beauty'/>
          ) : (
          <p>No Beauties available</p>
        )}
      </div>

      <Title text='Our Products'/>
      <div className='home-content-wrapper'>
      {products && products.length > 0 ? (
        <div className='products-container'>
          {products.map((product) => (
            <div className='product-item-wrapper' key={product.id}><ItemDisplay item={product} itemType='product' /></div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}

      </div>
      
    </div>
  );
};

export default Home;
