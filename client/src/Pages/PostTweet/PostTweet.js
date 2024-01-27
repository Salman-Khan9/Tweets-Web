import axios from 'axios'
import "../PostTweet/PostTweet.css"
import React, {  useState } from 'react'
const PostTweet = () => {
const initialvalue={
  title:"",
  description:"",
  username:"",
}
const [tweet, settweet] = useState(initialvalue)
const {title,description,username} = tweet 
const onchange = (e)=>{
  e.preventDefault()
  const {name,value}=e.target
  settweet({...tweet, [name]:value})


}
const data ={
  title,
  description,
  username
}

  const onclicksubmit =()=>{
  axios.post("http://localhost:2000/post",data).then(()=>{
    console.log("data sent to backend")
  })}

  return (
    <div className='post'>
      <div >
      <form>
      <div className='fields'>
       <label>Title:</label> <input className='inputs' name='title'  value={title} placeholder='Title' onChange={onchange}  />
      <label>Description:</label> <input className='inputs' name='description' value={description} placeholder='Description' onChange={onchange}  />
      <label>User-Name:</label> <input className='inputs' name='username' value={username} placeholder='Your Name' onChange={onchange}  />
      <button className='inputs' onClick={onclicksubmit}>Submit</button></div></form>
        
      </div>
    </div>
  )
}

export default PostTweet