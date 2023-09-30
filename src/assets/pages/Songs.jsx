import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Onesong from './Onesong'

const Songs =()=> {
const [songs, setSongs] = useState([])
const [oneSong, setOneSong] = useState(null);
const [isSongVisible, setIsSongVisible] = useState(false)


useEffect(() => {
   const fetchAllSongs = async () => {
    try {
const res = await axios.get("http://localhost:3001/songs")
setSongs(res.data)
    }catch(err) {
        console.log(err)    }
   }
   fetchAllSongs()
},[])


 const handleSongSelect = (song) => {
    if (oneSong === song) {
    
      setOneSong(null);
      setIsSongVisible(false);
    } else {
        setOneSong(song);
      setIsSongVisible(true);
    }
  };
  


    return <div>
        <button className='logout'><Link to="/">logout</Link></button>
    <h1 onClick={() => setIsDetailVisible(!isSongVisible)}>Songs+ Playlist</h1>
    <p>Welcome,</p>
        <div className="songs">
        
            {songs.map(song=>(
                <div className="song" key={song.id} onClick={() => handleSongSelect(song)}>
                    <img src={song.cover}></img>
                    <h2>{song.title}</h2>
                    <p>{song.desc}</p>
                </div>

            ))}
        </div>
        <button><Link to="/add">Add new song</Link></button>
        {isSongVisible && oneSong && <Onesong song={oneSong} />}
    </div>
    
        }

export default Songs