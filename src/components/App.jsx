import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home';
import Footer from '../components/Footer';
import TrendingSongs from '../components/Songs/TrendingSongs';
import Playlist from './Common/Playlist';
import Subscription from './Subscription/Subscription';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/trending" element={<TrendingSongs />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
