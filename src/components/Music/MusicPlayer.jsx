import React from 'react';
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import { useUser } from '../../utils/UserProvider';

const MusicPlayer = () => {
  const { currentSong } = useUser();

  return (
    <section className="fixed bottom-0 w-full flex items-center justify-center z-50">
      {currentSong && (
        <AudioPlayer
          src={currentSong.audio_url}
          customProgressBarSection={
            [
              <div className="w-full">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  step="1" 
                  className="h-8 absolute left-0 top-0 w-full cursor-pointer" 
                  value={currentSong.progress} 
                />
              </div>
            ]
          }
          customAdditionalControls={[
            <div key={currentSong._id} className="flex items-center text-white">
              <img 
                src={currentSong.thumbnail} 
                alt={currentSong.title} 
                className="h-12 w-12 rounded-md mr-4" 
              />
              <div>
                <div className="text-sm font-semibold">{currentSong.title}</div>
                <div className="text-xs text-gray-400">
                  {currentSong.artist.map(artist => artist.name).join(', ')}
                </div>
              </div>
            </div>
          ]}
        />
      )}
    </section>
  );
};

export default MusicPlayer;
