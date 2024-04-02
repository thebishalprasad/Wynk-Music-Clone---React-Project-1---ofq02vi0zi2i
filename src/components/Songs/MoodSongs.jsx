import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Sad from '../../assets/images/Sad.png';
import Happy from '../../assets/images/Happy.jpg';
import Excited from '../../assets/images/Excited.jpg';
import Romantic from '../../assets/images/Romantic.jpg';
import Dance from '../../assets/images/Dance.jpg';
import Party from '../../assets/images/Party.jpg';
import { PROJECT_ID } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';

const MoodSongs = ({ mood }) => {
    const [happy, setHappy] = useState([]);
    const [sad, setSad] = useState([]);
    const [excited, setExcited] = useState([]);
    const [romantic, setRomantic] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://academics.newtonschool.co/api/v1/music/song', {
                    headers: {
                        projectId: PROJECT_ID,
                    },
                });
                const data = response.data.data;
                setHappy(data.filter(item => item.mood === 'happy'));
                setSad(data.filter(item => item.mood === 'sad'));
                setExcited(data.filter(item => item.mood === 'excited'));
                setRomantic(data.filter(item => item.mood === 'romantic'));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleMusicList = (mood) => {
        const playlist = mood === 'happy' ? happy :
            mood === 'sad' ? sad :
                mood === 'excited' ? excited :
                    mood === 'romantic' ? romantic :
                        [];
        navigate(`/moodlist/${mood}`, { state: { data: playlist } });
    };

    const settings = {
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
        <div className='mx-8 px-10'>
            <h2 className='text-2xl text-white pl-3'>Moods {mood}</h2>
            <div className='h-full w-full pt-4 py-4 rounded-full'>
                <Slider {...settings}>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                        onClick={() => handleMusicList('happy')}>
                        <img className='rounded-md h-full w-full' src={Happy} alt="Happy Songs" />
                        <h4 className='text-white truncate p-2'>Happy Songs</h4>
                    </div>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                        onClick={() => handleMusicList('excited')}>
                        <img className='rounded-md h-full w-full' src={Excited} alt="Excited Songs" />
                        <h4 className='text-white truncate p-2'>Excited Songs</h4>
                    </div>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                        onClick={() => handleMusicList('romantic')}>
                        <img className='rounded-md h-full w-full' src={Romantic} alt="Romantic Songs" />
                        <h4 className='text-white truncate p-2'>Romantic Songs</h4>
                    </div>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                        onClick={() => handleMusicList('sad')}>
                        <img className='rounded-md h-full w-full' src={Sad} alt="Sad Songs" />
                        <h4 className='text-white truncate p-2'>Sad Songs</h4>
                    </div>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                        onClick={() => handleMusicList('party')}>
                        <img className='rounded-md h-full w-full' src={Party} alt="Party Songs" />
                        <h4 className='text-white truncate p-2'>Party Songs</h4>
                    </div>
                    <div className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'
                        onClick={() => handleMusicList('dance')}>
                        <img className='rounded-md h-full w-full' src={Dance} alt="Dance Songs" />
                        <h4 className='text-white truncate p-2'>Dance Songs</h4>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default MoodSongs;
