import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Playlists from '../components/Playlists';
import Footer from '../components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlists" element={<Playlists />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
