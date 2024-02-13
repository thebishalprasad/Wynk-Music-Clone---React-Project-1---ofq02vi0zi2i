import React from 'react';
import Slider from 'react-slick';
import { useLocation } from 'react-router-dom';
import { useUser } from '../../utils/UserProvider';
import MusicPlayer from '../Music/MusicPlayer'; 

const Playlist = () => { 
  const location = useLocation();
  const data = location.state?.data || [];
  const { setCurrentSong,currentSong } = useUser();

  const handleClickSong = (song) => {
    setCurrentSong(song); 
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
   <div>
    <div className='h-full w-full ml-8 mt-8 text-white'>
      <h1 className='text-white text-xl'>Playlist Page</h1>
      <Slider {...settings}>
        {data.map((song) => (
          <div key={song._id} className='bg-red-200 h-[180px] w-[180px] rounded-[30px] mt-8' onClick={() => handleClickSong(song)}>
            <img className='rounded-md h-full w-full' src={song.thumbnail} alt={song.title} />
            <h4 className='text-white truncate p-2'>{song.title}</h4>
          </div>
        ))}
      </Slider>
    </div>
    {currentSong && <MusicPlayer />} 
   </div>

  );
};

export default Playlist;
