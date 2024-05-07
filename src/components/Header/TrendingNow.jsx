import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicPlayer from '../Music/MusicPlayer';
import TrendingImage from "../../assets/images/Trending.jpg"
import { FaPlus, FaPlay, FaCheck } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsCircle, BsDot, BsThreeDotsVertical } from "react-icons/bs";
import { useUser } from '../../utils/UserProvider';
import { PROJECT_ID } from '../../utils/constant';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TrendingNow = () => {
  const { setCurrentSong, currentSong } = useUser();
  const [data, setData] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [songCounts, setSongCounts] = useState({});

  const fetchData = async () => {
    try {
      const response = await axios.get('https://academics.newtonschool.co/api/v1/music/song', {
        headers: {
          projectId: PROJECT_ID,
        },
        params: {
          featured: 'Trending songs',
        },
      });
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFollowToggle = () => {
    setIsFollowing(prevState => !prevState);
  };

  const handleClickSong = (song) => {
    setCurrentSong(song);
  };

  const handlePlaySongs = async () => {
    await fetchData();
    if (data.length > 0) {
      setCurrentSong(data[0]);
    }
  };

  const handleNotifyClick = () => {
    toast.info('Feature under development');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-full">
      <div className="flex items-center text-gray-300 text-xs ml-24 my-2">
        <a href="/" className="text-[#394144] transition duration-200">Home</a>
        <span><BsDot/></span>
        <span>Trending in Hindi</span>
      </div>
      <div className="flex ml-24 my-10">
        <img src={TrendingImage} className="rounded-md h-52 w-52" alt="Trending" />
        <div className="mx-20 w-full">
          <div>
            <h1 className="text-slate-50 text-4xl">Trending in Hindi</h1>
            <div className='flex items-center text-slate-400 my-3 text-xs'>
              <span>4.5 L Follower</span>
              <span><BsDot/></span>
              <span>20 Songs</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div className="inline-flex gap-4">
              <button className="bg-[#E3375C] border-none rounded-full p-2 text-slate-200 w-32 flex items-center" onClick={handlePlaySongs}>
                <FaPlay className="inline-flex text-base mx-2" />Play Songs
              </button>
              <button className="border-white border rounded-full p-2 text-white w-32 flex items-center" onClick={handleFollowToggle}>
                {isFollowing ? <FaCheck className="inline-flex text-base mx-2 text-center" /> : <FaPlus className="inline-flex text-base mx-2 text-center" />}
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>

            <div className="inline-flex ml-10 gap-14 justify-end">
              <button onClick={handleNotifyClick} className="btn-popover relative cursor-pointer" type="button">
                <BsCircle className="text-white text-4xl bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 2 }} />
                <MdOutlineFileDownload className="text-white text-2xl bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 3 }} />
              </button>
              <button onClick={handleNotifyClick} className="btn-popover relative cursor-pointer" type="button">
                <BsCircle className="text-white text-4xl bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 2 }} />
                <BsThreeDotsVertical className="text-white text-xl bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 3 }} />
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="block">
              {data.map((song, index) => (
                <div key={index} className="flex items-center justify-between py-2 pl-2 pr-1 rounded-lg border-transparent border w-full hover:border-slate-800" onClick={() => handleClickSong(song)}>
                  <div className='text-white mx-4'>{songCounts[song.title]} # </div>
                  <div className="group relative w-14 h-14 min-w-[3.5rem]">
                    <span className="relative block">
                      <img alt={song.title} src={song.thumbnail} className="rounded-md" />
                    </span>
                    <div className="absolute inset-0 cursor-pointer rounded-md group-hover:block bg-white z-10 bg-media-item-hover bg-opacity-50 hidden">
                      <div className="absolute inline-block left-2/4 top-2/4 -translate-x-2/4 -translate-y-1/2">
                        <i className="icon-ic_global_play_dark text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full ">
                    <div className="ml-4 flex flex-col lg:my-auto">
                      <div className="text-base line-clamp-1 text-title cursor-pointer">
                        <a title={song.title} className=" text-white hover:underline">{song.title}</a>
                      </div>
                      <div className="text-xs text-subtitle-hover line-clamp-1 cursor-pointer">
                        <span className="text-items text-white hover:underline">
                          {song.artist.map((artist, index) => (
                            <span key={index}>{artist.name}</span>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center  text-xl gap-4 text-white">
                    <button>
                      <a className="cursor-pointer"><MdOutlineFileDownload /></a>
                    </button>
                    <button>
                      <a className="cursor-pointer"><BsThreeDotsVertical /></a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      {currentSong && <MusicPlayer />}
    </div>
  );
}

export default TrendingNow;
