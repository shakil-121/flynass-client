import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import axios from "axios";
import { baseUrl } from "../config/api";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
  const [user, setUsers] = useState([]);
  const [loadding, setLoadding] = useState(true);

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
        setUsers(currentuser) 

        //   // get and set token
        if(currentuser)
        {
          axios.post(`${baseUrl}/jwt`,{email:currentuser.email})
          .then(data=>{
            // console.log(data.data.token);
            localStorage.setItem('access-token', data.data.token)
            setLoadding(false);
          })
        }
        else{
          localStorage.removeItem('access-token')
        }
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
    passwordReset,
    loadding
  };
  return <AuthContext.Provider value={authinfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
