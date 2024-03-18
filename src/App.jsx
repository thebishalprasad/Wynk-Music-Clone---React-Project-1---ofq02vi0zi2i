import React, { useState } from 'react'; 
import ProtectedRoute from './components/Authentication/ProtectedRoute'; 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer'
import Playlist from './components/Common/Playlist';
import Subscription from './components/Subscription/Subscription';
import LoginModal from './components/Authentication/LoginSignupModal';
import MyMusic from './components/Music/MyMusic';
import TrendingNow from './components/Header/TrendingNow';
import SongCard from './components/Header/SongCard';
import Artists from './components/Header/Artists';
import Header from './components/Header/Header';
import Search from './components/Navbar/Search';

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<LoginModal />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/trending" element={<TrendingNow />} />
        <Route path="/artist" element={<Artists />} />
        <Route path="/playlist/:mood" element={<Playlist setCurrentSong={setCurrentSong} />} />
        <Route path="/songs/:category" element={<SongCard />} />
        <Route path="/mymusic" element={<ProtectedRoute component={MyMusic} />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
