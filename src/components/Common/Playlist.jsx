import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useUser } from '../../utils/UserProvider';

const Playlist = () => {
  const location = useLocation();
  const data = location.state?.data || [];
  const { setCurrentSong,currentSong } = useUser();

  const handleClickSong = (song) => {
    setCurrentSong(song);
   
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
    </div>
  );
};

export default Playlist;
