import "./feed.css"
import Share from "../share/share" 
import Post from "../post/post"
import { Posts } from "../../dummyData"

function feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
 
        <Share/>
        {Posts.map((p,i)=>(
          <Post key={i} post={p}/>
        ))}
      </div>
    </div>
  )
}

export default feed