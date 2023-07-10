import { FaIdCard } from "react-icons/fa";
import { AiOutlineNumber } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

const ProfileUpdate = ({ isVisible, onClose, user }) => {
    if (!isVisible) return null;

    return (
        <div className='fixed inset-0 md:left-1/4  bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-full md:w-[600px] flex flex-col  rounded-lg'>
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-[#E4D804] text-white place-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className='bg-red-200 rounded-md p-10'>
                    <h1 className='text-black text-3xl font-pppins'>Update Your Profile</h1>
                    <div>
                        <form>
                            <div className="flex justify-between text-black mb-5 mt-5">
                                <span className="font-serif font-medium flex items-center gap-2 text-blaclk"><IoMdMail />codersrabbi@gmail.com</span>

                                <span className="font-serif font-medium flex items-center gap-2 text-blaclk"><AiOutlineNumber />FN-12102</span>

                                <span className="font-serif font-medium flex items-center gap-2 text-blaclk"><FaIdCard />7307890245</span>
                            </div>
                            <div className='flex justify-between'>
                                <div className='mb-4'>
                                    <label className='block text-sm font-bold text-gray-700'>Your Name</label>
                                    <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter Name' defaultValue={user.displayName} />
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-sm font-bold text-gray-700'>Address</label>
                                    <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter Address' defaultValue="N/A" />
                                </div>
                            </div>
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