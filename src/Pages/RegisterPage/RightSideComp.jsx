import { Link, useNavigate } from 'react-router-dom';
import SocialLogin2 from '../shared/SocialLogin/SocialLogin2';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const RightSideComp = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMsg(null);
    const formInput = e.target;
    const name = formInput.name.value;
    const photoUrl = formInput.photo.value;
    const email = formInput.email.value;
    const password = formInput.password.value;
    const confirm = formInput.confirm.value;

    // console.table({ name, email, password, photoUrl, confirm });
    if (password !== confirm) {
      setErrorMsg('password not matched');
      return;
    }
    if (password.length < 6) {
      setErrorMsg('password should be at least 6 characters');
      return;
    }
    if (
      !email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setErrorMsg('please enter a valid email address');
      return;
    }
    // console.log(errorMsg);
    createUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        // console.log(loggedUser);
        setUser(loggedUser);
        updateUser(name, photoUrl);
        formInput.reset();
        navigate('/');
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

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
          onSubmit={handleRegister}
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
              defaultValue='https://cdn-icons-png.flaticon.com/512/149/149071.png'
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
          {errorMsg && <p className='text-md text-red-400'> {errorMsg}</p>}
          <button className='w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150'>
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RightSideComp;
