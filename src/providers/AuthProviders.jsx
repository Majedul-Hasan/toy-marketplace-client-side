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
    const unsubscribe = onAuthStateChanged(AUTH, (loggedonUser) => {
      // console.log(loggedonUser);
      setUser(loggedonUser);
      setIsLoading(false);
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
