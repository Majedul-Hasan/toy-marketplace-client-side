import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const AUTH = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const signInWithPopupForSocials = (providerName) => {
    return signInWithPopup(AUTH, providerName);
  };
  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(AUTH, email, password);
  };
  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(AUTH, email, password);
  };
  const updateUser = (displayName, photoURL) => {
    return updateProfile(AUTH.currentUser, { displayName, photoURL });
  };

  const logoutUser = () => {
    return signOut(AUTH);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(AUTH, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setIsLoading(false);
      if (currentUser && currentUser.email) {

        const loggedUser = {
          email: currentUser.email,
        };
        fetch(`${import.meta.env.VITE_API}/jwt`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('jwt res = ', data);
            localStorage.setItem('toy-zone-token', data.token);
          });
      } else {
        localStorage.removeItem('toy-zone-token');
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    isLoading,
    signInWithPopupForSocials,
    setUser,
    createUser,
    updateUser,
    loginUser,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProviders.propTypes = {
  children: PropTypes.node,
};

export default AuthProviders;
