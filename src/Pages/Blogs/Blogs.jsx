import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../Layout/PageWrapper';
import { Helmet } from 'react-helmet';
import BlogCard from './BlogCard';

const Blogs = () => {
  const loadedBlogs = useLoaderData();
  console.log(loadedBlogs);
  return (
    <>
      <Helmet>
        <title>Toys-zone | Blogs </title>
      </Helmet>
      <PageWrapper
        pageTitle='Blogs'
        PageLink='Home/blogs'>
        <div>
          <div>
            <h2 className='text-3xl font-bold underline my-5 text-center'>
              Programming blogs
            </h2>
          </div>
          <div>
            {loadedBlogs?.map((blog) => (
              <BlogCard
                key={blog._id}
                blog={blog}
              />
            ))}
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Blogs;
