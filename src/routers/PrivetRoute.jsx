import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';

const PrivetRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();
  console.log(isLoading);

  if (isLoading) {
    console.log('loading...');
    return <Spinner />;
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate
        to='/login'
        state={{ from: location }}
        replace
      />
    );
  }
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
