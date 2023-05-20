import PageWrapper from '../../Layout/PageWrapper';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Toys-zone | about </title>
      </Helmet>
      <PageWrapper
        pageTitle='About'
        PageLink='Home/about'>
        <div>About</div>
      </PageWrapper>
    </>
  );
};

export default About;
