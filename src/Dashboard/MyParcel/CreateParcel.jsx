import { FaIdCard } from "react-icons/fa";
import { AiOutlineNumber } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { useForm } from "react-hook-form";
import './CreateParcel.css'
import { useEffect, useState } from "react";

const CreateParcel = ({ isVisible, onClose, user }) => {
    const [district, setDistrict] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [cod, setCod] = useState(0);
    if (!isVisible) return null;

    console.log(cod);

    const handleDistrictonChange = (e) => {
        const selectDistrict = e.target.value;
        setDistrict(selectDistrict);
        // Reset sub-category when category changes
        setSubCategory('');
    };

    const handleSubCategoryChange = (e) => {
        const selectedSubCategory = e.target.value;
        setSubCategory(selectedSubCategory);
    };

    const handleParcelAmount = (event) => {
        const codAmount = (event.target.value);
        const COD = codAmount / 100;

        if (district == 'Dhaka') {
            setCod(0)
        }
        setCod(COD)


    };

    return (
        <div className=' fixed inset-0 left-96 bg-opacity-25 backdrop-blur-sm flex justify-center'>
            <div className='w-full md:w-[800px] flex flex-col  rounded-lg'>
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-[#E4D804] text-white place-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="height-vh overflow-y-scroll bg-sky-200 bg-opacity-40 py-4 rounded-xl">
                    <form className="card-body text-black">
                        <div>
                            <h1 className="font-pppins text-3xl pb-5 font-bold text-white">
                                Create a Parcel
                            </h1>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="leading-10">
                                <label htmlFor="district">Select Delivery District</label>
                                <select className="w-full p-3" id="district" value={district} onChange={handleDistrictonChange}>
                                    <option value="">Select a category</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="jamalpur">Jamalpur</option>
                                    <option value="sherpur">Sherpur</option>
                                </select>
                            </div>
                            <div className="leading-10">
                                <label htmlFor="subcategory">Select Delivery District</label>
                                <select className="w-full p-3" id="subcategory" value={subCategory} onChange={handleSubCategoryChange}>
                                    <option value="">Select Delivery Thana</option>
                                    {district === 'Dhaka' && (
                                        <>
                                            <option value="adabor-thana">Adabor Thana</option>
                                            <option value="airport-thana">Airport Thana</option>
                                            <option value="badda-thana">Badda Thana</option>
                                            <option value="bangshal-thana">Bangshal Thana</option>
                                            <option value="bhatara-thana">Bhatara Thana</option>
                                            <option value="bhasantek-thana">Bhashantek Thana</option>
                                            <option value="demra-thana">Demra Thana</option>
                                            <option value="dhanmondi-thana">Dhanmondi Thana</option>
                                            <option value="gulshan-thana">Gulshan Thana</option>
                                            <option value="airport">Hazaribagh Thana</option>
                                            <option value="jatrabari-thana">Jatrabari Thana</option>
                                            <option value="kadamtali-thana">Kadamtali Thana</option>
                                            <option value="kamrangirchar-thana">Kamrangirchar Thana</option>
                                            <option value="keraniganj-thana">Keraniganj Thana</option>
                                            <option value="khaligaon-thana">Khilgaon Thana</option>
                                            <option value="kotwali-thana">Kotwali Thana</option>
                                            <option value="lalbag-thana">Lalbagh Thana</option>
                                            <option value="mirpur-thana">Mirpur Thana</option>
                                            <option value="mohammadpur-thana">Mohammadpur Thana</option>
                                            <option value="pollobi-thana">Pallabi Thana</option>
                                            <option value="rampura-thana">Rampura Thana</option>
                                            <option value="rupnagar-thana">Rupnagar Thana</option>
                                            <option value="sabujbag-thana">Sabujbag Thana</option>
                                            <option value="sherebangla-nogor">Sherebangla Nagar Thana</option>
                                            <option value="shyampur-thana">Shyampur Thana</option>
                                            <option value="sutrapur-thana">Sutrapur Thana</option>
                                            <option value="tejgaon-thana">Tejgaon Model Thana</option>
                                        </>
                                    )}
                                    {district === 'jamalpur' && (
                                        <>
                                            <option value="jamalpur-sodor">Jamalpur Sodor Thana</option>
                                            <option value="melandaha-thana">Melandaha Upazila</option>
                                            <option value="sarishabari-thana">Sarishabari Thana</option>
                                            <option value="Madargonj-thana">Madargonj Model Thana</option>
                                            <option value="islampur-thana">Islampur THana</option>
                                            <option value="Baksiganj-thana">Baksiganj Thana</option>
                                            <option value="Dewanganj Thana">Dewangoaj Thana</option>
                                        </>
                                    )}
                                    {district === 'sherpur' && (
                                        <>
                                            <option value="sherpur-sadar">Sherpur Sadar Thana</option>
                                            <option value="nokla-thana">Nakla Upazila</option>
                                            <option value="sreebardi-thana">Sreebardi Thana</option>
                                            <option value="nalitabari-thana">Nalitabari Thana</option>
                                            <option value="jhenaigati-thana">Jhenaigati Thana</option>
                                        </>
                                    )}
                                </select>
                            </div>

                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-pppins">Parcel Amount</span>
                                </label>
                                <input onChange={handleParcelAmount} type="text" placeholder="Amount" name='amount' className="input input-bordered" />
                            </div>
                        </div>
                        <div>
                            <input className="btn btn-block" type="submit" value="Submit" />
                        </div>
                    </form>
                    <div>
                        COD:{cod}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateParcel;