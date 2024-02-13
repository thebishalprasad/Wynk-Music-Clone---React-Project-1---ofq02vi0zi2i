import React, { useState } from 'react'; // Import useState from React
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer'
import TrendingSongs from './components/Songs/TrendingSongs';
import Playlist from './components/Common/Playlist';
import Subscription from './components/Subscription/Subscription';
import LoginModal from './components/Authentication/LoginSignupModal';

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist setCurrentSong={setCurrentSong} />} />
        <Route path="/trending" element={<TrendingSongs />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/Signup" element={<LoginModal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
