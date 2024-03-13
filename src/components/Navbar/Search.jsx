import React, { useEffect } from 'react';
import { useUser } from '../../utils/UserProvider';

const Search = () => {

    const { searchData, setsearchData } = useUser();
    console.log(searchData);
    useEffect(() => {

    }, [searchData])

    const handleClickSong = (song) => {

    };

    return (
        <div>
            <h2 className="text-left mx-20 my-10 text-xl text-white">Search Songs</h2>
            <div className='mx-8 px-10'>
                {searchData.map((song) => (
                    <div key={song._id} className='bg-red-200 h-[160px] w-[130px] rounded-[40px]' onClick={() => handleClickSong(song)}>
                        <img className='rounded-md h-full w-full' src={song.thumbnail} alt={song.title} />
                        <h4 className='text-white truncate p-2'>{song.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
