import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import PageWrapper from '../../Layout/PageWrapper';
import Banner from '../shared/Banner';

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  return (
    <PageWrapper
      pageTitle='Update Profile'
      PageLink='Home/Update Profile '>
      <div>
        <div>
          <p>{user?.displayName}</p>
          <p>{user?.email}</p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default UpdateProfile;
