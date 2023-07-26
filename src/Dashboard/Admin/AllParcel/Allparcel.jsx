import React from 'react';
import { useState } from 'react';
import ParcelRejectForm from './ParcelRejectForm';
import useParcel from '../../../Hooks/useParcel';
import { FaEye, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllParcel = () => {
    const [showModal, setShowModal] = useState(false);
    const allParce = useParcel();
    // console.log(allParce);

    return (
        <div className='rounded-md p-2 h-full'>
            <h1 className='text-4xl  font-pppins mb-10'>All Parcel</h1>

            <div className='bg-sky-400 rounded-md p-10 overflow-auto '>
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <tr className='text-center bg-gray-400 text-black grid md:grid-cols-10'>
                        <th>No.</th>
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
                        <th>Reject Button</th>
                        <th>view <br />
                            Invoice
                        </th>
                        <th>Payable <br />
                            Amount
                        </th>
                    </tr>
                </table>
                {
                    allParce.map((parcel, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-10 mb-5 justify-items-center items-center shadow-lg text-xl font-josefin p-2' key={parcel._id}>
                        <td>{index + 1}</td>
                        <td>7/10/2023</td>
                        <td>
                            <div className="dropdown dropdown-bottom text-black">
                                <label tabIndex={0} className="">{parcel.status}</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48">
                                    <li><a>Picked</a></li>
                                    <li><a>On The Way</a></li>
                                    <li><a>Deliverd</a></li>
                                    <li><a>Hold</a></li>
                                    <li><a>Return</a></li>
                                    <li><a>Return to Mechant</a></li>
                                </ul>
                            </div>
                        </td>
                        <td className='m-4' style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {parcel._id}
                        </td>
                        <td>
                            {parcel.product_amount}Tk
                        </td>
                        <td>
                            <div className='flex flex-col gap-1'>
                                <span>Delivery - {parcel.delivary_Charge}Tk</span>
                                <span>COD - {parcel.cod}Tk</span>
                            </div>
                        </td>
                        <td>
                            <div className='flex flex-col gap-1'>
                                <small>{parcel.name}</small>
                                <small>{parcel.phone}</small>
                                <small>{parcel.to_address}</small>
                            </div>
                        </td>
                        <td>
                            <button className="font-serif btn-sm btn-warning rounded-md">Reject</button>
                        </td>
                        <td>
                            <Link to={`/dashboard/invoice/${parcel._id}`}><button className="btn btn-primary"><FaEye />Invoice</button></Link>
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
                    </tr>)
                }

            </div>
            {/* <ParcelRejectForm isVisible={showModal} onClose={() => setShowModal(false)}></ParcelRejectForm> */}
        </div>
    );
};

export default AllParcel;