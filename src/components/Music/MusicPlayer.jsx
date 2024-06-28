import React, { useState, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useUser } from '../../utils/UserProvider';
import { PROJECT_ID } from '../../utils/constant';
import axios from 'axios';

const MusicPlayer = () => {
  const { currentSong } = useUser();
  const [progress, setProgress] = useState(0);
  const [getWatchList, setWatchList] = useState(false);
  const getToken = localStorage.getItem("token");

  useEffect(() => {
    setWatchList(false);
  }, [currentSong]);

  const onClickHandler = (songId) => {
    axios.patch('https://academics.newtonschool.co/api/v1/music/favorites/like', { songId }, {
      headers: {
        projectID: PROJECT_ID,
        Authorization: `Bearer ${getToken}`
      }
    })
      .then((result) => {
        console.log(result);
        setWatchList(true);
      })
      .catch((error) => {
        console.error('Error making the PATCH request:', error); // Log the full error
      });
  };

  useEffect(() => {
    if (currentSong) {
      setProgress(0);
    }
  }, [currentSong]);

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
  };

  const handleListen = (e) => {
    const { currentTime, duration } = e.target;
    const newProgress = (currentTime / duration) * 100;
    setProgress(newProgress);
  };

  return (
    <section className="fixed bottom-0 w-full flex items-center justify-center z-50">
      {currentSong && (
        <AudioPlayer
          src={currentSong.audio_url}
          autoPlay
          progress={progress}
          onListen={handleListen}
          customProgressBarSection={[
            <div key="progress-bar" className="w-full">
              <input
                type="range"
                min="0"
                max="100"
                step="0.01"
                value={progress}
                className="h-8 absolute left-0 top-0 w-full cursor-pointer"
                onChange={handleProgressChange}
              />
            </div>
          ]}
          customAdditionalControls={[
            <div key={currentSong._id} className="flex items-center text-white">
              <img src={currentSong.thumbnail} alt={currentSong.title} className="h-12 w-12 rounded-md mr-4" />
              <div>
                <div className="text-sm font-semibold truncate">{currentSong.title.split(' ').slice(0, 2).join(' ')}</div>
                <div className="text-xs text-gray-400">
                  {currentSong.artist.map((artist) => artist.name).join(', ')}
                </div>
              </div>
              <div>
                {getToken && !getWatchList && <i onClick={() => onClickHandler(currentSong._id)} className="fa-regular fa-heart"></i>}
                {getToken && getWatchList && <i style={{ color: 'white' }} className="fa-solid fa-heart"></i>}
              </div>
            </div>
          ]}
        />

      )}
    </section>
  );
};

export default MusicPlayer;
