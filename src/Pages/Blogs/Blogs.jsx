import PageWrapper from '../../Layout/PageWrapper';
import { Helmet } from 'react-helmet';

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Toys-zone | Blogs </title>
      </Helmet>
      <PageWrapper
        pageTitle='Blogs'
        PageLink='Home/blogs'>
        <div>Blogs</div>
      </PageWrapper>
    </>
  );
};

export default Blogs;
