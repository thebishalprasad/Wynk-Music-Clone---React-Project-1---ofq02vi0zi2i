import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import { PROJECT_ID } from '../../utils/constant';

const Artists = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
                    headers: {
                        projectId: PROJECT_ID,
                    },
                });
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(data);

    return (
        <div className="h-full">
            <div>
                <h1 className="text-title text-white font-medium text-4xl mx-10 my-10 lg:mt-1.5 w-full">Top Artists</h1>
                <div className="flex-shrink-0 mx-10 mb-5 gap-2">
                    {data.map((song) => (
                        <div key={song._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-3 mb-6">
                            <a title={song.title} className="rounded-xl">
                                <div className="w-full rounded-xl overflow-hidden">
                                    <img alt={song.title} src={song.image} className="object-cover object-center w-full h-40" />
                                </div>
                                <div className="truncate font-normal text-white text-base text-left pt-2">{song.title}</div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Artists;
