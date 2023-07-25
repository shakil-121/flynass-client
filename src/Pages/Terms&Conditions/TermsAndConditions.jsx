import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div className='py-10'>
            <h1 className='text-5xl font-pppins mb-10 text-center'>Terms & Conditions</h1>
            <div className='flex flex-col gap-5'>
                <div className='mt-5'>
                    <Link to="/dashboard/menu">
                        <h1 className='btn bg-blue-800 text-white hover:bg-blue-700'>
                            <FaArrowLeft />Back
                        </h1>
                    </Link>
                </div>
                <div>
                    <h1 className='flex flex-col'>
                        <span className='font-pppins'>No Responsibility for Delays:</span>
                        <span>The delivery company shall not be held responsible for any delays in the delivery of packages, parcels, or shipments. Factors such as weather conditions, traffic, road closures, customs clearance, or any other unforeseen circumstances may cause delays, and the company shall not be liable for any resulting damages or losses.</span>
                    </h1>
                </div>
                <div>
                    <h1>
                        <span className='font-pppins'>No Responsibility for Delays:</span>
                        <span>The delivery company shall not be held responsible for any delays in the delivery of packages, parcels, or shipments. Factors such as weather conditions, traffic, road closures, customs clearance, or any other unforeseen circumstances may cause delays, and the company shall not be liable for any resulting damages or losses.</span>
                    </h1>
                </div>
                <div>
                    <h1>
                        <span className='font-pppins'>No Responsibility for Delays:</span>
                        <span>The delivery company shall not be held responsible for any delays in the delivery of packages, parcels, or shipments. Factors such as weather conditions, traffic, road closures, customs clearance, or any other unforeseen circumstances may cause delays, and the company shall not be liable for any resulting damages or losses.</span>
                    </h1>
                </div>
                <div>
                    <h1>
                        <span className='font-pppins'>No Responsibility for Delays:</span>
                        <span>The delivery company shall not be held responsible for any delays in the delivery of packages, parcels, or shipments. Factors such as weather conditions, traffic, road closures, customs clearance, or any other unforeseen circumstances may cause delays, and the company shall not be liable for any resulting damages or losses.</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;