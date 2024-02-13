import React from 'react'
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import { useUser } from '../../utils/UserProvider';


const MusicPlayer = ({ song }) => {
  const { setCurrentSong, currentSong } = useUser();



  return (
    <section className="fixed bottom-0 h-20 w-full bg-slate-800 py-2 items-center gap-5 z-50" id="player">
      <AudioPlayer
        src={currentSong ? currentSong?.audio_url : ""}
        customProgressBarSection={
          [
            <div className="absolute left-0 top-0 w-72 player_range__Y0p1N">
              <input type="range" min="0" max="100" step="1" className="h-8 absolute left-0 top-0 w-full cursor-pointer" value={song?.progress} />
            </div>
          ]
        }
        customAdditionalControls={[
          <div className="flex-grow sm:flex-grow flex sm:flex-1 lg:max-w-[50%] sm:max-w-[80%] max-w-[60%] items-center sm:order-1">
            <div className="sm:ml-4 min-w-[3rem] mt-1.5">
              <img src={currentSong?.thumbnail} alt='song img' className="h-10 w-10 rounded-md" />
            </div>
            <div className="truncate sm:max-w-[11rem] lg:max-w-[16rem]">
              <div className="text-white font-normal text-sm">{currentSong?.title}</div>
              <div className="text-gray-300 font-normal text-sm">
                {currentSong?.artist.map((artist) => (
                  <span key={artist._id}>{artist.name}</span>
                ))}
              </div>
            </div>
          </div>
        ]}
      />
    </section>
  )
}

export default MusicPlayer