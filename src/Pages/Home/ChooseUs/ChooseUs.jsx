import pic1 from '../../../assets/ChooseUs/pic1.jpg';
import pic2 from '../../../assets/ChooseUs/pic2.jpg';
import SectionTitle from '../../../Component/SectionTitle';

const ChooseUs = () => {
    return (
        <div className='grid md:grid-cols-4 mt-48 gap-2'>
            <div>

            </div>
            <div>
                <SectionTitle subHeading="why choose us" heading="We Are Professional Logistics & cargi Agency" />
                <p className='font-semibold'>Sed ut perspiciatis unde omnis iste natus error volup tatem accusantium dolorem que laudantium, totam rem aperiam, eaque ipsa illo inventore.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiam, que ipsa quae ab illo inventore veritatis quasi architecto beatae itae dicta sunt explicabo. Nemo enim ipsam voluptate voluptas sitr atur aut odit aut fugit, sed quia consequuntur magni dolores is eos qui ratione voluptatem sequi nesciunt.</p>
                <button className='btn bg-[#ff8a00] mt-5'>Learn More ---</button>
            </div>
            <div className='col-span-2'>
                <div className='grid grid-cols-2 '>
                    <div className=''>
                        <img src={pic1} alt="" />
                    </div>
                    <div className='h-5 animate-bounce -mt-16 relative'>
                        <div className='bg-white shadow-2xl -ml-48 shadow-[#7ABDE2] w-96 h-[530px]'>
                            <img className='ms-11 absolute -top-9' src={pic2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-start-2 mt-28'>
                <h1 className='text-8xl font-bold opacity-20'>LOGISTICS</h1>
            </div>
        </div>
    );
};

export default ChooseUs;