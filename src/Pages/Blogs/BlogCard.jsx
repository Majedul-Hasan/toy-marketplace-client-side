import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog, idx }) => {
  const { title, photo, excerpt, categories, tags, slug } = blog;
  return (
    <div
      className={`card w-full card-side bg-sky-100 items-center  gap-4 shadow-xl my-8 p-8 ${
        idx % 2 && 'flex-row-reverse'
      } `}>
      <div className='w-4/12'>
        <img
          className='block w-11/12'
          src={photo.data}
          alt=''
        />
      </div>
      <div className='card-body w-1/2'>
        <h2 className='card-title my-2'>{title}</h2>
        <div className='flex gap-3 flex-wrap'>
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
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />

        {/* <div className=''>{excerpt}</div> */}

        <div
          className={`card-actions ${
            idx % 2 ? 'justify-start' : 'justify-end'
          } `}>
          <Link
            to={`/blogs/${slug}`}
            className='btn btn-primary'>
            read more
          </Link>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
  idx: PropTypes.number,
};

export default BlogCard;
