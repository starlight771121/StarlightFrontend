import React from 'react';
import './ItemDisplay.css'; 
import { usePage } from '../../utils/PageContext';
import { useNavigate } from 'react-router-dom';

const ItemDisplay = ({ item, itemType }) => {
  const { activePage, setPage } = usePage();
  const navigate = useNavigate();
  const s3BucketUrl = process.env.REACT_APP_S3_BUCKET_URL;

  const readMoreBtnClick = () => {
    setPage(null);
    navigate(`/${itemType}?id=${item.id}`);
  }
  return (
    <div className='item-display'>
      <div className='image-column'>
        <img className='item-display-image' src={`${s3BucketUrl}${itemType === 'beauty' ? 'beauties': 'products'}/${item.id}/${item.id}_0.jpg`} alt='Item Image' />
      </div>
      <div className='info-column'>
        <div className='info-column-wrapper'>
          <div className='tags-wrapper'>
            {item.tags?.map((tag, index) => (
              <span key={index} className='tag'>
                {tag}
              </span>
            ))}
          </div>
          <div className='title'>{item.heading}</div>
          <button onClick= {()=> readMoreBtnClick()}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDisplay;
