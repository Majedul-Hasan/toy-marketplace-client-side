import PageWrapper from '../../Layout/PageWrapper';
import LeftSideComponent from '../shared/LeftSideComponent';

import RightSideComp from './RightSideComp';
import { Helmet } from 'react-helmet';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Toys-zone | Register </title>
      </Helmet>
      <PageWrapper
        pageTitle='Register new user'
        PageLink='Home/Register'>
        <main className='w-full flex'>
          <LeftSideComponent />
          <RightSideComp />
        </main>
      </PageWrapper>
    </>
  );
};

export default Register;
