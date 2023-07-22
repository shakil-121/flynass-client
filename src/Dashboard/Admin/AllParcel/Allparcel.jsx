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

            <div className='bg-sky-400 rounded-md p-10 '>
                <table className="table lg:w-full overflow-x-auto overflow-y-auto w-[1200px]">
                    <tr className='text-center bg-gray-400 text-black grid md:grid-cols-9'>
                        <th>No.</th>
                        <th>Merchant <br />
                            Name</th>
                        <th>Status</th>
                        <th>Product <br />
                            ID
                        </th>
                        <th>Percel<br />
                            Price
                        </th>
                        <th>Delivery<br />
                            Charge
                        </th>
                        <th>Destination</th>
                        <th>Reject Button</th>
                        <th>view <br />
                            Invoice
                        </th>
                    </tr>
                </table>
                {
                    allParce.map((parcel, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-9 mb-5 justify-items-center items-center shadow-lg text-xl font-josefin p-2' key={parcel._id}>
                        <td>{index + 1}</td>
                        <td>7/10/2023</td>
                        <td>
                            <div className="dropdown dropdown-bottom text-black">
                                <label tabIndex={0} className="font-pppins">Panding</label>
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
                        <td>
                            <div className='flex flex-col gap-1'>
                                <span>1200.00</span>
                                <div className="dropdown dropdown-bottom text-black">
                                    <label tabIndex={0} className="font-pppins">due</label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48">
                                        <li><a>Paid</a></li>
                                    </ul>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className='flex flex-col gap-1'>
                                <span>Name: Rabbi Mia</span>
                                <span>01303329413</span>
                                <span>Madargonj</span>
                                <span>Jamalpur</span>
                            </div>
                        </td>
                        <td>
                            <div className='flex flex-col gap-1'>
                                <span>Delivery - 90.00</span>
                                <span>COD - 5.53</span>
                            </div>
                        </td>
                        <td>
                            <div className='flex flex-col gap-1'>
                                <span>Name: Rabbi Mia</span>
                                <span>01303329413</span>
                                <span>Madargonj</span>
                                <span>Jamalpur</span>
                            </div>
                        </td>
                        <td>
                            <button className="font-serif btn-sm btn-warning rounded-md">Reject</button>
                        </td>
                        <td>
                            <Link to={`/dashboard/invoice/${parcel._id}`}><button className="btn btn-primary"><FaEye />Invoice</button></Link>
                        </td>
                    </tr>)
                }

            </div>
            {/* <ParcelRejectForm isVisible={showModal} onClose={() => setShowModal(false)}></ParcelRejectForm> */}
        </div>
    );
};

export default AllParcel;