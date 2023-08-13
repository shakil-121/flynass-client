import { FaIdCard } from "react-icons/fa";
import { AiOutlineNumber } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import useUserInfo from "../../Hooks/useUserInfo";
import Swal from "sweetalert2";
import Select from "react-select";
import { useState } from "react";

const ProfileUpdate = ({ isVisible, onClose, user }) => {
    if (!isVisible) return null;
    const userInfo = useUserInfo();
    console.log(userInfo._id);
    const [methodSeleted, setBankSelected] = useState(null);

    console.log(methodSeleted);
    const handleSelectedPMethod = (e) => {
        const methodSeleted = e.value;
        setBankSelected(methodSeleted);
    };

    const selectedMethod = [
        { value: "Bkash", label: "Bkash" },
        { value: "Nagad", label: "Nagad" },
        { value: "Bank", label: "Bank" },
    ];

    const handleUpdateProfile = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const account_number= form.account_number.value;
        const bank_name= form.bank_name?.value;
        const branch_name= form.branch_name?.value;
        const payment_method= form.payment_method?.value;
        const routing_number= form.routing_number?.value;
        // console.log(address);
        const updateProfileInfo = { name, phone, address,account_number,bank_name,branch_name,payment_method,payment_method,routing_number} 

        console.log(updateProfileInfo)
        fetch(`http://localhost:5000/user/update/${userInfo._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateProfileInfo)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Update",
                        text: "Profile update successfully",
                        icon: "success",
                        confirmButtonText: "Update",
                    });
                }
                form.reset();
                console.log(data);
            });
    }

    return (
        <div className='fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-full md:w-[600px] flex flex-col  rounded-lg'>
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-black place-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className='bg-[#1E62D4] rounded-md p-10'>
                    <h1 className='text-white text-3xl font-pppins'>Update Your Profile</h1>
                    <div>
                        <form onSubmit={handleUpdateProfile}>
                            <div className="flex justify-between text-white mb-5 mt-5">
                                <span className="font-serif font-medium flex items-center gap-2 text-blaclk"><IoMdMail />{userInfo.email}</span>

                                <span className="font-serif font-medium flex items-center gap-2 text-blaclk"><AiOutlineNumber />{userInfo._id}</span>

                                <span className="font-serif font-medium flex items-center gap-2 text-blaclk"><FaIdCard />{userInfo.NID}</span>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='mb-4'>
                                    <label className='block text-sm font-bold text-white'>Your Name</label>
                                    <input type='text' name="name" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder={userInfo.name} />
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-sm font-bold text-white'>Phone</label>
                                    <input type='text' name="phone" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter Address' defaultValue={userInfo.phone} />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <label className='block text-sm font-bold text-white'>Address</label>
                                <input type='text' name="address" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter Address' defaultValue={userInfo.address} />
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='mb-4'>
                                    <label className='block text-sm font-bold text-white'>Payment Method</label>
                                    <div>
                                        <Select
                                            options={selectedMethod}
                                            // defaultValue={currentDistrict} 
                                            name="payment_method"
                                            placeholder="Select Payment Method"
                                            onChange={handleSelectedPMethod}
                                            isSearchable
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-sm font-bold text-white'>Account Number</label>
                                    <input type='text' name="account_number" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Account Number' required />
                                </div>

                            </div>
                            {
                                methodSeleted === 'Bank' &&
                                <div className='grid grid-cols-2 gap-2'>
                                    <div className='mb-4'>
                                        <label className='block text-sm font-bold text-white'>Bank Name</label>
                                        <input type='text' name="bank_name" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Bank Name' required />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-sm font-bold text-white'>Branch Name</label>
                                        <input type='text' name="branch_number" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Branch Name' required />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-sm font-bold text-white'>Routing Nunber</label>
                                        <input type='text' name="routing_number" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Routing Number' required />
                                    </div>
                                </div>
                            }
                            <div>
                                <input className="btn btn-block" type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdate;