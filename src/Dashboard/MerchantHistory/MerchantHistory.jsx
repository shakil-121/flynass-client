import React from 'react';
import { useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';

const MerchantHistory = () => {
    const {user} = useAuth();


    useEffect(() => {
        fetch(`http://localhost:5000/user/order/${user?.email}`)
            .then(res => res.json())
            .then(data => setTodaysParcel(data))
    }, [])

    return (
        <div>
            <div className='h-[600px] w-[90vh] overflow-auto'>
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <tr className='text-center bg-gray-400 text-black grid md:grid-cols-7'>
                        <th>No.</th>
                        <th>Date</th>
                        <th>Trackin ID</th>
                        <th>Parcel Amount</th>
                        <th>Delivery Charge</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </table>
                {/* {
                    isVisible.map((parcel, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-7 mb-5 justify-items-center items-center shadow-lg text-xl font-josefin p-2' key={parcel._id}>
                        <td>{index + 1}</td>
                        <td>{parcel.date}</td>
                        <td className='m-4' style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {parcel._id}
                        </td>
                        <td>
                            <p>{parcel.product_amount}Tk</p>
                        </td>
                        <td className='flex flex-col'>
                            <small>delivery {parcel.delivary_Charge}TK</small>
                            <small>cod {parcel.cod}TK</small>
                        </td>
                        <td>
                            <button onClick={() => setShowModal(parcel)} className='flex items-center gap-2 btn bg-[#1E62D4] text-white hover:bg-[#1E62D4]'><FaRegEdit />Edit</button>
                        </td>
                        <td>
                            <button onClick={() => handleDeleteParcel(parcel._id)} className='btn rounded-full bg-[#D53343] text-white hover:bg-[#D53343]'><FaTrashAlt /></button>
                        </td>
                    </tr>)
                } */}
            </div>
        </div>
    );
};

export default MerchantHistory;