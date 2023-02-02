import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
 

    return children
    return (
        <div>
            <h2>ok</h2>
        </div>
    );
};

export default PrivateRoute;