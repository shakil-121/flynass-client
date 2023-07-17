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

    return (
        <div className='h-full bg-[#2C2C54] p-8 text-white rounded-md'>
            <div className='grid grid-cols-3 gap-10'>
                <div>
                    <Link to='dashboard/my-parcel'>
                        <div className='bg-red-400 text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1>Total Parcel</h1>
                            <h1>{parcel?.length}</h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to='dashboard/my-parcel'>
                        <div className='bg-red-400 text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1>Picked</h1>
                            <h1>{picked?.length}</h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to='dashboard/my-parcel'>
                        <div className='bg-red-400 text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1>On The Way</h1>
                            <h1>{onWay?.length}</h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to='dashboard/my-parcel'>
                        <div className='bg-red-400 text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1>Hold</h1>
                            <h1>{hold?.length}</h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to='dashboard/my-parcel'>
                        <div className='bg-red-400 text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1>Delivered</h1>
                            <h1>{delivered?.length}</h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to='dashboard/my-parcel'>
                        <div className='bg-red-400 text-2xl font-pppins rounded-lg text-center py-10'>
                            <h1>Return</h1>
                            <h1>{returned?.length}</h1>
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-pppins mt-10'>Parcel Analysis</h1>
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