import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
    const [activeLink, setActiveLink] = useState('All');
    const [showHeader, setShowHeader] = useState(true);
    const [isMoodOpen, setMoodOpen] = useState(false);
    const [isAlbumOpen, setAlbumOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLinkClick = (link) => {
        setActiveLink(link);
        if (link === 'Trending Now') {
            navigate('/trending');
        } else if (link === 'Top Artists') {
            navigate('/artists');
        } else if (link === 'Old Songs' || link === 'New Songs') {
            navigate(`/songs/${link.toLowerCase().replace(' ', '_')}`);
        } else if (link === 'Happy' || link === 'Excited' || link === 'Romantic' || link === 'Sad' || link === 'Party' || link === 'Dance') {
            navigate(`/moodlist/${link.toLowerCase()}`);
        } else if (link === 'Top Hindi Albums' || link === 'Top English Albums' || link === 'Top Telugu Albums' || link === 'Top Tamil Albums' || link === 'Top Bhojpuri Albums') {
            navigate(`/albums/${link.toLowerCase().replace(' ', '_')}`);
        } else if (link === 'Podcast') {
            navigate('/podcast');
        }else if (link === 'All') {
            navigate('/');
        }
    };
    
    
    const handleAlbumToggle = () => {
        setAlbumOpen(!isAlbumOpen);
    };

    const handleMoodToggle = () => {
        setMoodOpen(!isMoodOpen);
    };

    const handleMoodSelect = (mood) => {
        navigate(`/moodlist/${mood.toLowerCase()}`);
    };

    useEffect(() => {
        const hideHeaderPaths = [
            "/subscription",
            "/search",
            "/mymusic",
            "/moodlist",
            "/selectsound",
            "/selectlanguage",
            "/podcast"
        ];
        const shouldShowHeader = !hideHeaderPaths.some(path => location.pathname.includes(path));
        setShowHeader(shouldShowHeader);
    }, [location]);

    return (
        <header className={`${showHeader ? 'block' : 'hidden'}`}>
            <div className='flex h-[70px] w-full text-[#f9f9f9] gap-7 items-center'>
                <div className={`hover:underline underline-offset-[6px] ml-24 ${activeLink === 'All' ? 'text-white' : 'text-slate-400'}`}>
                    <Link to="/" title="All" onClick={() => handleLinkClick('All')}>All</Link>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'Trending Now' ? 'text-slate-400' : 'text-white'}`}>
                    <Link to="/trending" title="Trending Now" onClick={() => handleLinkClick('Trending Now')}>Trending Now</Link>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'Old Songs' ? 'text-slate-400' : 'text-white'}`} >
                    <Link to="/songs/old_songs" title="Old Songs" onClick={() => handleLinkClick('Old Songs')}>Old Songs</Link>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'New Songs' ? 'text-slate-400' : 'text-white'}`} >
                    <Link to="/songs/new_songs" title="New Songs" onClick={() => handleLinkClick('New Songs')}>New Songs</Link>
                </div>

                <div className={`hover:underline underline-offset-[6px] relative ${activeLink !== 'Moods & Genre' ? 'text-slate-400' : 'text-white'}`}>
                    <div className="flex items-center" onMouseEnter={handleMoodToggle} onMouseLeave={handleMoodToggle}>
                        <button className="hover:underline underline-offset-[6px] ">
                            <div className="flex items-center gap-1.5 ">Moods &amp; Genre
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                        <path d="M11 1.25L6 6.25L1 1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </div>
                        </button>
                        {isMoodOpen && (
                            <div className="absolute top-full w-48 h-auto mt-2 p-4 pt-4 rounded-xl border-none border-[#575757] shadow-inner bg-[#212121] shadow-[#2A2A2A] z-10 left-1/2 transform -translate-x-1/2">
                                <div className='bg-transparent items-center justify-center'>
                                    <button onClick={() => handleMoodSelect('Happy')} className={`py-2 block ${activeLink === 'Happy' ? 'text-white' : 'text-slate-300'}`}>Happy</button>
                                    <button onClick={() => handleMoodSelect('Excited')} className={`py-2 block ${activeLink === 'Excited' ? 'text-white' : 'text-slate-300'}`}>Excited</button>
                                    <button onClick={() => handleMoodSelect('Romantic')} className={`py-2 block ${activeLink === 'Romantic' ? 'text-white' : 'text-slate-300'}`}>Romantic</button>
                                    <button onClick={() => handleMoodSelect('Sad')} className={`py-2 block ${activeLink === 'Sad' ? 'text-white' : 'text-slate-300'}`}>Sad</button>
                                    <button onClick={() => handleMoodSelect('Party')} className={`py-2 block ${activeLink === 'Party' ? 'text-white' : 'text-slate-300'}`}>Party</button>
                                    <button onClick={() => handleMoodSelect('Dance')} className={`py-2 block ${activeLink === 'Dance' ? 'text-white' : 'text-slate-300'}`}>Dance</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className={`hover:underline underline-offset-[6px] relative ${activeLink !== 'Top Albums' ? 'text-slate-400' : 'text-white'}`}>
                    <div className="flex items-center" onMouseEnter={handleAlbumToggle} onMouseLeave={handleAlbumToggle}>
                        <button className="hover:underline underline-offset-[6px] ">
                            <div className="flex items-center gap-1.5 ">Top Albums
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                        <path d="M11 1.25L6 6.25L1 1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </div>
                        </button>
                        {isAlbumOpen && (
                            <div className="absolute top-full w-48 h-auto mt-2 p-4 rounded-xl border-none border-[#575757] shadow-inner bg-[#212121] shadow-[#2A2A2A] z-10 left-1/2 transform -translate-x-1/2">
                                <div className='bg-transparent items-center justify-center'>
                                    <Link to="/albums/hindi" className={`py-2 block ${activeLink === 'Top Hindi Albums' ? 'text-white' : 'text-slate-300'}`}>Top Hindi Albums</Link>
                                    <Link to="/albums/english" className={`py-2 block ${activeLink === 'Top English Albums' ? 'text-white' : 'text-slate-300'}`}>Top English Albums</Link>
                                    <Link to="/albums/telugu" className={`py-2 block ${activeLink === 'Top Telugu Albums' ? 'text-white' : 'text-slate-300'}`}>Top Telugu Albums</Link>
                                    <Link to="/albums/tamil" className={`py-2 block ${activeLink === 'Top Tamil Albums' ? 'text-white' : 'text-slate-300'}`}>Top Tamil Albums</Link>
                                    <Link to="/albums/bhojpuri" className={`py-2 block ${activeLink === 'Top Bhojpuri Albums' ? 'text-white' : 'text-slate-300'}`}>Top Bhojpuri Albums</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'Top Artists' ? 'text-slate-400' : 'text-white'}`}>
                    <Link to="/artist" title="Top Artists" onClick={() => handleLinkClick('Top Artists')}>Top Artists</Link>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'Podcast' ? 'text-slate-400' : 'text-white'}`}>
                    <Link to="/podcast" title="Podcast" onClick={() => handleLinkClick('Podcast')}>Podcast</Link>
                </div>

            </div>
        </header>
    );
}

export default Header;
