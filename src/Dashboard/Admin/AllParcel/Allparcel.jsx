import React from 'react';

const AllParcel = () => {
    return (
        <div className='bg-[#2C2C54] rounded-md p-2 h-full'>
            <h1 className='text-4xl text-white font-pppins mb-10'>All Parcel</h1>
            <table className="table text-white">
                {/* head */}
                <thead className='text-white'>
                    <tr className='text-center'>
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
                        <th>Feedback <br />
                            Button
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>7/10/2023</td>
                        <td>
                            <div className="dropdown dropdown-bottom text-black">
                                <label tabIndex={0} className="text-white font-pppins">Panding</label>
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
                        <td>
                            <div className='flex flex-col gap-1'>
                                <span>Name: Rabbi Mia</span>
                                <span>01303329413</span>
                                <span>Madargonj</span>
                                <span>Jamalpur</span>
                            </div>
                        </td>
                        <td>
                            <button className='btn btn-secondary'>Reject</button>
                        </td>
                        <td>
                            <button className='btn btn-sm'>Feedback</button>
                        </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>1</th>
                        <td>7/10/2023</td>
                        <td>
                            <div className="dropdown dropdown-bottom text-black">
                                <label tabIndex={0} className="text-white font-pppins">Panding</label>
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
                        <td>
                            <div className='flex flex-col gap-1'>
                                <span>Name: Rabbi Mia</span>
                                <span>01303329413</span>
                                <span>Madargonj</span>
                                <span>Jamalpur</span>
                            </div>
                        </td>
                        <td>
                            <button className='btn btn-secondary'>Reject</button>
                        </td>
                        <td>
                            <button className='btn btn-sm'>Feedback</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AllParcel;