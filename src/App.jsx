import React, { useState } from 'react'; 
import ProtectedRoute from './components/Authentication/ProtectedRoute'; 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer'
import Subscription from './components/Subscription/Subscription';
import LoginModal from './components/Authentication/LoginSignupModal';
import MyMusic from './components/Music/MyMusic';
import TrendingNow from './components/Header/TrendingNow';
import SongCard from './components/Header/SongCard';
import Artists from './components/Header/Artists';
import Header from './components/Header/Header';
import Search from './components/Navbar/Search';
import Maintenance from './components/Common/Maintenance';
import Moodlist from './components/Common/Moodlist';
import NotFound from './components/Common/NotFound';

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
        <Route path="/moodlist/:mood" element={<Moodlist setCurrentSong={setCurrentSong} />} />
        <Route path="/songs/:category" element={<SongCard />} />
        <Route path="/mymusic" element={<ProtectedRoute component={MyMusic} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/selectlanguage" element={<Maintenance />} />  
        <Route path="/selectsound" element={<Maintenance />} />        
        <Route path="/podcast" element={<Maintenance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
