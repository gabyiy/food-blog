import React, { useContext, useState } from 'react'
import { Store } from '../../Store';


const ComentsSection = ({_id}) => {

  const [comments,setCommets]=useState([1,2,3,4])
  const [comment,setComment]=useState("")

const {state,dispatch}=useContext(Store)
const {userInfo}=state

console.log(userInfo);
  const handleClick=()=>{
const finalComment = `${userInfo.name}: ${comment}`
  }
  return (
    <div>
    <div>
    <h1>Comments</h1>
      {comments.map((comment)=>(
        <h3>{comment}</h3>
      ))}
    </div>
    <div>
      <h2>Write a comment</h2>
      <textarea value={comment} onChange={(e)=>setComment(e.target.value)}/>
      <button disabled={!comment} onClick={handleClick}>Comment</button>
    </div>
    </div>
  )
}

export default ComentsSection