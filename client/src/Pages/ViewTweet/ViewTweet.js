import axios from 'axios'
import "../ViewTweet/ViewTweet.css"
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
const ViewTweet = () => {
  const {id} =  useParams()
  const [tweet, settweet] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:2000/posts/${id}`).then((res)=>{
settweet(res.data)
console.log(res.data)
  } )
  }, [id])
  
  
  return (
    <div className='singletweet'>
    <div className='singletweetbody'>
        <div className='singletitle' >{tweet.title}</div>
        <div className='singledescription' >{tweet.description}</div>
        <div className='singleusername' >{tweet.username}</div>
    </div></div>
  )
}

export default ViewTweet