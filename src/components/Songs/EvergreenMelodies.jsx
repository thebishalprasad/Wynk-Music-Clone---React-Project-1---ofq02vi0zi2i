import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { PROJECT_ID } from '../../utils/constant';
import { useUser } from '../../utils/UserProvider';

const EvergreenMelodies = () => {
  const [data, setData] = useState([]);
  const { setCurrentSong,currentSong } = useUser();

  const handleClickSong = (song) => {
    setCurrentSong(song);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://academics.newtonschool.co/api/v1/music/song', {
          method: 'GET',
          headers: {
            projectId: PROJECT_ID,
          },
          params: {
            featured: 'Evergreen melodies',
          },
        });
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
      <div className='mx-8 px-10'>
        <h2 className='text-2xl text-white pl-3'>Evergreen Melodies</h2>
        <Slider {...settings}>
          {data.map((song) => (
            <div key={song._id} className='bg-red-200 h-[160px] w-[130px] rounded-[40px]' onClick={() => handleClickSong(song)}>
              <img className='rounded-md h-full w-full' src={song.thumbnail} alt={song.title} />
              <h4 className='text-white truncate p-2'>{song.title}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EvergreenMelodies;
