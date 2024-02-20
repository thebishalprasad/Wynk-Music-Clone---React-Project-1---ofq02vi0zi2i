import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import TrendingNow from './TrendingNow';

function Header() {
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('All');
    const [isTrendingNowClicked, setIsTrendingNowClicked] = useState(false);
    const navigate = useNavigate(); 


    const handleSubMenuToggle = () => {
        setSubMenuOpen(!isSubMenuOpen);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        if (link === 'Trending Now') {
            setIsTrendingNowClicked(true);
            navigate('/trending'); 
        } else {
            setIsTrendingNowClicked(false);
        }
    };

    return (
        <header>
            <div className='flex h-[70px] w-full  text-[#f9f9f9] gap-7 items-center' >
                <div className={`hover:underline underline-offset-[6px] ml-24 ${activeLink === 'All' ? 'text-white' : 'text-slate-400'}`}>
                    {/* <a title="All" onClick={() => handleLinkClick('All')}>All</a> */}
                    <Link to="/" title="All" onClick={() => handleLinkClick('All')}>All</Link>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'Trending Now' ? 'text-slate-400' : 'text-white'}`}>
                    {/* <a title="Trending Now" onClick={() => handleLinkClick('Trending Now')}>Trending Now</a> */}
                    <Link to="/trending" title="Trending Now" onClick={() => handleLinkClick('Trending Now')}>Trending Now</Link>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'Old Songs' ? 'text-slate-400' : 'text-white'}`} >
                    <a title="Old Songs" onClick={() => handleLinkClick('Old Songs')} >Old Songs</a>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'New Songs' ? 'text-slate-400' : 'text-white'}`} >
                    <a title="New Songs" onClick={() => handleLinkClick('New Songs')} >New Songs</a>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'Moods & Genre' ? 'text-slate-400' : 'text-white'}`}>
                    <div className="flex items-center">
                        <button className="hover:underline underline-offset-[6px] ">
                            <div className="flex items-center gap-1.5">Moods &amp; Genre
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                        <path d="M11 1.25L6 6.25L1 1.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </span>
                            </div>
                        </button>
                    </div>
                </div>

                <div className={`hover:underline underline-offset-[6px] relative ${activeLink !== 'Top Albums' ? 'text-slate-400' : 'text-white'}`}>
                    <div className="flex items-center"
                        onMouseEnter={handleSubMenuToggle}
                        onMouseLeave={handleSubMenuToggle}
                    >
                        <button className="hover:underline underline-offset-[6px] ">
                            <div className="flex items-center gap-1.5 ">Top Albums
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                        <path d="M11 1.25L6 6.25L1 1.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </span>
                            </div>
                        </button>
                        {isSubMenuOpen && (
                            <div className="absolute top-full w-48 h-auto mt-2 p-4 pt-4 rounded-xl border-none border-[#575757] shadow-inner bg-[#212121] shadow-[#2A2A2A] z-10 left-1/2 transform -translate-x-1/2">
                                <div className='bg-transparent items-center justify-center'>
                                    <a title="Top Hindi Albums" className={`py-2 block ${activeLink === 'Top Hindi Albums' ? 'text-white' : 'text-slate-300'}`}>Top Hindi Albums</a>
                                    <a title="Top English Albums" className={`py-2 block ${activeLink === 'Top English Albums' ? 'text-slate-400' : 'text-white'}`}>Top English Albums</a>
                                    <a title="Top Telugu Albums" className={`py-2 block ${activeLink === 'Top Telugu Albums' ? 'text-slate-400' : 'text-white'}`}>Top Telugu Albums</a>
                                    <a title="Top Tamil Albums" className={`py-2 block ${activeLink === 'Top Tamil Albums' ? 'text-slate-400' : 'text-white'}`}>Top Tamil Albums</a>
                                    <a title="Top Bhojpuri Albums" className={`py-2 block ${activeLink === 'Top Bhojpuri Albums' ? 'text-slate-400' : 'text-white'}`}>Top Bhojpuri Albums</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'Top Artists' ? 'text-slate-400' : 'text-white'}`}>
                    <a title="Top Artists" className="text-base dark:text-wynk-dark-singtel_gray font-light " onClick={() => handleLinkClick('Top Artists')}>Top Artists</a>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'Top Playlists' ? 'text-slate-400' : 'text-white'}`}>
                    <div className="flex items-center">
                        <button className="hover:underline underline-offset-[6px] ">
                            <div className="flex items-center gap-1.5">Top Playlists<span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none"><path d="M11 1.25L6 6.25L1 1.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></div>
                        </button>
                    </div>
                </div>

                <div className={`hover:underline underline-offset-[6px] ${activeLink !== 'Podcast' ? 'text-slate-400' : 'text-white'}`}>
                    <a title="Podcast" className="text-base dark:text-wynk-dark-singtel_gray font-light " onClick={() => handleLinkClick('Podcast')}>Podcast</a>
                </div>
                {isTrendingNowClicked && <TrendingNow />}
            </div>
        </header>
    );
}

export default Header