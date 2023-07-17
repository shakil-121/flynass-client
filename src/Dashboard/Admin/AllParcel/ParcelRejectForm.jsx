import React from 'react';

const ParcelRejectForm = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    const handleReject = event => {
        event.preventDefault();
        const form = event.target;
        const feedbackText = form.feedback.value;
        // console.log(feedbackText);
        fetch('',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    feedback: feedbackText
                })
            }
        )
    }

    
    return (
        <div className='fixed inset-0 md:left-1/4  bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-full md:w-[600px] flex flex-col  rounded-lg'>
                <button onClick={() => onClose()} className="btn btn-circle btn-outline border-[#E4D804] text-white place-self-end">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className='bg-sky-200 p-5 rounded-md'>
                    <h1 className='font-pppins text-2xl mb-4'>Rejection Feedback</h1>
                    <div className='flex justify-between gap-2 mb-5'>
                        <h3 className='text-center'><span className='font-pppins'>Name</span><br />
                            <span>MD. Rabbi Mia</span>
                        </h3>
                        <h3 className='text-center'><span className='font-pppins'>Tracking ID</span><br />
                            <span>2ea34adjh3asdj3</span>
                        </h3>
                        <h3 className='text-center'><span className='font-pppins'>Email</span><br />
                            <span>codersrabbi@gmail.com</span>
                        </h3>
                        <h3 className='text-center'>Price<br />
                            <span>1200Tk</span>
                        </h3>

                    </div>
                    <form onSubmit={handleReject}>
                        <textarea className='w-full p-2 font-serif focus:outline-none rounded-md' name="feedback" cols="30" rows="10"></textarea>
                        <input className='btn btn-block' type="submit" value="update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ParcelRejectForm;