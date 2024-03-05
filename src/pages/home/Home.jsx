import React from 'react'
import { useAuth } from '../../providers/AuthProvider'

export default function Home() {
    const user = useAuth()
    return (
        <div>
            Test Home
            <button onClick={user.logout}> logout </button>
        </div>
    )
}
