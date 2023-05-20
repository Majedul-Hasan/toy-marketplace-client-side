import PropTypes from 'prop-types';
import Banner from '../Pages/shared/Banner';
import { useLocation } from 'react-router-dom';

const PageWrapper = ({ children, pageTitle, PageLink }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      {pathname !== '/' && (
        <Banner
          pageTitle={pageTitle}
          PageLink={PageLink}
        />
      )}

      <div className='w-full md:w-11/12 lg:w-9/12 px-3 mt-8 pt-8 flex justify-center items-center mx-auto'>
        {children}
      </div>
    </div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string,
  PageLink: PropTypes.string,
};

export default PageWrapper;
