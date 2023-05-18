import PageWrapper from '../../Layout/PageWrapper';

import RightSideComp from './RightSideComp';
import LeftSideComponent from '../shared/LeftSideComponent';

const Register = () => {
  return (
    <PageWrapper>
      <main className='w-full flex'>
        <LeftSideComponent />
        <RightSideComp />
      </main>
    </PageWrapper>
  );
};

export default Register;
