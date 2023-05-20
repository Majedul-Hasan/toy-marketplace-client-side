import PageWrapper from '../../Layout/PageWrapper';
import { Helmet } from 'react-helmet';

const MyToys = () => {
  return (
    <>
      <Helmet>
        <title>Toys-zone | MyToys </title>
      </Helmet>
      <PageWrapper
        pageTitle='MyToys'
        PageLink='Home/MyToys '>
        <div>MyToys</div>
      </PageWrapper>
    </>
  );
};

export default MyToys;
