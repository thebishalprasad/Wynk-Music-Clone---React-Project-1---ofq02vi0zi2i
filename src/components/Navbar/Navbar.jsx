import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { ToastContainer } from 'react-toastify';
import { CiSearch } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import LoginModal from "../Authentication/LoginSignupModal";
import Dropdown from "./Dropdown";
import { useUser } from "../../utils/UserProvider";

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [shownavbar, setshownavbar] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const { userName, isUserLoggedIn } = useUser();

    const handleShowLogin = () => setShowLogin(true);
    const handleClose = () => setShowLogin(false);
    const ToggleDropdown = () => setShowDropdown(!showDropdown);

    useEffect(() => {
        if (location.pathname === '/subscription') {
            setshownavbar(false);
        } else {
            setshownavbar(true);
        }
    }, [location, isUserLoggedIn]);

    const handleSubscriptionClick = () => {
        if (isUserLoggedIn) navigate('/subscription');
        else setShowLogin(true);
    };

    const handleMyMusicClick = () => {
        if (isUserLoggedIn) navigate('/mymusic');
        else setShowLogin(true);
    };

    return (
        <div className={`${shownavbar ? 'block' : 'hidden'}`}>
            <nav className='h-[70px] w-full bg-[#1A1A1A] grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <a href="/" className='flex items-center px-[10px] lg:px-[100px] gap-2'>
                    <img src={logo} className='h-10 w-10 rounded-full' alt="Logo" />
                    <h3 className='text-lg lg:text-xl text-white'>Wynk Music</h3>
                </a>
                <div className='lg:flex lg:col-span-2  items-center justify-end pr-4 lg:pr-16' >
                    <div className='flex items-center border border-[#575757] shadow-inner bg-[#212121] lg:shadow-[#2A2A2A] h-8 lg:h-10 w-52 lg:w-72 rounded-full px-4 lg:px-8 gap-2 lg:gap-3'>
                        <CiSearch className='text-slate-200 h-5 lg:h-7 w-5 lg:w-7' />
                        <input type='text' placeholder='Search Songs' className='bg-transparent focus:outline-none text-slate-400 text-xs lg:text-sm lg:w-40' />
                    </div>
                    <div className='flex items-center justify-center gap-2 lg:gap-3 ml-4'>
                        <span className="hover:opacity-60 cursor-pointer flex" onClick={handleSubscriptionClick}>
                            <span className="text-white hidden lg:block">
                                <BsCurrencyRupee className='h-4 lg:h-6 w-4 lg:w-6' />
                            </span>
                            <div className="text-white hidden lg:block ml-2 font-light">Manage Subscription</div>
                        </span>
                        {isUserLoggedIn === true ? (
                            <>
                                <RxDividerVertical className='text-white h-7 lg:h-10 w-7 lg:w-10' />
                                <span className="hover:opacity-60 cursor-pointer flex" onClick={handleMyMusicClick}>
                                    <span className="text-white hidden lg:block">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                <path d="M6.37001 21.5383C7.77833 21.5383 8.92001 20.4011 8.92001 18.9983C8.92001 17.5954 7.77833 16.4583 6.37001 16.4583C4.96168 16.4583 3.82001 17.5954 3.82001 18.9983C3.82001 20.4011 4.96168 21.5383 6.37001 21.5383Z"
                                                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                                <path d="M8.91003 18.9982V6.57825" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M17.63 17.9982C19.0383 17.9982 20.18 16.861 20.18 15.4582C20.18 14.0554 19.0383 12.9182 17.63 12.9182C16.2216 12.9182 15.08 14.0554 15.08 15.4582C15.08 16.861 16.2216 17.9982 17.63 17.9982Z"
                                                    stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                                <path d="M20.1801 15.4582V3.03821" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M8.91003 6.57821L20.18 3.03821" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M9.22998 10.4181L20.18 6.97815" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="text-white hidden lg:block ml-2 font-light">My Music</div>
                                </span>
                            </>
                        ) : (
                            <>
                                <RxDividerVertical className='text-white h-7 lg:h-10 w-7 lg:w-10' />
                                <button className='hover:opacity-60 cursor-pointer text-white flex items-center h-8 lg:h-10 gap-1' onClick={handleShowLogin}>
                                    <FaRegUser className='h-4 lg:h-5 w-4 lg:w-5' />
                                    <div className="text-white hidden lg:block ml-2 font-light">Login</div>
                                </button>
                            </>
                        )}
                        <button onClick={ToggleDropdown}>
                            <IoMenu className='text-white ml-3 lg:ml-5 h-6 lg:h-8 w-6 lg:w-8' />
                        </button>
                    </div>
                </div>
            </nav>
            {showDropdown && <Dropdown userName={userName} />}
            <LoginModal showLogin={showLogin} handleClose={handleClose} navigate={navigate} />
            <ToastContainer />
        </div>
    );
};

export default Navbar;
