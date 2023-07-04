import TrolleyMan from "../../../assets/RequestAQuote/pic1.png";
import icon1 from "../../../assets/RequestAQuote/icon1.png";
import icon2 from "../../../assets/RequestAQuote/icon2.png";
import SectionTitle from '../../../Component/SectionTitle';
import { FaArrowAltCircleDown, FaRegArrowAltCircleDown } from 'react-icons/fa';

const RequestAQuote = () => {
    return (
        <div className='mt-28 mb-48 bg-[#F2FAFF] pb-20'>
            <div className='p-10 bg-white w-1/3 mx-auto flex flex-col gap-2 shadow-2xl shadow-[#ff8800a1] -mt-1'>
                <h4 className='uppercase font-semibold'>24/7 Active Suport Team</h4>
                <h1 className='text-3xl text-[#ff8a00] font-bold'>Need Immediate Support Or Any Help?</h1>
                <h2 className='text-2xl font-bold'>(01303329413)</h2>
            </div>
            <SectionTitle subHeading="Request A Quote" heading="Booking For Product Transformation" />
            <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text <br /> ever since the when an printer took.</p>
            <div className="md:flex justify-center items-center relative">
                <div className="flex justify-center">
                    <img className="md:ml-48 h-[500px]" src={TrolleyMan} alt="" />
                </div>
                <div className="md:w-[1000px]">
                    <div className="absolute z-20 flex flex-col gap-10 mt-36 ">
                        <div className="w-44 h-32 bg-white flex flex-col items-center justify-center gap-2 border">
                            <img src={icon1} alt="" />
                            <h3 className="text-center font-semibold">Request A Quote</h3>
                        </div>
                        <div className="w-44 h-32 bg-white flex flex-col items-center justify-center gap-2 border">
                            <img className="opacity-50" src={icon2} alt="" />
                            <h3 className="text-center font-semibold opacity-50">Track & Trace</h3>
                        </div>
                    </div>
                    <div className="bg-white pt-14 ps-36 p-10 md:me-28 m-10 rounded-md shadow-xl shadow-[#7ABDE2]">
                        <div className="grid md:grid-cols-3 gap-3 mb-5">
                            <div className="form-control">
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="tel" placeholder="Phone" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3 mb-5">
                            <div className="form-control w-full ">
                                <select className="select select-bordered">
                                    <option disabled selected>Freight Type</option>
                                    <option>Star Wars</option>
                                    <option>Harry Potter</option>
                                    <option>Lord of the Rings</option>
                                    <option>Planet of the Apes</option>
                                    <option>Star Trek</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="City Of Departure" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-3 mb-5">
                            <div className="form-control">
                                <input type="text" placeholder="Delivery City" className="input input-bordered" />
                            </div>
                            <div className="form-control w-full ">
                                <select className="select select-bordered">
                                    <option disabled selected>Incoterms</option>
                                    <option>Star Wars</option>
                                    <option>Harry Potter</option>
                                    <option>Lord of the Rings</option>
                                    <option>Planet of the Apes</option>
                                    <option>Star Trek</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-4 gap-3 mb-5">
                            <div className="form-control">
                                <input type="text" placeholder="Weight" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Height" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Width" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Length" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-4 gap-3 mb-5">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox" />
                                Fragile
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox" />
                                Express Delivery
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox" />
                                Insurance
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox" />
                                Packaging
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-10 mt-10">
                            <button className="py-4 px-6 bg-[#FF8A00] flex items-center gap-5 text-2xl font-semibold">Submit Now <FaRegArrowAltCircleDown className="animate-bounce" /></button>
                            <h1 className="uppercase text-6xl font-extrabold opacity-20">Quote</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestAQuote;