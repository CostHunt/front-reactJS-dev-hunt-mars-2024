import React from 'react'
import { useAuth } from './providers/AuthProvider'
import { Navigate, Outlet } from 'react-router-dom/dist'

export function PrivateRoute() {
    const user = useAuth()
    if (!user.token) return <Navigate to="/login" />
    return <Outlet />
}

export function PrivateRouteReverse() {
    const user = useAuth()
    if (user.token) return <Navigate to="/" />
    return <Outlet />
}