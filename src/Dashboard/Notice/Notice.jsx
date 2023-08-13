// import { AiFillAlert, IconName } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import useNotice from "../../Hooks/useNotice";

const Notice = () => { 
    const noticeUpdate=useNotice()  
    const notice=noticeUpdate?.notice

    return (
        <div className='mt-5 px-3 bg-[#E8F6FC] p-5 flex gap-3 rounded-md'>
            <IoMdNotifications className="text-4xl text-[#D53343]" />
            <h4 className='font-semibold flex-1'>
               {notice}
            </h4>
        </div>
    );
};

export default Notice;