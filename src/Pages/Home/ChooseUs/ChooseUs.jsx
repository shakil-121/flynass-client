import { Link } from 'react-router-dom';
import pic1 from '../../../assets/ChooseUs/pic1.jpg';
import pic2 from '../../../assets/ChooseUs/pic2.jpg';
import SectionTitle from '../../../Component/SectionTitle';
import { FaCar, FaMoneyBillAlt, FaUser } from 'react-icons/fa';
import { FcClock, FcBullish, FcCallback, FcCalendar, FcShipped } from "react-icons/fc";

const ChooseUs = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='mt-28'>
                <div className='p-5'>
                    <SectionTitle subHeading="why choose us" heading="We Are Professional Logistics & cargi Agency" />
                    <p className='font-semibold'>Sed ut perspiciatis unde omnis iste natus error volup tatem accusantium dolorem que laudantium, totam rem aperiam, eaque ipsa illo inventore.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiam, que ipsa quae ab illo inventore veritatis quasi architecto beatae itae dicta sunt explicabo. Nemo enim ipsam voluptate voluptas sitr atur aut odit aut fugit, sed quia consequuntur magni dolores is eos qui ratione voluptatem sequi nesciunt.</p>
                    <Link to='/coverage'>
                        <button className='btn bg-[#ff8a00] mt-5'>Learn More ---</button>
                    </Link>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 mt-20 p-4'>
                    <div className='p-4 bg-[#F4FBFE] flex flex-col gap-4'>
                        <FcClock className='text-6xl mx-auto -mt-10'/>
                        <h1 className='text-xl font-pppins text-center'>Realtime Tracking</h1>
                        <p className='font-pppins text-center'>International standard <br /> tracking via online</p>
                    </div>
                    <div className='p-4 bg-[#F4FBFE] flex flex-col gap-4'>
                        <FcBullish className='text-6xl mx-auto -mt-10'/>
                        <h1 className='text-xl font-pppins text-center'>Realtime Tracking</h1>
                        <p className='font-pppins text-center'>International standard <br /> tracking via online</p>
                    </div>
                    <div className='p-4 bg-[#F4FBFE] flex flex-col gap-4'>
                        <FaUser className='text-6xl mx-auto -mt-10'/>
                        <h1 className='text-xl font-pppins text-center'>Realtime Tracking</h1>
                        <p className='font-pppins text-center'>International standard <br /> tracking via online</p>
                    </div>
                    <div className='p-4 bg-[#F4FBFE] flex flex-col gap-4'>
                        <FaMoneyBillAlt className='text-6xl mx-auto -mt-10'/>
                        <h1 className='text-xl font-pppins text-center'>Realtime Tracking</h1>
                        <p className='font-pppins text-center'>International standard <br /> tracking via online</p>
                    </div>
                    <div className='p-4 bg-[#F4FBFE] flex flex-col gap-4'>
                        <FcCallback className='text-6xl mx-auto -mt-10'/>
                        <h1 className='text-xl font-pppins text-center'>Realtime Tracking</h1>
                        <p className='font-pppins text-center'>International standard <br /> tracking via online</p>
                    </div>
                    <div className='p-4 bg-[#F4FBFE] flex flex-col gap-4'>
                        <FaCar className='text-6xl mx-auto -mt-10'/>
                        <h1 className='text-xl font-pppins text-center'>Realtime Tracking</h1>
                        <p className='font-pppins text-center'>International standard <br /> tracking via online</p>
                    </div>
                    <div className='p-4 bg-[#F4FBFE] flex flex-col gap-4'>
                        <FcCalendar className='text-6xl mx-auto -mt-10'/>
                        <h1 className='text-xl font-pppins text-center'>Realtime Tracking</h1>
                        <p className='font-pppins text-center'>International standard <br /> tracking via online</p>
                    </div>
                    <div className='p-4 bg-[#F4FBFE] flex flex-col gap-4'>
                        <FcShipped className='text-6xl mx-auto -mt-10'/>
                        <h1 className='text-xl font-pppins text-center'>Realtime Tracking</h1>
                        <p className='font-pppins text-center'>International standard <br /> tracking via online</p>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <h1 className='md:text-8xl text-6xl -z-10 font-bold opacity-20 text-center mb-10'>LOGISTICS</h1>
            </div>
        </div>
    );
};

export default ChooseUs;