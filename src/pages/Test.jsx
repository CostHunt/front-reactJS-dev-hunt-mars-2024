import React, { useEffect, useState } from 'react'
import { useAuth } from '../providers/AuthProvider'
import { createNewPost, getAllPosts, getPostsbyGroup } from '../utils/post'

export default function Test() {
    const user = useAuth()

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        // createNewPost(user.token, "Bonjour les mecs", "1b2621e0-a558-4a65-9f5f-a060617af55d", user.user.id).then((resp) => {
        // console.log("success")
        // }).catch(() => {
        // })
    }, [])

    return (
        <div>
        </div>
    )
}
