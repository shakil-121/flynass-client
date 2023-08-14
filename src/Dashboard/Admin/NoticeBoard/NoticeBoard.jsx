import React from 'react';
import { IoMdNotifications } from 'react-icons/io';
import useNotice from '../../../Hooks/useNotice';
import Swal from 'sweetalert2';
import { baseUrl } from '../../../config/api';

const NoticeBoard = () => {
    const UpdatedNotice = useNotice();
    // console.log(UpdatedNotice.notice); 
    const notice = UpdatedNotice?.notice;

    const handleNoticeUpdate = event => {
        // event.preventDefault();
        const form = event.target;
        const notice = form.notice.value;
        // console.log(notice);  
        const id = "64d8abcda3efcb0b84670175"
        const updateNotice = { notice }
        fetch(`${baseUrl}/notice/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateNotice)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Update",
                        text: "Notice update successfully",
                        icon: "success",
                        confirmButtonText: "Update Notice",
                    });
                }
                form.reset();
                console.log(data);
            });
    }
    return (
        <div className='px-5'>
            <div className='mt-5 px-3 bg-[#E8F6FC] p-5 flex gap-3 rounded-md mb-5'>
                <IoMdNotifications className="text-4xl text-[#D53343]" />
                <h4 className='text-xl font-semibold flex-1'>
                    {notice}
                    {/* আপনাদের অবগতির জন‍্য জানাচ্ছি, টানা বৃষ্টিপাত জনিত কারনে দেশের অনেক এলাকায় জলাবদ্ধতার কারনে ডেলিভারী কার্যক্রম ব‍্যাহত হচ্ছে। প্রোডাক্ট সুরক্ষিত রেখে ডেলিভারী করার সর্বোচ্চ চেষ্টা করছি আমরা। আমাদের সহযোগিতার মাধ‍্যমে পাশে থাকার জন‍্য ধন‍্যবাদ। */}
                </h4>
            </div>
            <form onSubmit={handleNoticeUpdate}>
                <div className='flex flex-col gap-3'>
                    <textarea className="textarea textarea-info h-48" name='notice' placeholder="Type here..."></textarea>
                    <input className='btn btn-block bg-blue-800 hover:bg-blue-800 text-white' type="submit" value="Notice Send" />
                </div>
            </form>
        </div>
    );
};

export default NoticeBoard;