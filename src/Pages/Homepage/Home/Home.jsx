import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../../Layout/PageWrapper';
import Hero from '../../shared/Hero';
import { Helmet } from 'react-helmet';
import ToysYouMayLike from '../ToysYouMayLike';
import NewArrival from '../NewArrival';
import Trending from '../Trending';
import Gallery from '../Gallery';
import ShopByCategory from '../ShopByCategory';
import ToyCard from '../../shared/ToyCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
    <>
      <Helmet>
        <title>Toys-zone | Home </title>
      </Helmet>
      <PageWrapper
        pageTitle='Update Profile'
        PageLink='Home/Update Profile '>
        <div className='mb-12'>
          <Hero />
          <div>
            {/* you may like */}
            {/* <div data-aos='fade-up'>
              <ToysYouMayLike />
            </div> */}

            {/* new arivel  */}
            <NewArrival />
            {/*shop by category */}
            <ShopByCategory />

            {/*gallery  */}

            <Gallery />

            {/* trending */}
            <Trending />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;
