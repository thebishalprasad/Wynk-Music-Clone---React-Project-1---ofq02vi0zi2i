import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import Slider from "react-slick";
import { PROJECT_ID } from '../../utils/constant';
import { useUser } from '../../utils/UserProvider';

const HindiTop20 = () => {
  const [data, setData] = useState([]);
  const { setCurrentSong,currentSong } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://academics.newtonschool.co/api/v1/music/song", {
          method: 'GET',
          headers: {
            projectId: PROJECT_ID,
          },
        });
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className='mx-8 px-10'>
      <h2 className='text-2xl text-white pl-3'>Top 20 Hindi Songs</h2>
      <Slider {...settings}>
          {data.map((m) => (
            <div key={m._id} className='bg-red-200 h-[160px] w-[130px] rounded-[40px]' onClick={() => handleClickSong(m)}>
              <img className='rounded-md' src={m.thumbnail} alt={m.title}/>
              <h4 className='text-white truncate p-2'>{m.title}</h4>
            </div>
          ))}
        </Slider>
    </div>
    </div>
  );
};

export default HindiTop20;
