import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = ({ songId, projectId }) => {
  const [songDetails, setSongDetails] = useState({
    title: '',
    album: '',
    artist: '',
    audioSrc: '',
  });

  useEffect(() => {
    const fetchSongDetails = async () => {
      try {
        const response = await axios.get(`https://academics.newtonschool.co/api/v1/music/album/${songId}`, {
          headers: {
            projectId: projectId,
          },
        });
        const { title, album, artist, audioSrc } = response.data.data;
        setSongDetails({ title, album, artist, audioSrc });
      } catch (error) {
        console.error('Error fetching song details:', error);
      }
    };

    fetchSongDetails();
  }, [songId, projectId]);

  return (
    <div>
      
    </div>
  );
};

export default MusicPlayer;
