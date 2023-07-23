import React from 'react';
import useParcel from '../../Hooks/useParcel';
import { Link } from 'react-router-dom';
import DeliveryPercnet from './DeliveryPercnet';
import { useQuery } from '@tanstack/react-query';
import Slider from '../../Component/Slider';
import { useState } from 'react';
import ProfileUpdate from '../Profile/ProfileUpdate';
import ParcelModal from '../../Component/ParcelModal/ParcelModal';

const MerchantAnalysis = () => {
    const [showModal, setShowModal] = useState(false);
    const { data: parcel = [], refetch } = useQuery(['orders'], async () => {
        const res = await fetch('http://localhost:5000/orders')
        return res.json();
    })


    const pending = parcel.filter(item => item.status === "pending");
    const picked = parcel.filter(item => item.status === "picked");
    const onWay = parcel.filter(item => item.status === "on the way");
    const hold = parcel.filter(item => item.status === "hold");
    const delivered = parcel.filter(item => item.status === "delivered");
    const returned = parcel.filter(item => item.status === "returned");
    const returnedToMerchant = parcel.filter(item => item.status === "returned to merchant");
    const reject = parcel.filter(item => item.status === "reject");

    return (
        <div className='h-full p-8 rounded-md'>
            <div>
                <Slider />
            </div>
            <div className='grid grid-cols-4 gap-10 mt-10'>
                <div>
                    <button onClick={() => setShowModal(parcel)} className='w-full'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>parcel Parcel</h1>
                            <h1 className='text-blue-800'>{parcel?.length}</h1>
                        </div>
                    </button>
                </div>
                <div>
                    <button onClick={() => setShowModal(pending)} className='w-full'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>Pending Parcel</h1>
                            <h1 className='text-blue-800'>{pending?.length}</h1>
                        </div>
                    </button>
                </div>
                <div>
                    <button onClick={() => setShowModal(picked)} className='w-full'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>picked Parcel</h1>
                            <h1 className='text-blue-800'>{picked?.length}</h1>
                        </div>
                    </button>
                </div>
                <div>
                    <button onClick={() => setShowModal(onWay)} className='w-full'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>onWay Parcel</h1>
                            <h1 className='text-blue-800'>{onWay?.length}</h1>
                        </div>
                    </button>
                </div>
                <div>
                    <button onClick={() => setShowModal(hold)} className='w-full'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>hold Parcel</h1>
                            <h1 className='text-blue-800'>{hold?.length}</h1>
                        </div>
                    </button>
                </div>
                <div>
                    <button onClick={() => setShowModal(delivered)} className='w-full'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>delivered Parcel</h1>
                            <h1 className='text-blue-800'>{delivered?.length}</h1>
                        </div>
                    </button>
                </div>
                <div>
                    <button onClick={() => setShowModal(returned)} className='w-full'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>returned Parcel</h1>
                            <h1 className='text-blue-800'>{returned?.length}</h1>
                        </div>
                    </button>
                </div>
                <div>
                    <button onClick={() => setShowModal(returnedToMerchant)} className='w-full'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>returned To Merchant</h1>
                            <h1 className='text-blue-800'>{returnedToMerchant?.length}</h1>
                        </div>
                    </button>
                </div>
                <div>
                    <button onClick={() => setShowModal(reject)} className='w-full'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>reject Parcel</h1>
                            <h1 className='text-blue-800'>{reject?.length}</h1>
                        </div>
                    </button>
                </div>
            </div>

            <div>
                <h1 className='text-3xl font-pppins mt-10 text-black'>Parcel Analysis</h1>
                <div className='flex gap-16 mt-6'>
                    <div className='flex items-center gap-5'>
                        <h2 className='text-xl font-serif'>Delivery</h2>
                        <div className='bg-[#1E62D4] h-5 w-5'></div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <h2 className='text-xl font-serif'>Return</h2>
                        <div className='bg-[#FF5733] h-5 w-5'></div>
                    </div>
                </div>
                <div>
                    <DeliveryPercnet></DeliveryPercnet>
                </div>
                <div>

                </div>
            </div>
            <ParcelModal isVisible={showModal} onClose={() => setShowModal(false)} ></ParcelModal>
        </div>
    );
};

export default MerchantAnalysis;