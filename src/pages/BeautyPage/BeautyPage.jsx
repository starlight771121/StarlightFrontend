import React, { useState, useEffect } from 'react';
import './BeautyPage.css'; 
import Title from '../../components/Title/Title';
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay';

const BeautyPage = () => {
  const [beauties, setBeauties] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(()=> {
    fetch(`${apiUrl}beauties`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    })
    .then((res)=> res.json())
    .then((data)=> {
      if (data.error) {
        alert(data.error);
      } else {
        setBeauties(data);
      }
    })
  },[])

  return (
    <>
      <Title text='Our Beauty'/>
      <div className='our-beauty-container'>
        {beauties.map((beauty, index) => (
          <ItemDisplay item={beauty} itemType='beauty' key={index}/>
        ))}
      </div>
    </>
  )
}

export default BeautyPage;