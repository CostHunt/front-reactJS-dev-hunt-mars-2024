import "./feed.css"
import Share from "../share/share"
import Post from "../post/Post"
import { Posts } from "../../dummyData"
import { useEffect, useState } from "react"
import { getAllPosts } from "../../utils/post"
import { useAuth } from "../../providers/AuthProvider"

// {
//   id:1,
//   desc:"Salama aby ity ndray ny EDT-tsika",
//   photo:"assets/other/edt.jpg",
//   date:"A l'instant",
//   userId:1,
//   like:32,
//   comment:9
// },

function Feed() {

  const [posts, setPosts] = useState()

  const user = useAuth()

  useEffect(() => {
    getAllPosts(user.token).then((resp) => {
      setPosts(resp.data)
    })
  }, [])

  return (
    <div className="feed">
      <div className="feedWrapper">
<<<<<<< HEAD
 
        <Share/>
        {Posts.map((p,i)=>(
          <Post key={i} post={p}/>
        ))}
=======
        <Share setPosts={setPosts} />
        {(posts) ? posts.map((p, i) => (
          <Post key={i} post={p} />
        )) : null}
>>>>>>> 6aef658cab3917af16bff9da303237095eda4036
      </div>
    </div>
  )
}

export default Feed