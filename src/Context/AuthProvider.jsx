import React, { useState, useEffect } from 'react'
import { GetLocalStorage, SetLocalStorage } from '../Utils/LocalStorage';

export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    useEffect(() => {
        // Only seed default data if localStorage is empty (first time)
        const existing = localStorage.getItem('employees');
        if (!existing) {
            SetLocalStorage();
        }
        const { employees, admin } = GetLocalStorage();
        setUserData({ employees, admin });
    }, []);

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider