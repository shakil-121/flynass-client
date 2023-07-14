import React, { useContext, useState } from 'react';
import { MdCreateNewFolder } from 'react-icons/md';
import CreateParcel from './CreateParcel';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyParclel = () => {
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(AuthContext);
    return (
        <div className='bg-[#2c2c54] p-10 rounded-md text-white h-full'>
            <div className="flex justify-between">
                <h1 className='text-4xl font-bold font-pppins'>My Parcel</h1>
            </div>
            <div className="mt-14">
                <div className="flex justify-between mt-8 shadow-[rgba(0,_0,_0,_2)_0px_3px_10px] p-5 rounded-md">
                    <div className="overflow-x-auto flex-1 mt-10">
                        <table className="table">
                            {/* head */}
                            <thead className='text-white'>
                                <tr>
                                    <th>No.</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Parcel <br />
                                        Amount
                                    </th>
                                    <th>Customer <br />
                                        details
                                    </th>
                                    <th>Charge</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>7/10/2023</td>
                                    <td>Delivered</td>
                                    <td>
                                        <div className='flex flex-col gap-1'>
                                            <span>1200.00</span>
                                            <span>Panding</span>
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
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>1</th>
                                    <td>7/10/2023</td>
                                    <td>Delivered</td>
                                    <td>
                                        <div className='flex flex-col gap-1'>
                                            <span>1200.00</span>
                                            <span>Panding</span>
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="btn hover:btn-success">
                        <button onClick={() => setShowModal(true)} className="text-base  flex items-center font-pppins"><MdCreateNewFolder /> Parcel Create </button>
                    </div>
                </div>
            </div>
            <CreateParcel isVisible={showModal} onClose={() => setShowModal(false)} user={user}></CreateParcel>
        </div>
    );
};

export default MyParclel;