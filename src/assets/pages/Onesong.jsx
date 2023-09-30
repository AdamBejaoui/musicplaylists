import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

const handleDelete = async (id) => {
    try{
        await axios.delete(`http://localhost:3001/songs/${id}`)
        console.log(id)
        window.location.reload()

    }catch(err){
        console.log(err)
    }
}

const Onesong =({song})=> {
    return (
        <div className="song-detail">
          <h2>{song.title}</h2>
          <img src={song.cover} alt={song.title} />
          <p>{song.desc}</p>
          <button className='delete' onClick={()=>handleDelete(song.id)}>Delete</button>
          <button className='update'><Link to="/update">Update</Link></button>
        </div>
      );
    };

export default Onesong