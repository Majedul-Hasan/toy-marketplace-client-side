import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../../Layout/PageWrapper';
import Hero from '../../shared/Hero';
import { Helmet } from 'react-helmet';
import ToysYouMayLike from '../ToysYouMayLike';
import NewArivel from '../NewArivel';
import Trending from '../Trending';
import Gallery from '../Gallery';
import ShopByCategory from '../ShopByCategory';
import ToyCard from '../../shared/ToyCard';

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
        <div>
          <Hero />
          <div>
            {/* you may like */}
            <ToysYouMayLike />
            {/* new arivel  */}
            <NewArivel />
            {/*shop by category */}
            <ShopByCategory />

            {/*gallery  */}
            <Gallery />

            {/* trending */}
            <Trending />

            <div>
              <h2 className='font-bold text-3xl text-center mb-10 underline'>
                All Toys
              </h2>
              <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-5 '>
                {loadedData?.map((toy) => (
                  <ToyCard
                    key={toy._id}
                    toy={toy}
                  />
                ))}
              </div>
              {/* pagination */}
              <div className='pagination my-5'>
                {/* <div className='btn-group'>
                {pageNumbers.map((number) => (
                  <button
                    onClick={() => setPage(number)}
                    key={number}
                    className={`btn btn-sm ${
                      page === number ? 'bg-violet-400' : ''
                    }`}>
                    {number + 1}
                  </button>
                ))}
              </div> */}
                {/* <select
                value={itemsPerPage}
                onChange={handleSelectPageChange}>
                {options.map((option) => (
                  <option
                    key={option}
                    value={option}>
                    {option}
                  </option>
                ))}
              </select> */}
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;
