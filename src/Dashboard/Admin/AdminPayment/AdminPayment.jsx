import React from 'react';
import useParcel from '../../../Hooks/useParcel';
import Swal from 'sweetalert2';
import { baseUrl } from '../../../config/api';

const AdminPayment = () => {
    const [allParcel, refetch] = useParcel();

    const history = allParcel.filter(item => item.status === "delivered" && item.payment_status === "due");

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

    return (
        <div className='px-5 mt-3'>
            <h1 className='text-3xl font-pppins mb-3'>Payment Pending</h1>
            <div className='h-[90vh]  overflow-auto'>
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <tr className='text-center text-black grid md:grid-cols-7 sticky top-0'>
                        <th>No.</th>
                        <th>Date</th>
                        <th>Trackin ID</th>
                        <th>Parcel Amount</th>
                        <th>Delivery Charge</th>
                        <th>Status</th>
                        <th>Payment</th>
                    </tr>
                </table>
                {
                    history.map((parcel, index) => <tr className='bg-[#EEEEEE] rounded-md grid md:grid-cols-7 mb-3 justify-items-center items-center shadow-lg text-sm font-josefin mt-1' key={parcel._id}>
                        <td>{index + 1}</td>
                        <td>{parcel.date}</td>
                        <td className='m-4 font-semibold' style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {parcel.trackingId}
                        </td>
                        <td className='font-semibold'>
                            <p>{parcel.product_amount} Tk</p>
                        </td>
                        <td>
                            {parcel?.total_amount} TK
                        </td>

                        <td>
                            {parcel?.status}
                        </td>
                        <td className='text-sm'>
                            <div className='flex flex-col gap-1'>
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
                            </div>
                        </td>
                    </tr>)
                }
            </div>
        </div>
    );
};

export default AdminPayment;