import React, { useState } from 'react';
import { Modal } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import downloadImage from "../../assets/images/Download.JPG";
import appStoreImage from "../../assets/images/AppStore.png";
import playStoreImage from '../../assets/images/PlayStore.png';

const DownloadModal = ({ showDownloadModal, handleClose }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        try {
            if (email.trim() === '') {
                toast.error('Please enter your email address.', { autoClose: 2000 });
                return;
            }
            toast.success('Link Sent successfully!', { autoClose: 1000 });
            handleClose();
        } catch (error) {
            toast.error('Error sending link. Please try again.', { autoClose: 1000 });
        }
    };

    return (
        <Modal
            open={showDownloadModal}
            onClose={() => {}}            
            aria-labelledby="Credential Modal"
            style={{ backdropFilter: "blur(18px)" }}
        >
            <div className="h-[450px] w-[320px] lg:w-[700px] grid grid-cols-1 lg:grid-cols-5 bg-black absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rounded-xl">
                <div className='lg:col-span-2'>
                    <img src={downloadImage} alt='Download' className='h-[450px] w-full lg:rounded-tl-xl lg:rounded-bl-xl' />
                </div>
                <div className='lg:col-span-3 p-5 flex flex-col items-center justify-around'>
                    <h1 className='text-white text-5xl w-full '>Take Wynk</h1>
                    <h1 className='text-white text-5xl w-full leading-none'>wherever you go</h1>
                    <p className='text-white text-sm'>Get a message to download the mobile app</p>
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='text-white bg-[#1b1b1c] focus:outline-none px-2 h-10 rounded-md w-full' />
                    <div className='flex items-center gap-2'>
                        <button className='bg-white h-10 w-24 lg:w-40 rounded-md text-xs lg:text-base' onClick={handleSubmit}>Get the Link</button>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <p className='text-white text-xs lg:text-sm'>Available on</p>
                        <img src={appStoreImage} alt='App Store' className='h-10 lg:h-14 w-24 lg:w-28' />
                        <img src={playStoreImage} alt='Play Store' className='h-10 lg:h-14 w-24 lg:w-28' />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default DownloadModal;
