import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add=()=> {
  const [song, setSong] = useState({
    title:"",
    desc:"",
    cover:"",

  })

const navigate = useNavigate()

 const handleChange = (e) => {
  const name = e.target.name
  const value = e.target.value
  setSong(prev=>({...prev, [name]:value}))
 }
console.log(song)

 const handleClick = async (e) => {
  e.preventDefault()
try{
await axios.post("http://localhost:3001/songs",song)
navigate("/home")
}catch(err){
console.log(err)
}
 }
  return (
    <div className='form'>
      <h1>Add new song</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title'/>
      <input type="text" placeholder='desc' onChange={handleChange} name='desc'/>
      <input type="text" placeholder='cover' onChange={handleChange} name='cover'/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add