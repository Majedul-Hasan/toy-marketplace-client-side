import PageWrapper from '../../Layout/PageWrapper';
import LeftSideComponent from './LeftSideComponent';
import RightSideComp from './RightSideComp';

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
