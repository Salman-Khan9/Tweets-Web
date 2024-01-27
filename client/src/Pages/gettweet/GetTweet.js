import React from 'react'
import "../gettweet/gettweet.css"
import { useEffect,useState } from 'react';
import axios from "axios"
import { Link, useNavigate, } from 'react-router-dom';
const GetTweet = () => {
    const [listoftweets, setlistoftweets] = useState([])

  useEffect(() => {
   axios.get("http://localhost:2000/get").then((res)=>{
    setlistoftweets(res.data)

  })
  }, [])
  const navigate = useNavigate()
 
  return (
    <div>
      <div><Link to="/Tweet">Create Tweet</Link> </div>
       {listoftweets.map((value,key)=>{
        return <div className='tweet' key={key} onClick={()=>{ navigate(`/posts/${value.id}`)}}> <div className='title' > {value.title}</div> <div className='description'> {value.description}</div>
        <div className='username'> {value.username}</div> </div>
      })}</div>
  )
}

export default GetTweet