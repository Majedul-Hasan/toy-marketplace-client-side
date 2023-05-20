import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import PageWrapper from '../../Layout/PageWrapper';
import Banner from '../shared/Banner';

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();
  };
  return (
    <PageWrapper
      pageTitle='Update Profile'
      PageLink='Home/Update Profile '>
      <div>
        <div>
          <p>{user?.displayName}</p>
          <p>{user?.email}</p>
        </div>
        <form onSubmit={handleUpdate}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='name'
                defaultValue={user?.displayName}
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>email</span>
              </label>
              <input
                type='email'
                name='picture'
                defaultValue={user?.email}
                className='input input-bordered'
              />
            </div>
            <div className='form-control col-span-2'>
              <label className='label'>
                <span className='label-text'>Photo URL</span>
              </label>
              <input
                type='text'
                name='picture'
                defaultValue={user?.photoURL}
                className='input input-bordered'
              />
            </div>
          </div>
          <div className='form-control mt-6'>
            <input
              className='btn btn-primary btn-block'
              type='submit'
              value='update profile'
            />
          </div>
        </form>
      </div>
    </PageWrapper>
  );
};

export default UpdateProfile;
