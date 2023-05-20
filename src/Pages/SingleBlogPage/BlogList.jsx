import { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/Bs';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/blog-list`)
      .then((res) => res.json())
      .then((data) => setBlogList(data));
  }, []);
  console.log(blogList);

  return (
    <div className='w-full  bg-gray-100 p-6 rounded-xl'>
      <h1 className='text-2xl font-bold my-3'>Other Blogs</h1>
      {blogList?.map((x) => (
        <div
          className='font-semibold py-3 px-3 bg-white my-4 flex justify-between items-center hover:bg-red-500 hover:text-white'
          key={x._id}>
          <h1>{x.title}</h1>
          <Link
            to={`/service-detail/${x._id}`}
            className='font-bold hover:bg-yellow-200 hover:text-red-400  rounded-full p-3  '>
            <BsArrowRight />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
