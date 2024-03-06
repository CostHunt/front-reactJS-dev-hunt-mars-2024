import React, { createContext, useContext, useState } from 'react'
import { _http } from "../utils/http";

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

    const lastToken = (localStorage.token != null) ?
        localStorage.token :
        (sessionStorage.token != null) ? sessionStorage.token : null

    const lastUser = (localStorage.user != null) ?
        localStorage.user :
        (sessionStorage.user != null) ? sessionStorage.user : null

    const [token, setToken] = useState(lastToken)
    const [user, setUser] = (lastUser != null) ? useState(JSON.parse(lastUser)) : useState(null)

    const logout = () => {
        setToken(null)
        setUser(null)
        localStorage.clear()
        sessionStorage.clear()
    }

    const value = {
        token,
        setToken,
        logout,
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
