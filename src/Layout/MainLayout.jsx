import { Outlet } from 'react-router-dom';
import Header from '../Pages/shared/Header/Header';
import Footer from '../Pages/shared/Footer/Footer';
// import bgImg from '../assets/blue-sky-white-clouds.png';
// import BackdropFilter from 'react-backdrop-filter';

const MainLayout = () => {
  return (
    <>
      <Header />

      <div
        className='bg-gray-100'
        style={{
          // backgroundImage: `url(${bgImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        {/* <BackdropFilter
          className='bluredForm'
          filter={'blur(8px) sepia(50%)'}
          canvasFallback={true}
          html2canvasOpts={{
            allowTaint: true,
          }}
          onDraw={() => {
            console.log('Rendered !');
          }}> */}
        <Outlet />
        {/* </BackdropFilter> */}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
