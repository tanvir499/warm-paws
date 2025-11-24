import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

  const registerWithEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
    })

        return () => {
            unsubscribe();
        }
  },[])


  const authData = {
    registerWithEmailPassword,
    setUser,
    user,
  };


  return <AuthContext value={authData}>
     {children}
  </AuthContext>
};

export default AuthProvider;
