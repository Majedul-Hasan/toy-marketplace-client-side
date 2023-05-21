import PageWrapper from '../../Layout/PageWrapper';

import RightSideComp from './RightSideComp';
import LeftSideComponent from '../shared/LeftSideComponent';
import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Toys-zone | Login </title>
      </Helmet>
      <PageWrapper
        pageTitle='Login'
        PageLink='Home/Login'
        imgLink='imgLink'>
        <main className='w-full flex'>
          <LeftSideComponent />
          <RightSideComp />
        </main>
      </PageWrapper>
    </>
  );
};

export default Login;
