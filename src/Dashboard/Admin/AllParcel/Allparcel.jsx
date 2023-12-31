import React, { useState } from 'react';
import ParcelRejectForm from './ParcelRejectForm';
import useParcel from '../../../Hooks/useParcel';
import { FaEye, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { baseUrl } from '../../../config/api';
// import api from "../../../CentralAPI/API"

const AllParcel = () => {
    // State to manage the modal visibility
    const [showModal, setShowModal] = useState(false);

    // State to hold the search text
    const [searchText, setSearchText] = useState("");

    // Fetch all parcels using a custom hook 'useParcel'
    const [allParce, refetch] = useParcel();

    // State to hold the filtered parcels that are not delivered or rejected
    const needParcel = allParce.filter(parcel => parcel.status !== "delivered" && parcel.status !== "rejected" && parcel.status !== "returned to merchant" && parcel.status !== "returned");

    // Function to handle the status update of a parcel
    const handleStatusUpdate = (status, id) => {
        // console.log(status, id);
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

    // Function to handle the payment status update of a parcel


    // Function to handle the search of parcels based on the search text
    const handleSearch = () => {
        fetch(`${baseUrl}/orders/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                // Update the 'searchedParcel' state with the fetched data
                setSearchedParcel(data);
            });
    };

    // Filter parcels based on their status
    const pending = allParce.filter(item => item.status === "pending");
    const picked = allParce.filter(item => item.status === "picked");
    const onWay = allParce.filter(item => item.status === "on the way");
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
    //     fetch('http://62.72.29.251:5000/order/status', {
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
        fetch(`${baseUrl}/order/multi-status`, {
            method: 'PATCH',
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
                    // Clear the selected parcels after successful status update
                    setSelectedParcels([]);
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
            <div className='overflow-hidden px-6 pt-2 bg-sky-400'>
                <div>
                    <h1 className='text-2xl font-pppins'>All Parcel</h1>
                    <div className='flex items-center justify-between mb-1'>
                        <div className='flex gap-5 divide-x-2 divide-black items-center text-2xl mb-3 text-black '>
                            <div className="dropdown dropdown-bottom text-black text-sm font-pppins">
                                <label tabIndex={0} className=""><button className='underline'>Status Change</button></label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48">
                                    <li onClick={() => handleStatusUpdateForSelected('picked')}><a>Picked</a></li>
                                    <li onClick={() => handleStatusUpdateForSelected('on the way')}><a>On The Way</a></li>
                                    <li onClick={() => handleStatusUpdateForSelected('delivered')}><a>Delivered</a></li>
                                    <li onClick={() => handleStatusUpdateForSelected('hold')}><a>Hold</a></li>
                                    <li onClick={() => handleStatusUpdateForSelected('returned')}><a>Return</a></li>
                                    <li onClick={() => handleStatusUpdateForSelected('in transit')}><a>In Transit</a></li>
                                    <li onClick={() => handleStatusUpdateForSelected('returned to merchant')}><a>Return to Merchant</a></li>
                                </ul>
                            </div>
                            <p className='ps-3 text-sm font-medium'>Pending: {pending?.length}</p>
                            <p className='ps-3 text-sm font-medium'>Picked: {picked?.length}</p>
                            <p className='ps-3 text-sm font-medium'>On The Way: {onWay?.length}</p>
                            <p className='ps-3 text-sm font-medium'>Hold: {hold?.length}</p>
                        </div>
                        <div className='flex'>
                            <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Tra.ID/Mer.Name/Phone" className="input input-bordered w-full max-w-xs rounded-tr-none rounded-br-none focus:outline-none" />
                            <button onClick={handleSearch} className='btn rounded-tl-none rounded-bl-none bg-[#1E62D4] text-white hover:bg-[#1E62D4] border-none'>Track Now</button>
                        </div>
                    </div>
                </div>

                <div className='overflow-x-scroll h-[84vh]'>
                    <table className="table table-xs  table-pin-rows table-pin-cols w-[1200px] 2xl:w-full">
                        <thead className='bg-gray-400 text-black'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Date</th>
                            <th>Status</th>

                            {/* fixing prpblem date 29/09/23 */}
                            <th>Merchent <br /> Name</th>
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
                                    <tr className='bg-[#EEEEEE] rounded-md mb-5 shadow-lg border-y-8 border-white p-20 text-xs' key={parcel._id}>
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
                                        <td className='text-sm'>{parcel.date}</td>
                                        <td>
                                            <div className="dropdown dropdown-bottom text-black">
                                                <label tabIndex={0} className="">
                                                    <button className='px-3 py-1 rounded-md text-xs font-semibold bg-[#1E62D4] text-white'>{parcel.status}</button>
                                                </label>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100  w-48">
                                                    <li onClick={() => handleStatusUpdate('picked', parcel._id)}><a>Picked</a></li>
                                                    <li onClick={() => handleStatusUpdate('on the way', parcel._id)}><a>On The Way</a></li>
                                                    <li onClick={() => handleStatusUpdate('delivered', parcel._id)}><a>Delivered</a></li>
                                                    <li onClick={() => handleStatusUpdate('hold', parcel._id)}><a>Hold</a></li>
                                                    <li onClick={() => handleStatusUpdate('returned', parcel._id)}><a>Return</a></li>
                                                    <li onClick={() => handleStatusUpdate('in transit', parcel._id)}><a>In Transit</a></li>
                                                    <li onClick={() => handleStatusUpdate('returned to merchant', parcel._id)}><a>Return to Merchant</a></li>
                                                </ul>
                                            </div>
                                        </td>

                                        {/* fixing problem date 29/09/23 */}
                                        <td className='text-sm font-semibold'>
                                            {parcel.merchant_name}
                                        </td>
                                        <td className='m-4 text-sm font-semibold' style={{ whiteSpace: 'pre-wrap', maxHeight: '2em', overflow: 'hidden', maxWidth: '6em', textOverflow: 'ellipsis' }}>
                                            {parcel.trackingId}
                                        </td>
                                        <td className='text-sm font-semibold'>
                                            {parcel.product_amount}Tk
                                        </td>
                                        <td className='text-sm'>
                                            <div className='flex flex-col gap-1'>
                                                <span>Delivery - {parcel.delivary_Charge}Tk</span>
                                                <span>COD - {parcel.cod}Tk</span>
                                            </div>
                                        </td>
                                        <td className='text-sm w-[200px]'>
                                            <div className='flex flex-col gap-1'>
                                                <small><span className='font-bold'>Customer Name:</span> {parcel.name}</small>
                                                <small><span className='font-bold'>Customer Phone: </span>{parcel.phone}</small>
                                                <small><span className='font-bold'>Customer District: </span>{parcel.district}</small>
                                                <small><span className='font-bold'>Customer Thana: </span>{parcel.thana}</small>
                                                <small><span className='font-bold'>Customer Address: </span>{parcel.to_address}</small>
                                            </div>
                                        </td>
                                        <td className='text-sm'>
                                            <Link to={`../invoice/${parcel._id}`}>
                                                <p className='bg-[#1E62D4] text-center text-white px-1 py-1 rounded-md'>Invoice</p>
                                            </Link>
                                        </td>
                                        <td className='text-sm font-pppins text-center'>
                                            {parcel.payable_amount} TK
                                        </td>
                                        <td className='text-xl'>
                                            <button onClick={() => handleStatusUpdate('rejected', parcel._id)} className="font-serif btn-sm bg-[#D53343] text-white rounded-md">Reject</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllParcel;