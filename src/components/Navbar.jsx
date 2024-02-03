import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { Modal } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginImg from "../assets/images/loginImg.png"
import asImg from "../assets/images/AppStore.png"
import psImg from "../assets/images/PlayStore.png"
import logo from '../assets/images/logo.png'
import { APP_TYPE, PROJECT_ID, LOGIN_API, SIGNUP_API } from '../utils/constant';
import Subscription from './Subscription/Subscription';

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false); 
    const handleShowLogin = () => setShowLogin(true); 
    const handleClose = () => setShowLogin(false); 
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (args) => {
        const requestData = {
            email: email,
            password: pass,
            appType: APP_TYPE,
        };

        try {
            let response;
            if (args === "login") {
                response = await axios.post(LOGIN_API, requestData, {
                    headers: {
                        projectId: PROJECT_ID,
                    },
                });
                toast.success('Login successful!', { autoClose: 2000 });
            } else if (args === "signup") {
                const signupData = {
                    email: email,
                    password: pass,
                    appType: APP_TYPE,
                    name: name,
                };

                response = await axios.post(SIGNUP_API, signupData, {
                    headers: {
                        projectId: PROJECT_ID,
                    },
                });
                toast.success('Signup successful!', { autoClose: 2000 });
            }

            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/');
        } catch (error) {
            console.error("Error:", error);
            toast.error('Error occurred. Please try again.', { autoClose: 2000 });
        }
    }

    const handleSubscriptionClick = () => {
        navigate('/subscription');
    }
    
    return (
        <div>
            <nav className='h-[70px] w-full bg-[#1A1A1A] grid grid-cols-1 lg:grid-cols-3 gap-3'>
                <a href="/" className='flex items-center px-[10px] lg:px-[100px] gap-2'>
                    <img src={logo} className='h-10 w-10 rounded-full' />
                    <h3 className='text-lg lg:text-xl text-white'>Wynk Music</h3>
                </a>
                <div className='lg:flex lg:col-span-2  items-center justify-end pr-4 lg:pr-16' >
                    <div className='flex items-center border border-[#575757] shadow-inner bg-[#212121] lg:shadow-[#2A2A2A] h-8 lg:h-10 w-52 lg:w-72 rounded-full px-4 lg:px-8 gap-2 lg:gap-3'>
                        <CiSearch className='text-slate-200 h-5 lg:h-7 w-5 lg:w-7' />
                        <input type='text' placeholder='Search Songs' className='bg-transparent focus:outline-none text-slate-400 text-xs lg:text-sm lg:w-40' />
                    </div>
                    <div className='flex items-center justify-center gap-2 lg:gap-3 ml-4'>
                        <button className='text-white flex items-center h-8 lg:h-10 gap-1 text-xs lg:text-base' onClick={handleSubscriptionClick}>
                            <BsCurrencyRupee className='h-4 lg:h-6 w-4 lg:w-6' />
                            Manage Subscription
                        </button>
                        <RxDividerVertical className='text-white h-7 lg:h-10 w-7 lg:w-10' />
                        <button className='text-white flex items-center h-8 lg:h-10 gap-1' onClick={handleShowLogin}>
                            <FaRegUser className='h-4 lg:h-5 w-4 lg:w-5' />
                            Login
                        </button>
                        <IoMenu className='text-white ml-3 lg:ml-5 h-6 lg:h-8 w-6 lg:w-8' />
                    </div>
                </div>
            </nav>
            <Modal
                open={showLogin}
                onClose={handleClose}
                aria-labelledby="Credential Modal"
                style={{ backdropFilter: "blur(5px)" }}
            >
                <div className="h-[450px] w-[320px] lg:w-[750px] grid grid-cols-1 lg:grid-cols-5 bg-black absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-xl">
                    <div className='lg:col-span-2'>
                        <img src={loginImg} alt='Login?SignUpImage' className='h-[450px] w-full lg:rounded-tl-xl lg:rounded-bl-xl' />
                    </div>
                    <div className='lg:col-span-3 p-5 flex flex-col items-center justify-around'>
                        <h1 className='text-white text-3xl w-full'>{isLogin ? 'Login' : 'Sign Up'}</h1>
                        <p className='text-white text-sm lg:text-base'>Get a personalised experience, and access all your music</p>

                        {isLogin ? <></> : (<input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} className='text-white bg-[#1b1b1c] focus:outline-none px-2 h-10 rounded-md w-full' />)}
                        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='text-white bg-[#1b1b1c] focus:outline-none px-2 h-10 rounded-md w-full' />
                        <input type='password' placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} className='text-white bg-[#1b1b1c] focus:outline-none px-2 h-10 rounded-md w-full' />
                        <div className='flex items-center gap-2'>
                            <button className='bg-white h-10 w-24 lg:w-40 rounded-md text-xs lg:text-base' onClick={() => handleSubmit(isLogin ? 'login' : 'signup')}>{isLogin ? 'Login' : 'Sign Up'}</button>
                            <button className='bg-white h-10 w-24 lg:w-40 rounded-md text-xs lg:text-base' onClick={() => setIsLogin(!isLogin)}>{!isLogin ? 'Login' : 'Sign Up'}</button>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p className='text-white text-xs lg:text-sm'>Available on</p>
                            <img src={asImg} alt='as' className='h-10 lg:h-14 w-24 lg:w-32' />
                            <img src={psImg} alt='ps' className='h-10 lg:h-14 w-24 lg:w-32' />
                        </div>
                    </div>
                </div>
            </Modal>
            <ToastContainer />
        </div>
    )
}

export default Navbar;
