import React, { useState, useEffect } from 'react'
import { GetLocalStorage } from '../Utils/LocalStorage';

export const AuthContext = React.createContext();
const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const { employees, admin } = GetLocalStorage();
        setUserData({ employees, admin });

    }, []);

    return (
        <AuthContext.Provider value={ userData }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider