import React, { useState } from 'react';
import { MdCreateNewFolder } from 'react-icons/md';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import AdminParcelEdit from '../../Component/AdminParcelModal/AdminParcelEdit';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyParclel = () => {
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(AuthContext);
    console.log(user);
    const { data: merchantParcel = [], isLoading, refetch } = useQuery(['order'], async () => {
        const res = await fetch(`http://localhost:5000/user/order/${user?.email}`)
        return res.json();
    })
    console.log(merchantParcel);

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
        <div className='p-10 rounded-md h-full'>
            <div className="flex justify-between">
                <h1 className='text-4xl font-bold font-pppins'>My Parcel</h1>
            </div>
            <div className="mt-10">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <tr className='text-center bg-gray-400 text-black grid md:grid-cols-8'>
                        <th>No.</th>
                        <th>Date</th>
                        <th>Trackin ID</th>
                        <th>Parcel Amount</th>
                        <th>Delivery Charge</th>
                        <th>Payable Amount</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </table>
                <div className='h-[80vh] overflow-auto'>
                    {
                        merchantParcel.map((parcel, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-8 mb-5 justify-items-center items-center shadow-lg text-xl font-josefin p-2' key={parcel._id}>
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
                                <div className='flex flex-col gap-1'>
                                    <span>
                                        {parseFloat(parcel.product_amount) -
                                            parseFloat((parcel.total_amount))} Tk.</span>
                                    <div className="dropdown dropdown-bottom text-black">
                                        <label tabIndex={0} className="font-pppins">due</label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48">
                                            <li><a>Paid</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <button onClick={() => setShowModal(parcel)} className='flex items-center gap-2 btn bg-[#1E62D4] text-white hover:bg-[#1E62D4]'><FaRegEdit />Edit</button>
                            </td>
                            <td>
                                <button onClick={() => handleDeleteParcel(parcel._id)} className='btn rounded-full bg-[#D53343] text-white hover:bg-[#D53343]'><FaTrashAlt /></button>
                            </td>

                        </tr>)
                    }
                </div>
            </div>
            <AdminParcelEdit isVisible={showModal} onClose={() => setShowModal(false)}></AdminParcelEdit>

        </div>
    );
};

export default MyParclel;