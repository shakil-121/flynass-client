import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
  const [user, setUsers] = useState([]);
  const [loadding, setLoadding] = useState(true);

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
        setUsers(currentuser)
    })

    return ()=>{
        unsubscribe();
    }
},[])

const createAccount=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  
  const login=(email,password)=>{
     return signInWithEmailAndPassword(auth,email,password)
  }
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logout=()=>{
    return signOut(auth)
  }
  
  const googleLogin=()=>{
    return signInWithPopup(auth,googleProvider)
  }

  const authinfo = {
    user,
    createAccount,
    login,
    logout,
    googleLogin,
    passwordReset
  };
  return <AuthContext.Provider value={authinfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
