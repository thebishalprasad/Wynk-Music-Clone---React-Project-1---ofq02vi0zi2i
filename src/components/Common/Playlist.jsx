import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { MusicPlayer } from '../Music/MusicPlayer.jsx';

const Playlist = () => {
  const location = useLocation();
  const data = location.state?.data || [];
  const [currentSong, setCurrentSong] = useState(null);
  const playerRef = useRef(null); // Create a ref for the player element

  const handleClickSong = (song) => {
    setCurrentSong(song);
    if (playerRef.current) {
      playerRef.current.classList.remove("hidden");
      playerRef.current.classList.add("flex");
    }
  };

  return (
    <div className='h-full w-full ml-8 mt-8 text-white'>
      <h1 className='text-white text-xl'>Playlist Page</h1>
      {data.map((song) => (
        <div key={song._id} className='bg-red-200 h-[180px] w-[180px] rounded-[30px] mt-8' onClick={() => handleClickSong(song)}>
          <img className='rounded-md h-full w-full' src={song.thumbnail} alt={song.title} />
          <h4 className='text-white truncate p-2'>{song.title}</h4>
        </div>
      ))}
      <MusicPlayer song={currentSong} playerRef={playerRef} />
    </div>
  );
};

export default Playlist;
