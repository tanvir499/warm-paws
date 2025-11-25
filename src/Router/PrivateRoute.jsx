import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import { HashLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)

    const location = useLocation()
      console.log(location);

    if(loading){
        return <p className='flex justify-center items-center'><HashLoader  color="#049347" /></p>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={"/Login"}></Navigate>
};

export default PrivateRoute;