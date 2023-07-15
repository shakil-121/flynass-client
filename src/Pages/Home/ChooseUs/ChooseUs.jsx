import { Link } from 'react-router-dom';
import pic1 from '../../../assets/ChooseUs/pic1.jpg';
import pic2 from '../../../assets/ChooseUs/pic2.jpg';
import SectionTitle from '../../../Component/SectionTitle';

const ChooseUs = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='p-5'>
                <SectionTitle subHeading="why choose us" heading="We Are Professional Logistics & cargi Agency" />
                <p className='font-semibold'>Sed ut perspiciatis unde omnis iste natus error volup tatem accusantium dolorem que laudantium, totam rem aperiam, eaque ipsa illo inventore.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiam, que ipsa quae ab illo inventore veritatis quasi architecto beatae itae dicta sunt explicabo. Nemo enim ipsam voluptate voluptas sitr atur aut odit aut fugit, sed quia consequuntur magni dolores is eos qui ratione voluptatem sequi nesciunt.</p>
                <Link to='/coverage'>
                <button className='btn bg-[#ff8a00] mt-5'>Learn More ---</button>
                </Link>
            </div>
            <div className='md:flex justify-center'>
                <div>
                    <img className='mx-auto' src={pic1} alt="" />
                </div>
                <div>
                    <img className='mx-auto' src={pic2} alt="" />
                </div>
            </div>
            <div className='col-start-2 mt-28'>
                <h1 className='md:text-8xl text-6xl -z-10 font-bold opacity-20 text-center mb-10'>LOGISTICS</h1>
            </div>
        </div>
    );
};

export default ChooseUs;