import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import TrendingSongs from '../components/Songs/TrendingSongs'; 
import Playlist from './Common/Playlist';

const App = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongClick = (song) => {
    setSelectedSong(song);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/trending" element={<TrendingSongs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
