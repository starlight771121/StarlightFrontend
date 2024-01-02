import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for styling
import Title from '../Title/Title'
import { usePage } from '../../utils/PageContext';
import { WechatOutlined, PhoneOutlined, WhatsAppOutlined, MessageOutlined, QqOutlined } from '@ant-design/icons';
const Footer = () => {
  const { activePage, setPage } = usePage();
  const s3BucketUrl = process.env.REACT_APP_S3_BUCKET_URL;
  console.log(activePage, 'footer');
  return (
    <div className='footer'>
      <div className='contact-wrapper' style={{ minHeight:`${activePage === '/contactus' ? 'calc(100vh - 280px)' : 'auto'}`}}>
        <Title text='Contact Us'/>
        <div className='footer-columns'>
          <div className='left-content'>
            <div className='contact-info'>
              <p className='contact-lines'> <PhoneOutlined style={{ marginRight: '5px' }} /> 秒接热线: 0434151763</p>
              <p className='contact-lines'> <WechatOutlined style={{ marginRight: '5px' }} /> 微信: adl9453666</p>
              <p className='contact-lines'> <WhatsAppOutlined style={{ marginRight: '5px' }} /> WhatsApp: 0434151763</p>
              <p className='contact-lines'> <MessageOutlined style={{ marginRight: '5px' }} /> Line: superstarlightadl</p>
              <p className='contact-lines'> <QqOutlined style={{ marginRight: '5px' }} /> QQ: 862603910</p>
            </div>
          </div>

          <div className='right-content'>
            <div className='qr-code-wrapper'>
              {/* <div className='qr-code'>
                <img src='wechat-qr-code.jpg' alt='First QR Code' width='100%' height='auto'/>
              </div>
              <div className='qr-code'>
                <img src='wechat-qr-code.jpg' alt='First QR Code' width='100%' height='auto'/>
              </div> */}
              <img className='qr-code' src={`${s3BucketUrl}assets/wechat-qr-code.jpg`} alt='First QR Code'/>
              <img className='qr-code' src={`${s3BucketUrl}assets/wechat-qr-code.jpg`} alt='First QR Code'/>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>Starlight © 2020 / All Rights Reserved</div>
    </div>
  );
};

export default Footer;
