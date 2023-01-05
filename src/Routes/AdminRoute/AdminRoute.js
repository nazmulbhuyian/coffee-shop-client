import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import UseAdmin from '../../Hooks/UseAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminloading] = UseAdmin(user?.email)

    const location = useLocation()

    if (loading || isAdminloading) {
        return <progress className="progress w-56 lg:ml-96 lg:mt-96"></progress>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;