import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword ,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogin = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const register = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = (provider) => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signInWithGithub = (provider) => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    auth,
    isLoading,
    setUser,
    handleLogin,
    register,
    logOut,
    signInWithGoogle,
    signInWithGithub,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
