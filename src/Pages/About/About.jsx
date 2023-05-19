import PageWrapper from '../../Layout/PageWrapper';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Toys-zone | about </title>
      </Helmet>
      <div>About</div>
    </PageWrapper>
  );
};

export default About;
