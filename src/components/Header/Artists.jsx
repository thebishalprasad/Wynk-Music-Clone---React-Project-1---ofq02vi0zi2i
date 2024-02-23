import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import { PROJECT_ID } from '../../utils/constant';

const Artists = () => {
    const [artists, setArtists] = useState([]);

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
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="h-full">
            <h1 className="text-title text-white font-medium text-4xl mx-10 my-10 lg:mt-1.5 w-full">Top Artists</h1>
            <div className="flex-shrink-0 mx-10 mb-5">
                {artists.map(artist => (
                    <div key={artist._id} className="inline-block sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-3 mb-6">
                        <a title={artist.name} className="rounded-xl">
                            <div className="rounded-xl">
                                <img alt={artist.name} src={artist.image} className="w-40 h-40 rounded-xl" />
                            </div>
                            <div className="truncate font-normal text-white text-base text-left pt-2">{artist.name}</div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Artists;
