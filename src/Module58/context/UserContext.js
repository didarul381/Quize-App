import React, { createContext, useEffect, useState } from 'react';

import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../Firebase/firebase.config'
 export const AuthContext=createContext();

 //const auth=getAuth(app);
 const auth=getAuth(app)

const UserContext = ({children}) => {
    const[user,setUser]=useState({});
    const [loding,setLoding]=useState(true);
    const googleProvider=new GoogleAuthProvider();
   
    const createUser=(email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password)
    }

      const singIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
      }

   useEffect(()=>{
    const unSubscribe=  onAuthStateChanged(auth,currentUser=>{

    setUser(currentUser);
    setLoding(false);
    console.log(currentUser);
   })
   
    return ()=>{
  unSubscribe();
    }

   },[])

     const logOut=()=>{
     return signOut(auth)

     }
     const singInWithGoggle=()=>{
      return signInWithPopup(auth, googleProvider);
     }


    const authInfo={user,loding,createUser,singIn, logOut,singInWithGoggle};
    return (
       <AuthContext.Provider value={authInfo}>
         {children}
       </AuthContext.Provider>
        
    );
};

export default UserContext;