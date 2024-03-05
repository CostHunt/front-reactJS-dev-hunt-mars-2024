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

    const [token, setToken] = useState(lastToken)

    const login = async (username, password) => {
        const data = {
            username: username,
            password: password
        }
        const resp = await _http.post('/auth/login', JSON.stringify(data))
        return resp.data.token
    }

    const logout = () => {
        setToken(null)
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
    }

    const value = {
        token,
        setToken,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
