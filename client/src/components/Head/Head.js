import React from 'react'
import {  NavLink } from 'react-router-dom'
import "../Head/Head.css"
const Head = () => {
  return (
    <div>
      <div className='menu'> <NavLink className="home" to="/">Home</NavLink>
<NavLink className="createtweet" to="/Tweet">Add-Tweet</NavLink></div>     
    </div>
  )
}

export default Head