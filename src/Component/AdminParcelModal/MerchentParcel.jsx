import React from 'react';
import Swal from 'sweetalert2';

const MerchentParcelEdit = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const handleParcelUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const to_address = form.to_address.value;
        const from_address = form.from_address.value;
        const updateInformation = {to_address,from_address}
        console.log(updateInformation);
        fetch(`http://localhost:5000/order/${isVisible._id}`, {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(updateInformation)
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire({
              title: "Update",
              text: "Toy Update Successfully",
              icon: "success",
              confirmButtonText: "Update",
            });
          }
          form.reset();
          console.log(data);
        });

    }

    return (
        <div className='z-20 fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-full md:w-[600px] flex flex-col  rounded-lg'>
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-black place-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className='bg-[#7865e3] rounded-md p-10'>
                    <h1 className='text-white text-3xl font-pppins text-center'>Edit Parcel Information</h1>
                    <div>
                        <h2 className='text-center text-xl text-white mt-5 font-pppins'>Merchant_ID: {isVisible.marchent_id}</h2>
                        <form onSubmit={handleParcelUpdate}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">From </span>
                                </label>
                                <input type="text" placeholder="email" name='from_address' defaultValue={isVisible.from_address} className="input input-bordered focus:outline-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">To </span>
                                </label>
                                <input type="text" placeholder="Enter address" name="to_address" defaultValue={isVisible.to_address} className="input input-bordered focus:outline-none" />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Delivery Charge</span>
                                </label>
                                <input type="text" name="total_amount" placeholder={isVisible.total_amount} className="input input-bordered focus:outline-none" />
                            </div> */}
                            <input className='btn btn-block mt-5' type="submit" value="Update" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MerchentParcelEdit;