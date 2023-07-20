import React from 'react';
import useParcel from '../../Hooks/useParcel';
import { Link } from 'react-router-dom';
import DeliveryPercnet from './DeliveryPercnet';
import { useQuery } from '@tanstack/react-query';

const MerchantAnalysis = () => {
    const { data: parcel = [], refetch } = useQuery(['orders'], async () => {
        const res = await fetch('http://localhost:5000/orders')
        return res.json();
    })

    const delivered = parcel.filter(item => item.status === "picked");
    const picked = parcel.filter(item => item.status === "picked");
    const hold = parcel.filter(item => item.status === "hold");
    const onWay = parcel.filter(item => item.status === "on the way");
    const returned = parcel.filter(item => item.status === "returned");
    const returnedToMerchant = parcel.filter(item => item.status === "returned to merchant");

    return (
        <div className='h-full p-8 rounded-md'>
            <div className='grid grid-cols-4 gap-10'>
                <div>
                    <Link to='dashboard/my-parcel'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>Total Parcel</h1>
                            <h1 className='text-blue-800'>{parcel?.length}</h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to='dashboard/my-parcel'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>Picked</h1>
                            <h1 className='text-blue-800'>{picked?.length}</h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to='dashboard/my-parcel'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>On The Way</h1>
                            <h1 className='text-blue-800'>{onWay?.length}</h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to='dashboard/my-parcel'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>Hold</h1>
                            <h1 className='text-blue-800'>{hold?.length}</h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to='dashboard/my-parcel'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>Delivered</h1>
                            <h1 className='text-blue-800'>{delivered?.length}</h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to='dashboard/my-parcel'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>Return</h1>
                            <h1 className='text-blue-800'>{returned?.length}</h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to='dashboard/my-parcel'>
                        <div className='bg-[#E8F6FC] text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1 className='text-gray-400'>Return To Merchant</h1>
                            <h1 className='text-blue-800'>{returnedToMerchant?.length}</h1>
                        </div>
                    </Link>
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
        </div>
    );
};

export default MerchantAnalysis;