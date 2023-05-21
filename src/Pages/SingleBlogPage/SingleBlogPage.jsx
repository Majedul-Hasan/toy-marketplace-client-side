import { useLoaderData } from 'react-router-dom';
import PageWrapper from '../../Layout/PageWrapper';
import { Helmet } from 'react-helmet';
import BlogList from './BlogList';
import './singleBlog.style.css';

const SingleBlogPage = () => {
  const loadedBlog = useLoaderData();
  const {
    title,
    photo,

    categories,
    tags,
    body,
    mtitle,
  } = loadedBlog;
  console.log(loadedBlog);
  return (
    <>
      <Helmet>
        <title>{mtitle}</title>
      </Helmet>
      <PageWrapper
        PageLink='Home/blogs/detail'
        imgLink={photo.data}>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='flex-auto col-span-2 blog'>
            <div className='mb-3'>
              <h2 className='text-2xl font-semibold'>{title} </h2>
            </div>

            <div className='flex gap-3 my-5 flex-wrap'>
              {categories?.map((x, i) => (
                <h3
                  key={i}
                  className='py-2 px-4  bg-sky-200'>
                  {x}
                </h3>
              ))}

              {tags?.map((tag, i) => (
                <h3
                  key={i}
                  className='py-2 px-4  bg-indigo-200 text-indigo-500'>
                  {tag}
                </h3>
              ))}
            </div>
            <div
              className='my-2'
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </div>
          <div className='w-full md:col-span-1'>
            <BlogList />
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default SingleBlogPage;
