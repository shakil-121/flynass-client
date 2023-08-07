import React from 'react';

const ParcelModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    console.log(isVisible);

    return (
        <div className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-30'>
            <div className='flex flex-col  rounded-lg'>
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-black place-self-end text-[#1E62D4]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className='bg-[#1E62D4] rounded-md p-5 md:py-5 h-[80vh] overflow-y-scroll'>
                    <h1 className='text-white text-3xl font-pppins mb-3'>Parcel</h1>
                    <div className='w-[80vw] md:w-[70vw]'>
                        <table className="table table-xs table-pin-rows table-pin-cols">
                            <tr className='text-center bg-gray-400 text-black grid md:grid-cols-6'>
                                <th>No.</th>
                                <th>Date</th>
                                <th>Trackin ID</th>
                                <th>Parcel Amount</th>
                                <th>Delivery Charge</th>
                                <th>Parcel Status</th>
                            </tr>
                        </table>
                        {
                            isVisible.map((parcel, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-6 mb-5 justify-items-center items-center shadow-lg text-xl font-josefin p-2' key={parcel._id}>
                                <td>{index + 1}</td>
                                <td>{parcel.date}</td>
                                <td className='m-4' style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {parcel.trackingId}
                                </td>
                                <td>
                                    <p>{parcel.product_amount}Tk</p>
                                </td>
                                <td>
                                    {parcel.delivary_Charge}Tk
                                </td>
                                <td>{parcel.status}</td>
                            </tr>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParcelModal;