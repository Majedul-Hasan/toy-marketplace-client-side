import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../Layout/PageWrapper';
import { Helmet } from 'react-helmet';
import ToyCard from '../shared/ToyCard';

const AllToys = () => {
  const loadedToys = useLoaderData();
  console.log(loadedToys);
  return (
    <>
      <Helmet>
        <title>Toys-zone | All toys </title>
      </Helmet>
      <PageWrapper
        pageTitle='All toys'
        PageLink='Home/all-toys'
        imgLink='https://images.unsplash.com/photo-1512308439392-3c1bec71099e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 '>
            {loadedToys?.map((toy) => (
              <ToyCard
                key={toy._id}
                toy={toy}
              />
            ))}
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default AllToys;
