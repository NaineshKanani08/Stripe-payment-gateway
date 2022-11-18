import React from 'react'
import { Outlet } from "react-router-dom"
import { useAuth } from '../context/AuthProvider';

const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth()

    return (isLoading ? <p>Loading...</p> : isAuthenticated ? <Outlet /> : <p>Please login to continue</p>)

}

export default ProtectedRoute