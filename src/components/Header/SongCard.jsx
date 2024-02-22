import React, { useState, useEffect } from 'react';
import { OLD_SONGS_API, NEW_SONGS_API, PROJECT_ID } from '../../utils/constant';

const SongCard = ({ category }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Category:', category);
        const fetchData = async () => {
            const apiUrl = category === 'Old Songs' ? OLD_SONGS_API : NEW_SONGS_API;
            console.log('API URL:', apiUrl);

            try {
                const response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        projectId: PROJECT_ID,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const responseData = await response.json(); 
                setData(responseData.data); 
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div class="h-full">
            <div>
                <h1 class="text-title text-white font-medium text-4xl mx-10 my-10 lg:mt-1.5 w-full">Old Song</h1>
                <div class="flex-shrink-0 mx-10 mb-5 gap-2">
                    {data.map((song) => (
                        <div key={song._id} class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-3 mb-6">
                            <a title={song.title} class="rounded-xl">
                                <div class="w-full rounded-xl overflow-hidden">
                                    <img alt={song.title} src={song.thumbnail} class="object-cover object-center w-full h-40" />
                                </div>
                                <div class="truncate font-normal text-white text-base text-left pt-2">{song.title}</div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
}

export default SongCard;
