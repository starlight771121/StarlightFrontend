import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageProvider } from './utils/PageContext';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import ProductPage from './pages/ProductPage/ProductPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import BeautyPage from './pages/BeautyPage/BeautyPage';
import IndividualPage from './pages/IndividualPage/IndividualPage';
import IndividualProductPage from './pages/IndividualProductPage/IndividualProductPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <PageProvider>
        <Navbar/>
        <main className='main'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            {/* <Route path='/products' element={<ProductPage/>}/> */}
            <Route path='/aboutus' element={<AboutUsPage/>}/>
            <Route path='/ourbeauty' element={<BeautyPage/>}/>
            <Route path="/beauty" element={<IndividualPage/>} />
            <Route path="/product" element={<IndividualProductPage/>} />
          </Routes>
        </main>
        <Footer/>
        </PageProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
