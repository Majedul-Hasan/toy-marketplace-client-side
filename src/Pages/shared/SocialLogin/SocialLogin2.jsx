import { useContext } from 'react';
import GitHubIcon from '../../../components/icons/GitHubIcon';
import GoogleLogo from '../../../components/icons/GoogleLogo';
import TwitterIcon from '../../../components/icons/TwitterIcon';
import { AuthContext } from '../../../providers/AuthProviders';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SocialLogin2 = ({ from }) => {
  const { signInWithPopupForSocials, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const GoogleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const stateLocation = from || '/';

  const handleSocialAuth = (provider) => {
    signInWithPopupForSocials(provider)
      .then((res) => {
        const currentUser = res.user;
        // console.log(currentUser);
        setUser(currentUser);
        navigate(stateLocation, { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='grid grid-cols-3 gap-x-3'>
      <button
        onClick={() => handleSocialAuth(GoogleProvider)}
        className='flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100'>
        <GoogleLogo />
      </button>
      <button
        className='flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100'
        disabled>
        <TwitterIcon />
      </button>
      <button
        onClick={() => handleSocialAuth(githubProvider)}
        className='flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100'>
        <GitHubIcon />
      </button>
    </div>
  );
};

SocialLogin2.propTypes = {
  from: PropTypes.string,
};

export default SocialLogin2;
