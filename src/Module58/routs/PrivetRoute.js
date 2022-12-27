import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivetRoute = ({children}) => {

       const {user,loding}=useContext(AuthContext);

         if(loding){
            return<div>Loding..</div>
         }
       if(user && user.uid){
        return children
       }
     

    return <Navigate to='/login'></Navigate>
};

export default PrivetRoute;