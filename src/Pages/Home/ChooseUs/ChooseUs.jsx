import pic1 from '../../../assets/ChooseUs/pic1.jpg';
import pic2 from '../../../assets/ChooseUs/pic2.jpg';
import SectionTitle from '../../../Component/SectionTitle';

const ChooseUs = () => {
    return (
        <div className='grid grid-cols-4 mt-28'>
            <div>

            </div>
            <div>
                <SectionTitle subHeading="why choose us" heading="We Are Professional Logistics & cargi Agency" />
                <p className='font-semibold'>Sed ut perspiciatis unde omnis iste natus error volup tatem accusantium dolorem que laudantium, totam rem aperiam, eaque ipsa illo inventore.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem que laudantium, totam rem aperiam, que ipsa quae ab illo inventore veritatis quasi architecto beatae itae dicta sunt explicabo. Nemo enim ipsam voluptate voluptas sitr atur aut odit aut fugit, sed quia consequuntur magni dolores is eos qui ratione voluptatem sequi nesciunt.</p>
                <button className='btn bg-[#ff8a00] mt-5'>Learn More ---</button>
            </div>
            <div className='col-span-2'>
                <div className='flex '>
                    <div className='mt-28'>
                        <img src={pic1} alt="" />
                    </div>
                    <div className='h-[520px] w-[365px] bg-white shadow-xl -ms-14 flex relative'>
                        <img className='h-[530px] w-[340px] absolute -top-10 right-0' src={pic2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;