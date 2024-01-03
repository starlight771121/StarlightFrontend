import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { usePage } from '../../utils/PageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activePage, setPage } = usePage();
  const s3BucketUrl = process.env.REACT_APP_S3_BUCKET_URL;

  const navigate = useNavigate();

  const handleTabClick = (page) => {
    setPage(page);
  };

  const handleMenuItemClick = (page) => {
    setIsMenuOpen(false);
    setPage(page);
    {(page !== activePage) && navigate(page)}
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar-container' style={{ backgroundColor: '#f9e6df' }}>
      <div className='navbar'>
        <img className='logo' src='logo.png' alt='Logo'/>
        <div className='tabs'>
          <NavLink to='/' className={`page-link${activePage === '/' ? ' active-link' : ''}`} onClick={() => handleTabClick('/')}>主页</NavLink>
          <NavLink to='/aboutus' className={`page-link${activePage === '/aboutus' ? ' active-link' : ''}`} onClick={() => handleTabClick('/aboutus')}>关于我们</NavLink>
          <NavLink to='/ourbeauty' className={`page-link${activePage === '/ourbeauty' ? ' active-link' : ''}`} onClick={() => handleTabClick('/ourbeauty')}>Our Beauty</NavLink>
          {/* <NavLink to='/products' className={`page-link${activePage === '/products' ? ' active-link' : ''}`} onClick={() => handleTabClick('/products')}>产品</NavLink> */}
          <NavLink to='/product?id=1' className={`page-link${activePage === '/products' ? ' active-link' : ''}`} onClick={() => handleTabClick('/product?id=1')}>产品</NavLink>
          <NavLink to='/contactus' className={`page-link${activePage === '/contactus' ? ' active-link' : ''}`} onClick={() => handleTabClick('/contactus')}>联系我们</NavLink>
        </div>

        <div className="custom-dropdown">
          <div className="menu-button" onClick={toggleMenu}>
            <MenuOutlined />
          </div>

          {isMenuOpen && (
            <div className="dropdown-menu">
              <div className={`menu-item${activePage === '/' ? ' active-menu-item' : ''}`} onClick={() => handleMenuItemClick('/')}>主页</div>
              <div className={`menu-item${activePage === '/aboutus' ? ' active-menu-item' : ''}`} onClick={() => handleMenuItemClick('/aboutus')}>关于我们</div>
              <div className={`menu-item${activePage === '/ourbeauty' ? ' active-menu-item' : ''}`} onClick={() => handleMenuItemClick('/ourbeauty')}>Our Beauty</div>
              <div className={`menu-item${activePage === '/product?id=1' ? ' active-menu-item' : ''}`} onClick={() => handleMenuItemClick('/product?id=1')}>产品</div>
              {/* <div className={`menu-item${activePage === '/products' ? ' active-menu-item' : ''}`} onClick={() => handleMenuItemClick('/products')}>产品</div> */}
              <div className={`menu-item${activePage === '/contactus' ? ' active-menu-item' : ''}`} onClick={() => handleMenuItemClick('/contactus')}>联系我们</div>
            </div>
          )}
        </div> 
      </div>
    </div>
  );
};

export default Navbar;
