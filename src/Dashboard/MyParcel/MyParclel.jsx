import React, { useState } from 'react';
import { MdCreateNewFolder } from 'react-icons/md';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import AdminParcelEdit from '../../Component/AdminParcelModal/AdminParcelEdit';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MerchentParcelEdit from '../../Component/AdminParcelModal/MerchentParcel';

const MyParclel = () => {
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(AuthContext);
    console.log(user);
    const { data: merchantParcel = [], isLoading, refetch } = useQuery(['order'], async () => {
        const res = await fetch(`http://localhost:5000/user/order/${user?.email}`)
        return res.json();
    })

    const myParcel = merchantParcel.filter(parcel => parcel.status !== "delivered" && parcel.status !== "rejected");

    const handleDeleteParcel = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to be Delete  this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/order/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        refetch();
                        if (data.deletedCount > 0) {
                            Swal.fire("Parcel Delete successfully");
                        }
                    });
            }
        });
    };
    if (isLoading) {
        return <div>Loading...</div>; // Show a loading state while data is being fetched
    }
    return (
        <div>
            <div className="mt-10 h-[80vh] overflow-scroll">
                <h1 className='text-3xl font-pppins mb-3'>My Parcel</h1>
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead className='text-center bg-gray-400 text-black text-xl'>
                        <th>No.</th>
                        <th>Date</th>
                        <th>Trackin ID</th>
                        <th>Parcel Amount</th>
                        <th>Delivery Charge</th>
                        <th>Payable Amount</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        {
                            myParcel.map((parcel, index) => <tr className='bg-[#EEEEEE] rounded-md mb-5 shadow-lg text-center border-y-8 border-white p-20' key={parcel._id}>
                                <td className='text-xl'>{index + 1}</td>
                                <td className='text-xl'>{parcel.date}</td>
                                <td className='m-4 text-xl' style={{ width: '20px', overflow: 'hidden', wordWrap: 'break-word' }}>
                                    {parcel.trackingId}
                                </td>
                                <td className='text-xl'>
                                    <p>{parcel.product_amount}Tk</p>
                                </td>
                                <td className='flex flex-col text-xl'>
                                    <small>delivery - {parcel.delivary_Charge}TK</small>
                                    <small>cod {parcel.cod}TK</small>
                                </td>
                                <td className='text-xl'>
                                    <div className='flex flex-col gap-1'>
                                        <span>
                                            {parseFloat(parcel.product_amount) - parseFloat((parcel.total_amount))} Tk.
                                        </span>
                                    </div>
                                </td>
                                <td className='text-xl'>
                                    <p className='font-semibold'>{parcel.status}</p>
                                </td>

                                {/* <td className='mx-auto'>
                                    {
                                        parcel.status === 'pending' ?
                                            <div className='flex justify-center'>
                                                <button onClick={() => setShowModal(parcel)} className='px-3 py-2 text-xl bg-[#1E62D4] hover:bg-[#1E62D4] flex items-center gap-1 rounded-md text-white'><FaRegEdit />Edit</button>
                                            </div>
                                            :
                                            <>
                                                <h1 className='text-xl text-error'>Not <br />changeable</h1>
                                            </>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteParcel(parcel._id)} className='btn rounded-full bg-[#D53343] text-white hover:bg-[#D53343]'><FaTrashAlt /></button>
                                </td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <MerchentParcelEdit isVisible={showModal} onClose={() => setShowModal(false)}></MerchentParcelEdit>

        </div>
    );
};

export default MyParclel;