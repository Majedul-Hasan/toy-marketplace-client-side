import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../Layout/PageWrapper';
import { Helmet } from 'react-helmet';

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
        PageLink='Home/all-toys '>
        <div>AllToys</div>
      </PageWrapper>
    </>
  );
};

export default AllToys;
