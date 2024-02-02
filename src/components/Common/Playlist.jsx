import React from 'react';
import { useLocation } from 'react-router-dom';

const Playlist = () => {
  const location = useLocation();
  const data = location.state?.data || [];

  return (
    <div className='h-full w-full pt-4 py-4 rounded-full'>
      <h1 className='text-white'>Playlist Page</h1>
      {data.map((d) => (
        <div key={d._id} className='bg-red-200 h-[160px] w-[130px] rounded-[40px]'>
          <img className='rounded-md h-full w-full' src={d.thumbnail} alt={d.title} />
          <h4 className='text-white truncate p-2'>{d.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Playlist;