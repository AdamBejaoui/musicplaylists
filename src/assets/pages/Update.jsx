import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'

const Update=()=> {
  const [song, setSong] = useState({
    title:"",
    desc:"",
    cover:"",

  })

const navigate = useNavigate()
const location = useLocation()

const songId = location.pathname.split("/")[2]

 const handleChange = (e) => {
  const name = e.target.name
  const value = e.target.value
  setSong(prev=>({...prev, [name]:value}))
 }
console.log(song)

 const handleClick = async (e) => {
  e.preventDefault()
try{
await axios.put("http://localhost:3001/songs/"+songId,song)
navigate("/home")
}catch(err){
console.log(err)
}
 }
  return (
    <div className='form'>
      <h1>Update song</h1>
      <input type="text" placeholder='update title' onChange={handleChange} name='title'/>
      <input type="text" placeholder='update singer' onChange={handleChange} name='desc'/>
      <input type="text" placeholder='update cover' onChange={handleChange} name='cover'/>
      <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update