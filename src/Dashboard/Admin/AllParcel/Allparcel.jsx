import React, { useState } from 'react';
import ParcelRejectForm from './ParcelRejectForm';
import useParcel from '../../../Hooks/useParcel';
import { FaEye, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const AllParcel = () => {
    // State to manage the modal visibility
    const [showModal, setShowModal] = useState(false);

    // State to hold the search text
    const [searchText, setSearchText] = useState("");

    // Fetch all parcels using a custom hook 'useParcel'
    const [allParce, refetch] = useParcel();

    // State to hold the filtered parcels that are not delivered or rejected
    const needParcel = allParce.filter(parcel => parcel.status !== "delivered" && parcel.status !== "rejected");

    // Function to handle the status update of a parcel
    const handleStatusUpdate = (status, id) => {
        console.log(status, id);
        const statusUpdate = { status };
        fetch(`http://localhost:5000/order/status/${id}`, {
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

    // Function to handle the payment status update of a parcel
    const handlePaymentStatus = id => {
        fetch(`http://localhost:5000/order/payment/${id}`, {
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

    // Function to handle the search of parcels based on the search text
    const handleSearch = () => {
        fetch(`http://localhost:5000/orders/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // Update the 'searchedParcel' state with the fetched data
                setSearchedParcel(data);
            });
    };

    // Filter parcels based on their status
    const pending = allParce.filter(item => item.status === "pending");
    const picked = allParce.filter(item => item.status === "picked");
    const onWay = allParce.filter(item => item.status === "On The Way");
    const hold = allParce.filter(item => item.status === "hold");

    // State to hold the filtered parcels based on search text
    const [searchedParcel, setSearchedParcel] = useState([]);

    // Determine which parcels to show based on the search result
    const parcelsToShow = searchedParcel.length > 0 ? searchedParcel : needParcel;

    // State to hold the selected parcels
    const [selectedParcels, setSelectedParcels] = useState([]);

    // Function to toggle the selection of a parcel
    const toggleParcelSelection = (id) => {
        setSelectedParcels((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((selectedId) => selectedId !== id)
                : [...prevSelected, id]
        );
    };

    // const handleStatusUpdateForSelected = (status) => {
    //     const selectedParcelIds = selectedParcels.map((id) => id); // Remove the ObjectId conversion
    //     fetch('http://localhost:5000/order/status', {
    //       method: 'PUT',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ ids: selectedParcelIds, status }),
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.acknowledged) {
    //         Swal.fire({
    //           title: "Done!",
    //           text: "Status update successfully",
    //           icon: "success",
    //           confirmButtonText: "Ok",
    //         });
    //       }
    //       refetch();
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       // Handle error if any
    //     });
    //   };
 
     // Function to handle the status update of selected parcels
const handleStatusUpdateForSelected = (status) => {
    const selectedParcelIds = selectedParcels.map((id) => id);
    const updateData = {
      ids: selectedParcelIds,
      status: status,
    };
    fetch('http://localhost:5000/order/status', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
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
    })
    .catch((error) => {
      console.error(error);
      // Handle error if any
    });
  };

    return (
        <div>
            <div className='h-[95vh] overflow-scroll w-[75vw] px-16 pt-5 bg-sky-400'>
                <div>
                    <h1 className='text-3xl font-pppins mb-3'>All Parcel</h1>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-5 divide-x-2 divide-black items-center text-2xl mb-3 text-black '>
                            <div className="dropdown dropdown-bottom text-black">
                                <label tabIndex={0} className=""><button className='underline'>Status Change</button></label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48">
                                    <li onClick={() => handleStatusUpdateForSelected('picked')}><a>Picked</a></li>
                                    <li onClick={() => handleStatusUpdateForSelected('on the way')}><a>On The Way</a></li>
                                    <li onClick={() => handleStatusUpdateForSelected('delivered')}><a>Delivered</a></li>
                                    <li onClick={() => handleStatusUpdateForSelected('hold')}><a>Hold</a></li>
                                    <li onClick={() => handleStatusUpdateForSelected('returned')}><a>Return</a></li>
                                    <li onClick={() => handleStatusUpdateForSelected('returned to merchant')}><a>Return to Merchant</a></li>
                                </ul>
                            </div>
                            <p className='ps-3'>Pending: {pending.length}</p>
                            <p className='ps-3'>Picked: {picked.length}</p>
                            <p className='ps-3'>On The Way: {onWay.length}</p>
                            <p className='ps-3'>Hold: {hold.length}</p>
                        </div>

                        <div className='flex'>
                            <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Tracking ID" className="input input-bordered w-full max-w-xs rounded-tr-none rounded-br-none focus:outline-none" />
                            <button onClick={handleSearch} className='btn rounded-tl-none rounded-bl-none bg-[#1E62D4] text-white hover:bg-[#1E62D4] border-none'>Track Now</button>
                        </div>
                    </div>
                </div>
                <table className="table table-xs  table-pin-rows table-pin-cols">
                    <thead className='bg-gray-400 text-black'>
                        <th>
                            <label>
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
                        <th className='text-center'>view <br />
                            Invoice
                        </th>
                        <th>Payable <br />
                            Amount</th>
                        <th>Reject</th>
                    </thead>
                    <tbody>
                        {
                            parcelsToShow.map((parcel, index) => (
                                <tr className='bg-[#EEEEEE] rounded-md mb-5 shadow-lg border-y-8 border-white p-20' key={parcel._id}>
                                    <td>
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                onChange={() => toggleParcelSelection(parcel._id)}
                                                checked={selectedParcels.includes(parcel._id)}
                                            />
                                        </label>
                                    </td>
                                    <td className='text-sm'>7/10/2023</td>
                                    <td>
                                        <div className="dropdown dropdown-bottom text-black">
                                            <label tabIndex={0} className="">
                                                <button className='px-3 py-1 rounded-md text-xl font-semibold bg-[#1E62D4] text-white'>{parcel.status}</button>
                                            </label>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48">
                                                <li onClick={() => handleStatusUpdate('picked', parcel._id)}><a>Picked</a></li>
                                                <li onClick={() => handleStatusUpdate('on the way', parcel._id)}><a>On The Way</a></li>
                                                <li onClick={() => handleStatusUpdate('delivered', parcel._id)}><a>Delivered</a></li>
                                                <li onClick={() => handleStatusUpdate('hold', parcel._id)}><a>Hold</a></li>
                                                <li onClick={() => handleStatusUpdate('returned', parcel._id)}><a>Return</a></li>
                                                <li onClick={() => handleStatusUpdate('returned to merchant', parcel._id)}><a>Return to Merchant</a></li>
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
                                        <Link to={`../invoice/${parcel._id}`}>
                                            <p className='flex items-center gap-1 bg-[#1E62D4] text-white px-2 py-1 rounded-md'>Invoice</p>
                                        </Link>
                                    </td>
                                    <td className='text-xl'>
                                        <div className='flex flex-col gap-1'>
                                            <span>{parcel.payable_amount} Tk.</span>
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
                                    <td className='text-xl'>
                                        <button onClick={() => handleStatusUpdate('rejected', parcel._id)} className="font-serif btn-sm btn-warning rounded-md">Reject</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <button onClick={() => handleStatusUpdateForSelected('selected_status')}>Update Status</button>
        </div>
    );
};

export default AllParcel;