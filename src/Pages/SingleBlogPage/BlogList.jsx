import { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/Bs';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/blogs-list`)
      .then((res) => res.json())
      .then((data) => setBlogList(data));
  }, []);
  console.log(blogList);

  return (
    <div className='w-full  bg-gray-100 p-6 rounded-xl'>
      <h1 className='text-2xl font-bold my-3'>Other Blogs</h1>
      {blogList?.map((x) => (
        <div
          className='font-semibold py-3 px-3 bg-white my-4 flex justify-between items-center hover:bg-indigo-100 hover:text-indigo-400'
          key={x._id}>
          <h1>{x.title}</h1>
          <Link
            to={`/blogs/${x.slug}`}
            className='font-bold hover:bg-indigo-300 hover:text-indigo-600  rounded-full p-3  '>
            <BsArrowRight />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
