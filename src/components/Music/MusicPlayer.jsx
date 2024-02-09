import React, { useEffect, useRef, useState } from "react";
import { useMusic } from "../../utils/MusicProvider";
import { ReactComponent as PlayIcon } from "../../assets/images/play.svg";
import { ReactComponent as PauseIcon } from "../../assets/images/pause.svg";
import { useUser } from "../../utils/UserProvider";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { PROJECT_ID }  from '../../utils/constant'

export const MusicPlayer = () => {
  const { selectedMusic } = useMusic();
  const { isUserLoggedIn } = useUser();
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const [start] = useState("0");
  const [end, setEnd] = useState("0");
  const navigate = useNavigate();
  const [addedToWatchlist, setAddedToWatchlist] = useState(false);

  const { thumbnail, title, artist, audio_url, _id } = selectedMusic;
  const artistList = artist && artist.map((item) => item.name).join(" & ");

  const playPauseAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const getTime = (duration) => {
    console.log("duration", duration);
    const endTime = Math.ceil(duration);
    let min = Math.floor(endTime / 60);
    let sec = endTime % 60;
    return `${min}:${sec}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      const endTime = getTime(audioRef.current.duration);
      console.log("endTime", endTime);
      setEnd(endTime);
      if (isPlaying) {
        audioRef.current.play();
        console.log("duration", audioRef.current.duration);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioRef]);

  if (!title) {
    return <></>;
  }

  const addToFavorite = async (songId, token) => {
    const url = `https://academics.newtonschool.co/api/v1/music/favorites/like`;
    return fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        projectId: PROJECT_ID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ songId }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add to Favourite");
      }
      return response.json();
    });
  };

  const handleAddToFavorite = () => {
    addToFavorite(_id, isUserLoggedIn)
      .then((data) => {
        setAddedToWatchlist(true);
        console.log("Successfully added to Favourite!", data);
      })
      .catch((error) => {
        console.error("Failed to add to Favourite:", error);
      });
  };

  return (
    <section className="music-player">
      <img src={thumbnail} alt={title} height="50" width="50" />
      {isUserLoggedIn ? (
        <>
          <div className="song-info">
            <div>{title}</div>
            <div title={artistList} className="artist-list">
              {artistList}
            </div>
          </div>
          <button onClick={playPauseAudio} id="play" className="play-pause">
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <div>{start}</div>
          <div>{end}</div>
          <input type="range" name="" id="" max={50} value={5} />
          <audio src={audio_url} ref={audioRef} />
          <div className="heart-icon" onClick={handleAddToFavorite}>
            {addedToWatchlist ? <FaHeart /> : <FaRegHeart />}
          </div>
        </>
      ) : (
        <>
          <p>Please Sign Up First</p>
          <button onClick={() => navigate("/signup")}>SignUp here!</button>
        </>
      )}
    </section>
  );
};
