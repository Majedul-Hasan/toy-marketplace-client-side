import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  //   const from = location.state?.from?.pathname || "/";
  //   console.log(from);

  if (isLoading) {
    return <Spinner />;
  }
  if (!user) {
    return children;
  } else {
    return (
      <Navigate
        to='/'
        state={{ from: location }}
        replace
      />
    );
  }
};

export default PublicRoute;
