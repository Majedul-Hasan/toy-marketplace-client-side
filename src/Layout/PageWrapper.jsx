import PropTypes from 'prop-types';

const PageWrapper = ({ children }) => {
  return (
    <div className='w-full md:w-11/12 lg:w-9/12 px-3 my-10 py-8 flex justify-center items-center mx-auto'>
      {children}
    </div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper;
