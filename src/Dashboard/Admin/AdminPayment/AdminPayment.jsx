import React, { useState } from 'react';
import useParcel from '../../../Hooks/useParcel';
import Swal from 'sweetalert2';
import { baseUrl } from '../../../config/api';

const AdminPayment = () => {
    const [allParcel, refetch] = useParcel();

    const history = allParcel.filter(item => item.status === "delivered" && item.payment_status === "due" || item.status === "returned" && item.payment_status === "due");

    const handlePaymentStatus = id => {
        fetch(`${baseUrl}/order/payment/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify(statusUpdate)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Done!",
                        text: "Status update successfully",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                }
                refetch();
            });
    };


    const handleStatusUpdate = (status, id) => {
        console.log(status, id);
        const statusUpdate = { status };
        fetch(`${baseUrl}/order/status/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(statusUpdate)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Done!",
                        text: "Status update successfully",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                }
                refetch();
            });
    };
    
    // State to hold the search text
    const [searchText, setSearchText] = useState("");
   // State to hold the filtered parcels based on search text
   const [searchedParcel, setSearchedParcel] = useState([]);
     // Function to handle the search of parcels based on the search text
     const handleSearch = () => {
        fetch(`${baseUrl}/orders/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // Update the 'searchedParcel' state with the fetched data
                setSearchedParcel(data);
            });
    }; 

     // Determine which parcels to show based on the search result
     const parcelsToShow = searchedParcel.length > 0 ? searchedParcel : history;

    return (
        <div className='px-5 mt-3'>
            <h1 className='text-3xl font-pppins mb-3'>Payment Pending</h1>

            <div className='flex my-6'>
                            <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Enter Name / TrackingID / Phone / Email" className="input input-bordered w-full max-w-xs rounded-tr-none rounded-br-none focus:outline-none" />
                            <button onClick={handleSearch} className='btn rounded-tl-none rounded-bl-none bg-[#1E62D4] text-white hover:bg-[#1E62D4] border-none'>Search Now</button>
                        </div>

            <div className='h-[90vh]  overflow-auto'>
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <tr className='text-center text-black grid md:grid-cols-8 sticky top-0'>
                        <th>No.</th>
                        <th>Date</th>
                        <th>Merchant Name</th>
                        <th>Trackin ID</th>
                        <th>Parcel Amount</th>
                        <th>Delivery Charge</th>
                        <th>Status</th>
                        <th>Payment</th>
                    </tr>
                </table>
                {
                    parcelsToShow.map((parcel, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-8 mb-3 justify-items-center items-center shadow-lg text-sm font-josefin mt-1' key={parcel._id}>
                        <td>{index + 1}</td>
                        <td>{parcel.date}</td>
                        <td>{parcel.merchant_name}</td>
                        <td className='m-4 font-semibold' style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {parcel.trackingId}
                        </td>
                        <td className='font-semibold'>
                            <p>{parcel.product_amount} Tk</p>
                        </td>
                        <td>
                            {
                                parcel.status === 'returned' ?
                                    <>
                                        <p className='text-red-600 font-semibold'>{parcel?.total_amount} TK</p>
                                    </>
                                    :
                                    <>
                                        {parcel?.total_amount} TK
                                    </>
                            }

                        </td>

                        <td>
                            {
                                parcel.status === 'returned' ?
                                    <>
                                        <p className='text-red-600'>
                                            {parcel?.status}
                                        </p>
                                    </>
                                    :
                                    <>
                                        {parcel?.status}
                                    </>
                            }
                        </td>
                        <td className='text-sm'>
                            <div className='flex flex-col gap-1'>
                                {
                                    parcel.status === 'returned' ?
                                        <>
                                            <div className="dropdown dropdown-bottom text-black">
                                                <label tabIndex={0} className="font-pppins text-red-600">Minus</label>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48">
                                                    <li onClick={() => handleStatusUpdate('returned to merchant', parcel._id)}><a>Collected</a></li>
                                                </ul>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <span>{parcel?.payable_amount} Tk.</span>
                                            {
                                                parcel.payment_status === 'paid' ?
                                                    <>
                                                        <p>Paid</p>
                                                    </>
                                                    :
                                                    <>
                                                        <div className="dropdown dropdown-bottom text-black">
                                                            <label tabIndex={0} className="font-pppins">{parcel.payment_status}</label>
                                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48">
                                                                <li onClick={() => handlePaymentStatus(parcel._id)}><a>Paid</a></li>
                                                            </ul>
                                                        </div>
                                                    </>
                                            }
                                        </>
                                }



                            </div>
                        </td>
                    </tr>)
                }
            </div>
        </div>
    );
};

export default AdminPayment;