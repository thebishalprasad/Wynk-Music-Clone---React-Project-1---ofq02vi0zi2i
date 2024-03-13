import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { ImSpinner10 } from "react-icons/im";
import { PROJECT_ID } from '../../utils/constant';

const Artists = () => {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true); // State variable to track loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
                    headers: {
                        projectId: PROJECT_ID,
                    },
                });
                const artistsData = response.data.data.flatMap(album => album.artists);
                setArtists(artistsData);
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false); 
            }
        };

        fetchData();
    }, []);

    return (
        <div className="h-full mx-20 my-10">
            <h1 className="text-title text-white font-medium text-4xl lg:mt-1.5">Top Artists</h1>
            {loading ? ( 
                <div className="flex justify-center items-center mt-5">
                    <ImSpinner10  className='text-red-600 text-5xl justify-center'/>
                </div>
            ) : (
                <div className="flex-shrink-0 mt-5 gap-2">
                    {artists.map(artist => (
                        <div key={artist._id} className="inline-block sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-6">
                            <a title={artist.name} className="rounded-xl">
                                <div className="rounded-xl">
                                    <img alt={artist.name} src={artist.image} className="w-44 h-44 rounded-xl" />
                                </div>
                                <div className="truncate font-normal w-44 text-white text-base text-left pt-2">{artist.name}</div>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Artists;