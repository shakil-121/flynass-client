import React from 'react';
import Swal from 'sweetalert2';
import { baseUrl } from '../../config/api';

const AdminParcelEdit = ({ isVisible, onClose, refetch }) => {
    if (!isVisible) return null;

    const handleParcelUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const from_address = form.from_address.value;
        const to_address = form.to_address.value;
        const delivary_Charge = form.delivary_Charge.value;
        const cod = form.cod.value;
        const total_amount = parseFloat(delivary_Charge) + parseFloat(cod);
        const payable_amount = parseFloat(isVisible?.product_amount) - total_amount;
        const updateInformation = { from_address, to_address, delivary_Charge, cod, total_amount, payable_amount };

        console.log(updateInformation);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to be Upadte this parcel Info!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update Info!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${baseUrl}/order/admin/${isVisible._id}`, {
                    method: 'PUT',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(updateInformation)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        refetch();
                        if (data.modifiedCount > 0) {
                            Swal.fire("Updated!", "This parcel update.", "successfull");
                        }
                    });
            }
        });

    }

    return (
        <div className='z-20 fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-full md:w-[600px] flex flex-col  rounded-lg'>
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-black place-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className='bg-[#1E62D4] rounded-md p-10'>
                    <h1 className='text-white text-3xl font-pppins text-center'>Edit Parcel Information</h1>
                    <div>
                        <h2 className='text-center text-xl text-white mt-5 font-pppins'>Merchant_ID: {isVisible.marchent_id}</h2>
                        <form onSubmit={handleParcelUpdate}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">From </span>
                                </label>
                                <input type="text" name='from_address' defaultValue={isVisible.from_address} className="input input-bordered focus:outline-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Customer Address</span>
                                </label>
                                <input type="text" name="to_address" defaultValue={isVisible.to_address} className="input input-bordered focus:outline-none" />
                            </div>
                            <div className='grid grid-cols-2 gap-3'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Delivery Charge</span>
                                    </label>
                                    <input type="text" name="delivary_Charge" defaultValue={isVisible.delivary_Charge} placeholder="Parcel Delivery Charge" className="input input-bordered focus:outline-none" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">COD</span>
                                    </label>
                                    <input type="text" name="cod" defaultValue={isVisible.cod} placeholder="Enter Parcel COD" className="input input-bordered focus:outline-none" />
                                </div>
                            </div>
                            <input className='btn btn-block mt-5' type="submit" value="Update" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminParcelEdit;