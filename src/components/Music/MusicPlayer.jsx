import React from "react";
import 'react-h5-audio-player/lib/styles.css';

export const MusicPlayer = ({ song, playerRef }) => {
  if (!song || !song.thumbnail) {
    return null;
  }
  console.log(song)

  return (
    <section ref={playerRef} className="fixed bottom-0 h-20 w-full bg-slate-800 py-2 items-center gap-5 hidden" id="player">
      <div className="absolute top-0 w-full player_range__Y0p1N">
        <input type="range" min="0" max="100" step="1" className="h-8 absolute -bottom-4 w-full cursor-pointer" value="0" />
      </div>
      <div className="flex-grow sm:flex-grow flex sm:flex-1 lg:max-w-[50%] sm:max-w-[80%] max-w-[60%] items-center sm:order-1">
        <div className="sm:ml-4 min-w-[3rem] mt-1.5">
          <img src={song.thumbnail} alt='song img' className="h-10 w-10 rounded-md" />
        </div>
        <div className="ml-1.5 truncate sm:max-w-[11rem] lg:max-w-[16rem]">
          <div className="text-white font-normal text-sm">{song.title}</div>
          <div className="text-gray-300 font-normal text-sm">
            {song.artist.map((artist) => (
              <span key={artist._id}>{artist.name}</span>
            ))}
          </div>

        </div>
      </div>
      
    </section>
  );
};
