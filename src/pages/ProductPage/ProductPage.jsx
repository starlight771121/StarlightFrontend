import React, { useState, useEffect } from 'react';
import './ProductPage.css'
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
  const { search } = useLocation();
  const [products, setProducts] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const productIdParam = new URLSearchParams(search).get('productId');

  useEffect(()=>{
    fetch(`${apiUrl}products`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'},
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error){
        alert(data.error)
      } else {
        setProducts(data);
        console.log(data);
      }
    })
  }, [])

  useEffect(() => {
    const scrollToProduct = (productId) => {
      console.log('scroll function');
      const element = document.getElementById(`product-${productId}`);
      if (element) {
        console.log('element valiud');
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (productIdParam) {
      // If productId is provided in URL params, scroll to that product
      scrollToProduct(productIdParam);
      // Save the selected product ID to local storage
      localStorage.setItem('selectedProductId', productIdParam);
    }
  }, [productIdParam]);

  return (
    <div className="product-page">
      {products ? (products.map((product, index) => (
        <div key={product.id} id={`product-${product.id}`} className={`product-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
          <div className="image-column">
            <div className='image-wrapper'>
              <img src={product.imageUrl} alt={product.title} />
            </div>
          </div>
          <div className="info-column">
            <div className='info-wrapper'>
              <p className='product-page-title'>{product.title}</p>
              <div className='product-description' dangerouslySetInnerHTML={{ __html: product && product.description }}/>
            </div>
          </div>
        </div>
      )))
      :
      <p>loading...</p>}
    </div>
  );
};

export default ProductPage;
