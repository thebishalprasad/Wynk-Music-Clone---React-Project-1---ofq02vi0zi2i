import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useLocation } from 'react-router-dom';
import { useUser } from '../../utils/UserProvider';
import MusicPlayer from '../Music/MusicPlayer';

const Playlist = () => {
  const location = useLocation();
  const [showheader, setshowheader] = useState(true);
  const data = location.state?.data || [];
  const { setCurrentSong, currentSong } = useUser();

  const handleClickSong = (song) => {
    setCurrentSong(song);
  };

  useEffect(() => {
    if (location.pathname === '/playlist') {
      setshowheader(false);
    } else {
      setshowheader(true);
    }
  }, [location]);

  return (
    <div className="h-full">
      <div>
        <h1 className="text-title text-white font-medium text-3xl mx-20 my-10 lg:mt-1.5 ">Playlist</h1>
        <div className="mx-20 mb-5">
          {data.map((song) => (
            <div key={song._id} className="inline-block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-6" onClick={() => handleClickSong(song)}>
              <a title={song.title} className="rounded-xl">
                <div className="w-full rounded-xl overflow-hidden">
                  <img alt={song.title} src={song.thumbnail} className="w-40 h-40 rounded-xl" />
                </div>
                <div className="truncate font-normal text-white text-base text-left pt-2">{song.title}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {currentSong && <MusicPlayer />}
    </div>
  );
};

export default Playlist;
