import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MerchentParcelEdit from '../../Component/AdminParcelModal/MerchentParcel';
import { baseUrl } from '../../config/api';

const MyParclel = () => {
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(AuthContext); 

      // State to hold the search text
      const [searchText, setSearchText] = useState("");
        // State to hold the filtered parcels based on search text
     const [searchedParcel, setSearchedParcel] = useState([]); 


    // console.log(user);
    const { data: merchantParcel = [], isLoading, refetch } = useQuery(['order'], async () => {
        const res = await fetch(`${baseUrl}/user/order/${user?.email}`)
        return res.json();
    })

    const myParcel = merchantParcel.filter(parcel => parcel.status !== "delivered" && parcel.status !== "rejected" && parcel.status !== "returned to merchant");

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
                fetch(`${baseUrl}/order/${id}`, {
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
    if (isLoading) {
        return <div>Loading...</div>; // Show a loading state while data is being fetched
    }


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

    

    // Determine which parcels to show based on the search result
    const parcelsToShow = searchedParcel.length > 0 ? searchedParcel : myParcel; 
     
    
    return (
        <div>
            <div className="mt-10 h-[80vh] overflow-scroll">
               <div className='flex my-3 justify-between'>
               <h1 className='text-3xl font-pppins mb-3'>My Parcel</h1>
               <div className='flex'>
                            <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Tracking ID / Cus.Phone" className="input input-bordered w-full max-w-xs rounded-tr-none rounded-br-none focus:outline-none" />
                            <button 
                            disabled={!searchText}
                             onClick={handleSearch} className='btn rounded-tl-none rounded-bl-none bg-[#1E62D4] text-white hover:bg-[#f8417b] border-none'>Live Tracking</button>
                        </div>
               </div>
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead className=' bg-gray-400 text-black text-sm'>
                        <th>No.</th>
                        <th>Date</th>
                        <th>Tracking ID</th>
                        <th>Parcel Amount</th>
                        <th>Destination</th>
                        <th>Delivery Charge</th>
                        <th>Pending <br /> Amount</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        {
                            parcelsToShow.map((parcel, index) => <tr className='bg-[#EEEEEE] rounded-md mb-5 shadow-lg border-y-8 border-white p-20' key={parcel._id}>
                                <td className='text-sm'>{index + 1}</td>
                                <td className='text-sm'>{parcel.date}</td>
                                <td className='m-4 text-sm font-semibold' style={{ width: '20px', overflow: 'hidden', wordWrap: 'break-word' }}>
                                    {parcel.trackingId}
                                </td>
                                <td className='text-sm font-semibold'>
                                    <p>{parcel.product_amount} Tk</p>
                                </td>
                                {/* <td className='m-4 text-sm text-left' style={{ width: '180px', overflow: 'hidden', wordWrap: 'break-word' }}>
                                    <p>{parcel.name}</p>
                                    <p>{parcel.to_address}</p>
                                    <p>{parcel.district}</p>
                                    <p>{parcel.thana}</p>
                                    <p>{parcel.phone}</p>
                                </td> */}
                                <td className='text-sm w-[200px]'>
                                    <div className='flex flex-col gap-1'>
                                        <small><span className='font-bold'>Customer Name:</span> {parcel.name}</small>
                                        <small><span className='font-bold'>Customer Phone: </span>{parcel.phone}</small>
                                        <small><span className='font-bold'>Customer District: </span>{parcel.district}</small>
                                        <small><span className='font-bold'>Customer Thana: </span>{parcel.thana}</small>
                                        <small><span className='font-bold'>Customer Address: </span>{parcel.to_address}</small>
                                    </div>
                                </td>
                                <td className='text-[14px] font-semibold'>
                                    <p>delivery - {parcel.delivary_Charge}TK</p>
                                    <p>cod {parcel.cod}TK</p>
                                </td>
                                <td className='text-sm'>
                                    <div className='flex flex-col gap-1'>
                                        {
                                            parcel.status === 'pending' ?
                                                <>Pending</>
                                                :
                                                <>
                                                    {parcel.payable_amount} TK
                                                </>
                                        }

                                    </div>
                                </td>
                                <td className='text-sm'>
                                    {
                                        parcel.status === 'pending' ?
                                            <>
                                                <p className='font-semibold text-yellow-500'>{parcel.status}</p>
                                            </>
                                            :
                                            <>
                                                {
                                                    parcel.status === 'picked' ?
                                                        <>
                                                            <p className='font-semibold text-orange-500'>{parcel.status}</p>
                                                        </>
                                                        :
                                                        <>
                                                            {
                                                                parcel.status === 'on the way' ?
                                                                    <>
                                                                        <p className='font-semibold text-blue-500'>{parcel.status}</p>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        {
                                                                            parcel.status === 'hold' ?
                                                                                <>
                                                                                    <p className='font-semibold text-purple-900'>{parcel.status}</p>
                                                                                </>
                                                                                :
                                                                                <>
                                                                                    <p className='font-semibold text-black'>{parcel.status}</p>
                                                                                </>
                                                                        }
                                                                    </>
                                                            }
                                                        </>
                                                }
                                            </>
                                    }

                                    {/* <p className='font-semibold'>{parcel.status}</p> */}
                                </td>

                                {/* <td className='mx-auto'>
                                    {
                                        parcel.status === 'pending' ?
                                            <div className='flex justify-center'>
                                                <button onClick={() => setShowModal(parcel)} className='px-3 py-2 text-sm bg-[#1E62D4] hover:bg-[#1E62D4] flex items-center gap-1 rounded-md text-white'><FaRegEdit />Edit</button>
                                            </div>
                                            :
                                            <>
                                                <h1 className='text-sm text-error'>Not <br />changeable</h1>
                                            </>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteParcel(parcel._id)} className='btn rounded-full bg-[#D53343] text-white hover:bg-[#D53343]'><FaTrashAlt /></button>
                                </td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* <MerchentParcelEdit isVisible={showModal} onClose={() => setShowModal(false)}></MerchentParcelEdit> */}

        </div>
    );
};

export default MyParclel;