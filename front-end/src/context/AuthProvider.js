import React, { createContext, useContext, useMemo } from 'react'
import { useAuth0 } from "@auth0/auth0-react"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    const value = useMemo(
        () => ({
            user,
            isAuthenticated,
            logout,
            isLoading
        }),
        [user, isAuthenticated,
            logout,
            isLoading],
    )
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)
