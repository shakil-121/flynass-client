import React from 'react';
import { useState } from 'react';
import ParcelRejectForm from './ParcelRejectForm';
import useParcel from '../../../Hooks/useParcel';
import { FaEye, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const AllParcel = () => {
    const [showModal, setShowModal] = useState(false);
    const [allParce, refetch] = useParcel();
    const needParcel = allParce.filter(parcel => parcel.status !== "delivered");
    // console.log(allParce);

    const handleStatusUpdate = (status, id) => {
        console.log(status, id);
        const statusUpdate = { status }
        fetch(`http://localhost:5000/order/status/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(statusUpdate)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Status Update",
                        text: "Status update successfully",
                        icon: "success",
                        confirmButtonText: "Update",
                    });
                }
                refetch();
            });
    }

    const pending = allParce.filter(item => item.status === "pending");
    const picked = allParce.filter(item => item.status === "picked");
    const onWay = allParce.filter(item => item.status === "On The Way");
    const hold = allParce.filter(item => item.status === "hold");

    return (
        <div>
            <div className='h-[95vh] overflow-scroll w-[75vw] px-16 pt-5 bg-sky-400'>
                <div>
                    <h1 className='text-3xl font-pppins mb-3'>All Parcel</h1>
                    <div className='flex gap-5 divide-x-2 divide-black items-center text-2xl mb-3 text-black '>
                        <p className='ps-3'>Pending: {pending.length}</p>
                        <p className='ps-3'>Picked: {picked.length}</p>
                        <p className='ps-3'>On The Way: {onWay.length}</p>
                        <p className='ps-3'>Hold: {hold.length}</p>
                    </div>
                </div>
                <table className="table table-xs  table-pin-rows table-pin-cols">
                    <thead className='bg-gray-400 text-black'>
                        <th><label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Tracking <br />
                            ID
                        </th>
                        <th>Percel<br />
                            Amount
                        </th>
                        <th>Delivery<br />
                            Charge
                        </th>
                        <th>Destination</th>
                        <th>view <br />
                            Invoice
                        </th>
                        <th>Payable <br />
                            Amount</th>
                        <th>Rejcet</th>
                    </thead>
                    <tbody>
                        {
                            needParcel.map((parcel, index) => <tr className='bg-[#EEEEEE] rounded-md mb-5 shadow-lg border-y-8 border-white p-20' key={parcel._id}>
                                {/* <td className='text-xl'>{index + 1}</td> */}
                                <td>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </td>
                                <td className='text-xl'>7/10/2023</td>
                                <td className='text-xl'>
                                    <div className="dropdown dropdown-bottom text-black">
                                        <label tabIndex={0} className=""><button className='btn bg-[#1E62D4] hover:bg-[#1E62D4] text-white'>{parcel.status}</button></label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48">
                                            <li onClick={() => handleStatusUpdate('picked', parcel._id)}><a>Picked</a></li>
                                            <li onClick={() => handleStatusUpdate('on the way', parcel._id)}><a>On The Way</a></li>
                                            <li onClick={() => handleStatusUpdate('delivered', parcel._id)}><a>Deliverd</a></li>
                                            <li onClick={() => handleStatusUpdate('hold', parcel._id)}><a>Hold</a></li>
                                            <li onClick={() => handleStatusUpdate('returned', parcel._id)}><a>Return</a></li>
                                            <li onClick={() => handleStatusUpdate('returned to merchant', parcel._id)}><a>Return to Mechant</a></li>
                                        </ul>
                                    </div>
                                </td>
                                <td className='m-4 text-xl' style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {parcel._id}
                                </td>
                                <td className='text-xl'>
                                    {parcel.product_amount}Tk
                                </td>
                                <td className='text-xl'>
                                    <div className='flex flex-col gap-1'>
                                        <span>Delivery - {parcel.delivary_Charge}Tk</span>
                                        <span>COD - {parcel.cod}Tk</span>
                                    </div>
                                </td>
                                <td className='text-xl'>
                                    <div className='flex flex-col gap-1'>
                                        <small>{parcel.name}</small>
                                        <small>{parcel.phone}</small>
                                        <small>{parcel.to_address}</small>
                                    </div>
                                </td>
                                <td className='text-xl'>
                                    <Link to={`../invoice/${parcel._id}`}><button className='btn bg-[#1E62D4] hover:bg-[#1E62D4] text-white flex items-center'><FaEye />Invoice</button></Link>
                                </td>
                                <td className='text-xl'>
                                    <div className='flex flex-col gap-1'>
                                        <span>{parcel.payable_amount} Tk.</span>
                                        <div className="dropdown dropdown-bottom text-black">
                                            <label tabIndex={0} className="font-pppins">{parcel.payment_status}</label>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48">
                                                <li><a>Paid</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td className='text-xl'>
                                    <button className="font-serif btn-sm btn-warning rounded-md">Reject</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* <ParcelRejectForm isVisible={showModal} onClose={() => setShowModal(false)}></ParcelRejectForm> */}
        </div>
    );
};

export default AllParcel;
