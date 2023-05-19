import PageWrapper from '../../Layout/PageWrapper';
import LeftSideComponent from '../shared/LeftSideComponent';

import RightSideComp from './RightSideComp';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Toys-zone | Register </title>
      </Helmet>
      <main className='w-full flex'>
        <LeftSideComponent />
        <RightSideComp />
      </main>
    </PageWrapper>
  );
};

export default Register;
