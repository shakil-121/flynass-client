import { FaIdCard } from "react-icons/fa";
import { AiOutlineNumber } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { useForm } from "react-hook-form";
import './CreateParcel.css'

const CreateParcel = ({ isVisible, onClose, user }) => {
    if (!isVisible) return null;

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className=' fixed inset-0 left-96 bg-opacity-25 backdrop-blur-sm flex justify-center'>
            <div className='w-full md:w-[800px] flex flex-col  rounded-lg'>
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-[#E4D804] text-white place-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="height-vh overflow-y-scroll bg-sky-200 bg-opacity-40 py-4 rounded-xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div>
                            <h1 className="font-pppins text-3xl pb-5 font-bold text-white">
                                Create a Parcel
                            </h1>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-5">
                            <div className="form-control">
                                <input
                                    name="phone"
                                    {...register("phone", { required: true })}
                                    type="text"
                                    placeholder="Phone"
                                    className="input border-slate-300 text-black focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    name="name"
                                    {...register("name", { required: true })}
                                    type="text"
                                    placeholder="Name"
                                    className="input border-slate-300 text-black focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-5">
                            <div className="form-control">
                                <input
                                    name="district"
                                    {...register("distric", { required: true })}
                                    type="text"
                                    placeholder="Select Delivery District"
                                    className="input border-slate-300 text-black focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    name="thana"
                                    {...register("thana", { required: true })}
                                    type="text"
                                    placeholder="Thana"
                                    className="input border-slate-300 text-black focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="form-control">
                                <input
                                    name="customer-details"
                                    {...register("customer-details", { required: true })}
                                    type="text"
                                    placeholder="Cunstomer Address Details"
                                    className="input border-slate-300 text-black focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    name="Select Product Weight"
                                    {...register("products-weight", { required: true })}
                                    type="text"
                                    placeholder="0-1kg"
                                    className="input border-slate-300 text-black focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-zinc-950 border-none text-white hover:text-black">
                                Create Parcel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateParcel;