import React, { useState } from 'react';
import { useUser } from '../../utils/UserProvider';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { BsTranslate } from "react-icons/bs";
import { PiSpeakerHighBold } from "react-icons/pi";
import { FaPodcast, FaRegUser, FaSignOutAlt } from "react-icons/fa";
import DownloadModal from './DownloadModal';

const Dropdown = () => {
    const { userName, signOutContext, isUserLoggedIn } = useUser();
    const [showDropdown, setShowDropdown] = useState(true);
    const [showDownloadModal, setShowDownloadModal] = useState(false);
    const navigate = useNavigate();

    const handleDownload = () => {
        setShowDownloadModal(true);
        setShowDropdown(false);
    };

    const handleCloseModal = () => {
        setShowDownloadModal(false);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setShowDropdown(false);
    };

    return (
        <div>
            {showDropdown && (
                <div className="relative h-full flex items-center text-white bg-[#1C1B1B]">
                    <div className="bg-[#1C1B1B] z-30 absolute top-full mr-12 mt-2 w-64 h-fit right-0 pt-5 rounded-xl stroke-2 shadow-popover transform opacity-100 scale-100">
                        <div className="flex items-center gap-3 hover:opacity-60 mb-5 px-4">
                            <FaRegUser className="h-5 w-5" />
                            <span className="font-light opacity-80">{userName || "Guest"}</span>
                        </div>
                        <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={handleDownload}>
                            <MdOutlineDownloadForOffline className="h-6 w-6" />
                            <span className="font-light opacity-80">Download App</span>
                        </div>
                        <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={() => handleNavigation('/selectlanguage')}>
                            <BsTranslate className="h-5 w-5" />
                            <span className="font-light opacity-80">Select Language</span>
                        </div>
                        <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={() => handleNavigation('/selectsound')}>
                            <PiSpeakerHighBold className="h-5 w-5" />
                            <span className="font-light opacity-80">Sound Quality</span>
                        </div>
                        <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={() => handleNavigation('/podcast')}>
                            <FaPodcast className="h-5 w-5" />
                            <span className="font-light opacity-80">Podcast</span>
                        </div>
                        {isUserLoggedIn && (
                            <div className="flex items-center gap-3 hover:opacity-60 cursor-pointer mb-5 px-4" onClick={signOutContext}>
                                <FaSignOutAlt className="h-5 w-5" />
                                <span className="font-light opacity-80">Sign Out</span>
                            </div>
                        )}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-3 stroke-2 hover:opacity-60 cursor-pointer mb-5 border-t border-[#2F3031] pt-5 px-4 relative"
                            href="https://studio.wynk.in"
                            onClick={() => setShowDropdown(false)}
                        >
                            <span>
                                {/* SVG Content */}
                            </span>
                            <div className="flex flex-col gap-1.5">
                                <div className="flex items-center gap-[0.438rem]">
                                    <span className="font-light opacity-80 text-base">Join Wynk for Artists</span>
                                </div>
                                <div className="text-xs text-wynk-gray1 pr-5">Sign up as an Artist on Wynk Studio and release your original songs on Wynk</div>
                            </div>
                        </a>
                    </div>
                </div>
            )}
            <DownloadModal showDownloadModal={showDownloadModal} handleClose={handleCloseModal} />
            <ToastContainer />
        </div>
    );
};

export default Dropdown;
