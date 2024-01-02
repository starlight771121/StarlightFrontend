import React from 'react';
import './AboutUsPage.css'; 
import Title from '../../components/Title/Title';
import { usePage } from '../../utils/PageContext';
import { useNavigate } from 'react-router-dom';

const AboutUsPage = () => {
  const { activePage, setPage } = usePage();
  const s3BucketUrl = process.env.REACT_APP_S3_BUCKET_URL;
  const navigate = useNavigate();
  const handleContactUs = () => {
    setPage('/contactus');
    navigate('/contactus')
  }
  return (
    <>
    <Title text='STARLIGHT'/>
    <div className='about-us-container'>
      <div className='about-text'>
        <p>Starlight是澳洲规模大资历久实力最雄厚的靠谱集团。多年来与各位顾客与女生风雨同舟，感恩相遇，时光荏苒，岁月如梭，在2020年我们更加加倍努力，给顾客提供更优质的服务，给女生提供更优质的保障。</p>
        <p>新的一年里我们依旧以为顾客提供优质的服务，为女生提供安全的保障为己任。提供伴游陪赌，学生援交，外围出钟，包养包夜，incall/outcall于一体的集聚亚洲风情的顶级服务。公司导入灵活的运作模式，人性化的管理制度，配套精致的服务环境，高效的服务团队，透明的录用标准，秉承真诚贴心的服务态度，创造高档的服务品质，为广大狼友们打造全方位的情色盛宴。</p>
        <p>预订我们的可爱佳丽，做出最令您满意的选择，请首先移步访问本站 “Our Beauty”栏目，选择您的心动宝贝。我们有多种预约方式可供您选择，如第三方聊天平台预约系统-Line、Wechat。您也可以选择最快捷方便的预约方式直接致电我们的客服热线：0468453721（10:00-00:00 Monday-Sunday）</p>
      </div>

      <button className='contact-us-button' onClick={()=> handleContactUs()}>Contact Us</button>

      <div className='image-container'>
        <img src={`${s3BucketUrl}assets/night-star-background.jpg`} alt='Company Image'/>
      </div>
    </div>
    <Title text='诚邀您的加入'/>
    <div className='about-us-container'>
      <div className='about-text'>
        <p>为女生提供稳定丰厚的收入，是我们不变的宗旨！而市面上各种黑中介恶劣的住宿环境，压榨女生的行为同样为我们不齿。2020年的全面招工面向全澳开启，我们秉承安分守己，踏实做事的原则，为女生提供专业的服务团队。人性化的管理，顶级公寓或酒店住宿，配备专车接送，贴心的客服，及24小时无缝隙的保障。薪资雄厚，在舒适的环境，人性化的服务下每周薪资过万。我们经验强大的分析团队会为您量身定做方案，在不打扰您的生活的前提下，为您提供舒适安全，整洁卫生的工作生活环境和无微不至的呵护和依靠。不管是遇到学费或是生活问题，Starlight都是您坚强的依靠。让您在工作中体会到家的感觉!不必去打量心中的苦恼,唯有珍惜眼前的时刻，珍惜这些有我们相伴的日子。</p>
        <p>星光璀璨的客户群体大多是社会高薪人才，其中不乏小鲜肉和富二代公子。我们诚邀您的加入，在解决财务问题上不吃亏，在工作是享受无微不至的呵护，Starlight是您的不二选择！</p>
        <p>有缘的人，总是在花好月圆的时刻相遇，在对的时间里明白应该明白的事，不多也不少，不早也不迟。</p>
        <p>星光璀璨是一个开放的平台，欢迎有共同兴趣爱好的朋友合作，共同创造财富，开拓市场。更加愿意与客人深度交流沟通，以客人为本，秉承着服务至上的原则最大化您的利益。欢迎您与我们交流，探讨，合作。</p>
      </div>
      <button className='contact-us-button' onClick={()=> handleContactUs()}>Contact Us</button>
    </div>
    </>
  )
}

export default AboutUsPage;