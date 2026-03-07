import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * PrivateRoute — guards a route by checking localStorage for a valid session.
 * @param {string} allowedRole - 'Admin' | 'Employee'
 * @param {React.ReactNode} children
 */
const PrivateRoute = ({ children, allowedRole }) => {
    const raw = localStorage.getItem('loggedInUser');

    if (!raw) {
        // No session at all → back to login
        return <Navigate to='/login' replace />;
    }

    try {
        const { role } = JSON.parse(raw);
        if (role !== allowedRole) {
            // Logged in but wrong role → redirect to their own dashboard
            return <Navigate to={role === 'Admin' ? '/admin' : '/employee'} replace />;
        }
        return children;
    } catch {
        // Corrupted session data
        localStorage.removeItem('loggedInUser');
        return <Navigate to='/login' replace />;
    }
};

export default PrivateRoute;
