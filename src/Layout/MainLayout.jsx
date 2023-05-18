import { Outlet } from 'react-router-dom';
import Header from '../Pages/shared/Header/Header';
import Footer from '../Pages/shared/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
