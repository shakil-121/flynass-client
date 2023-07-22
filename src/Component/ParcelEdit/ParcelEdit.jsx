import React from 'react';
import Swal from 'sweetalert2';

const ParcelEdit = ({ isVisible, onClose, invoiceParcel }) => {
    if (!isVisible) return null;
    console.log(invoiceParcel);

    const handleParcelUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const to_address = form.to_address.value;
        const updateInformation = {to_address: to_address}
        console.log(to_address);
        fetch(`http://localhost:5000/orders/${invoiceParcel._id}`, {
            method: 'PATCH',
            headers: {contentType: 'application/json'},
            body: JSON.stringify(updateInformation)
        });
        Swal.fire({
            icon: 'success',
            title: 'Done...',
            text: 'Your parcel information Successfully updated',
        })

    }
    return (
        <div className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-full md:w-[600px] flex flex-col  rounded-lg'>
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-black place-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className='bg-[#1E62D4] rounded-md p-10'>
                    <h1 className='text-white text-3xl font-pppins'>Edit Parcel Information</h1>
                    <div>
                        <h2 className='text-center text-xl text-white mt-5 font-pppins'>Merchant_ID: {invoiceParcel.marchent_id}</h2>
                        <form onSubmit={handleParcelUpdate}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">From </span>
                                </label>
                                <input type="text" placeholder="email" defaultValue={invoiceParcel.from_address} className="input input-bordered focus:outline-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">To </span>
                                </label>
                                <input type="text" placeholder="Enter address" name="to_address" defaultValue={invoiceParcel.to_address} className="input input-bordered focus:outline-none" />
                            </div>
                            <input className='btn btn-block mt-5' type="submit" value="Update" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParcelEdit;