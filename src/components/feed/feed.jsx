import "./feed.css"
import Share from "../share/share"
import Post from "../post/Post"
import { Posts } from "../../dummyData"
import { useEffect, useState } from "react"
import { getAllPosts } from "../../utils/post"
import { useAuth } from "../../providers/AuthProvider"
import { Skeleton, Stack } from "@mui/material"


function Feed() {

  const [posts, setPosts] = useState()

  const [loading, setLoading] = useState(false)

  const user = useAuth()

  useEffect(() => {
    setLoading(true)
    getAllPosts(user.token).then((resp) => {
      setLoading(false)
      setPosts(resp.data)
    }).catch(() => {
      setLoading(false)
    })
  }, [])

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(loading) ? <div>
          {/* <Share setPosts={setPosts} /> */}
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="circular" width={50} height={50} />
            <Skeleton variant="rectangular" width={700} height={60} />
            <Skeleton variant="rounded" width={700} height={60} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="circular" width={50} height={50} />
            <Skeleton variant="rectangular" height={60} />
            <Skeleton variant="rounded" height={60} />
          </Stack>
        </div> :
          <>
            <Share setPosts={setPosts} />
            {(posts) ? posts.map((p, i) => (
              <Post key={i} post={p} />
            )) : null}
          </>
        }
      </div>
    </div>
  )
}

export default Feed