import PageWrapper from '../../Layout/PageWrapper';

import RightSideComp from './RightSideComp';
import LeftSideComponent from '../shared/LeftSideComponent';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Toys-zone | Login </title>
      </Helmet>
      <main className='w-full flex'>
        <LeftSideComponent />
        <RightSideComp />
      </main>
    </PageWrapper>
  );
};

export default Register;
