import React from 'react';

const ParcelSummary = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    return (
        <div className=' fixed inset-0 left-96 bg-opacity-25 backdrop-blur-sm flex justify-center'>
            <div className='w-full md:w-[800px] flex flex-col  rounded-lg'>

            </div>
            This is Parcel summary Page!
        </div>
    );
};

export default ParcelSummary;