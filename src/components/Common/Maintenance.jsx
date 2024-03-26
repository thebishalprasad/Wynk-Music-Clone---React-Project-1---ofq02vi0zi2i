import React from 'react';
import maintenance from '../../assets/images/maintenance.png';

const Maintenance = () => {
    return (
        <div className="max-w-md mx-auto p-6 rounded-lg shadow-md">
            <div className="mx-auto mb-6 w-3/4 sm:w-2/4 md:w-3/4 lg:w-2/4 xl:w-3/4">
                <img src={maintenance} alt="Under Maintenance" className="mx-auto w-full h-auto" />
            </div>
            <h2 className="text-center text-xl font-semibold text-gray-400 mb-2">Feature Under Maintenance</h2>
            <p className="text-center text-gray-600">We apologize for the inconvenience. This feature is currently under maintenance. Please check back later.</p>
        </div>
    );
};

export default Maintenance;
