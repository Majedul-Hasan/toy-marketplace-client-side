import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../../Layout/PageWrapper';
import Hero from '../../shared/Hero';
import { Helmet } from 'react-helmet';

const Home = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
    <PageWrapper>
      <Helmet>
        <title>Toys-zone | Home </title>
      </Helmet>
      <Hero />
    </PageWrapper>
  );
};

export default Home;
