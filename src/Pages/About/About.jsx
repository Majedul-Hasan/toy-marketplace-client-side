import PageWrapper from '../../Layout/PageWrapper';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Toys-zone | about us </title>
      </Helmet>
      <PageWrapper
        pageTitle='About Us'
        PageLink='Home/about'>
        <div>About</div>
      </PageWrapper>
    </>
  );
};

export default About;
