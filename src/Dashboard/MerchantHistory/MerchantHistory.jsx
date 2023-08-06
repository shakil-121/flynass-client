import React from 'react';
import { useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { FaRegEdit } from 'react-icons/fa';

const MerchantHistory = () => {
    const { user } = useAuth();

    const { data: merchantParcel = [], isLoading, refetch } = useQuery(['order'], async () => {
        const res = await fetch(`http://localhost:5000/user/order/${user?.email}`)
        return res.json();
    })

    const historyParcel = merchantParcel.filter(parcel => parcel.status === "delivered" || parcel.status === "rejected");

    return (
        <div>
            <div className='overflow-auto'>
                <h1 className='text-2xl font-pppins mb-5 mt-2'>Parcel History</h1>
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <tr className='text-center bg-gray-400 text-black grid md:grid-cols-7'>
                        <th>No.</th>
                        <th>Date</th>
                        <th>Trackin ID</th>
                        <th>Parcel Amount</th>
                        <th>Delivery Charge</th>
                        <th>Received Amount</th>
                        <th>Status</th>
                    </tr>
                </table>
                {
                    historyParcel.map((parcel, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-7 mb-5 justify-items-center items-center shadow-lg text-xl font-josefin p-2' key={parcel._id}>
                        <td>{index + 1}</td>
                        <td>{parcel.date}</td>
                        <td className='m-4' style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {parcel.trackingId}
                        </td>
                        <td>
                            <p>{parcel.product_amount}Tk</p>
                        </td>
                        <td className='flex flex-col'>
                            <small>delivery {parcel.delivary_Charge}TK</small>
                            <small>cod {parcel.cod}TK</small>
                        </td>
                        <td>
                            {parcel.payable_amount} TK
                        </td>
                        <td>
                            {parcel.status}
                        </td>
                    </tr>)
                }
            </div>
        </div>
    );
};

export default MerchantHistory;