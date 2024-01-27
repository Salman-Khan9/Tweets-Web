import axios from 'axios'
import "../PostTweet/PostTweet.css"
import React, {  useState } from 'react'
import { NavLink } from 'react-router-dom'
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
        <div ><NavLink to="/">Home</NavLink></div>
      <div className='fields'> <input className='inputs' name='title'  value={title} placeholder='Title' onChange={onchange}  />
        <input className='inputs' name='description' value={description} placeholder='Description' onChange={onchange}  />
        <input className='inputs' name='username' value={username} placeholder='Your Name' onChange={onchange}  />
        <button className='inputs' onClick={onclicksubmit}>Submit</button></div>
      </div>
    </div>
  )
}

export default PostTweet