import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useUser } from '../../utils/UserProvider';
import MusicPlayer from '../Music/MusicPlayer';

const Playlist = () => {
  const location = useLocation();
  const data = location.state?.data || [];
  const { setCurrentSong, currentSong } = useUser();
  const { mood } = useParams();

  const handleClickSong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="h-full mt-5">
      <h2 className="text-title text-white font-medium text-3xl mx-20 my-10 lg:mt-1.5 ">{mood.charAt(0).toUpperCase() + mood.slice(1)} Songs</h2>
      <div className="ml-20 mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {data.map((song) => (
          <div key={song._id} className="mb-6" onClick={() => handleClickSong(song)}>
            <a title={song.title} className="rounded-xl block">
              <div className="w-full rounded-xl overflow-hidden">
                <img alt={song.title} src={song.thumbnail} className="w-44 h-44 rounded-lg" />
              </div>
              <div className="truncate font-normal text-white text-base text-left pt-2 pl-2">{song.title}</div>
            </a>
          </div>
        ))}
      </div>
      {currentSong && <MusicPlayer />}
    </div>

  );
};

export default Playlist;
