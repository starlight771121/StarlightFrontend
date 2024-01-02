import React from 'react';
import './ProductCard.css'; 
import { useNavigate } from 'react-router-dom';
import { usePage } from '../../utils/PageContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { activePage, setPage } = usePage();

  const handleClick = ( id ) => {
    localStorage.setItem('productId',id);
    navigate(`/products?productId=${id}`);
    setPage('/ourbeauty');
  }

  return (
    <div className='product-card-container' onClick={() => handleClick(product.id)}>
      <div className='product-card-image-wrapper'>
        <img className='product-card-image' src={product.imageUrl}/>
      </div>
      <div className='product-card-title'> {product.title} </div>
    </div>
  );
};

export default ProductCard;
