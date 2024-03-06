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

    const lastUser = (localStorage.account != null) ?
        localStorage.account :
        (sessionStorage.account != null) ? sessionStorage.account : null

    const [token, setToken] = useState(lastToken)
    const [user, setUser] = useState(lastUser)

    const logout = () => {
        setToken(null)
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
