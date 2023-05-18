import { Link } from 'react-router-dom';
import SocialLogin2 from '../shared/socialLiging/SocialLogin2';

const RightSideComp = () => {
  return (
    <div className='flex-1 flex items-start justify-center '>
      <div className='w-full max-w-md space-y-6 px-4 bg-white text-gray-600 py-8'>
        <div className=''>
          <div className='mt-5 space-y-2'>
            <h3 className='text-gray-800 text-2xl font-bold sm:text-3xl'>
              Sign up
            </h3>
            <p className=''>
              Already have an account?{' '}
              <Link
                to='/login'
                className='font-medium text-indigo-600 hover:text-indigo-500'>
                Log in
              </Link>
            </p>
          </div>
        </div>
        <SocialLogin2 />

        <div className='relative'>
          <span className='block w-full h-px bg-gray-300'></span>
          <p className='inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto'>
            Or continue with
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className='space-y-5'>
          <div>
            <label className='font-medium'>Name</label>
            <input
              type='text'
              required
              name='name'
              className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
            />
          </div>
          <div>
            <label className='font-medium'>Photo url</label>
            <input
              type='text'
              required
              name='photo'
              className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
            />
          </div>
          <div>
            <label className='font-medium'>Email</label>
            <input
              type='email'
              required
              name='email'
              className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
            />
          </div>
          <div>
            <label className='font-medium'>Password</label>
            <input
              type='password'
              required
              name='password'
              className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
            />
          </div>
          <div>
            <label className='font-medium'>confirm Password</label>
            <input
              type='password'
              required
              name='confirm'
              className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
            />
          </div>
          <button className='w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150'>
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RightSideComp;
