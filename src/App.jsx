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

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<LoginModal />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/playlist" element={<Playlist setCurrentSong={setCurrentSong} />} />
        <Route path="/mymusic" element={<ProtectedRoute component={MyMusic} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
