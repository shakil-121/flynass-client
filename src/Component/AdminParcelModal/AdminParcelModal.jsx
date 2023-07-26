import React from 'react';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import ParcelEdit from '../ParcelEdit/ParcelEdit';
import { useState } from 'react';
import AdminParcelEdit from './AdminParcelEdit';
import Swal from 'sweetalert2';

const AdminParcelModal = ({ isVisible, onClose, refetch }) => {
    const [showModal, setShowModal] = useState(false);
    if (!isVisible) return null;
    const invoiceParcel = null;

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

    return (
        <div className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-30'>
            <div className='flex flex-col  rounded-lg'>
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-black place-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className='bg-sky-500 rounded-md p-10'>
                    <div className='flex justify-between mb-5'>
                        <h1 className='text-white text-3xl font-pppins'>Admin Parcel Modal</h1>
                        <div className='flex'>
                            <input type="text" placeholder="Tracking ID" className="input input-bordered w-full max-w-xs rounded-tr-none rounded-br-none focus:outline-none" />
                            <button className='btn rounded-tl-none rounded-bl-none bg-[#1E62D4] text-white hover:bg-[#1E62D4] border-none'>Track Now</button>
                        </div>
                    </div>
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
                        {
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
                        }
                    </div>
                </div>
            </div>
            <AdminParcelEdit isVisible={showModal} onClose={() => setShowModal(false)} ></AdminParcelEdit>
        </div>
    );
};

export default AdminParcelModal;