// import { AiFillAlert, IconName } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import useNotice from "../../Hooks/useNotice";  
import Lottie from "lottie-react";
import ball from "../../../public/ball.json"


const Notice = () => { 
    const noticeUpdate=useNotice()  
    const notice=noticeUpdate?.notice

    return (
        <div className='mt-5 px-3 bg-[#E8F6FC] p-5 flex gap-3 rounded-md'>
            {/* <IoMdNotifications className="text-4xl text-[#D53343]" /> */} 
            <Lottie
                className="opacity-70 h-16"
                animationData={ball}
                loop={true}
              />
            <h4 className='font-semibold flex-1'>
               {notice}
            </h4>
        </div>
    );
};

export default Notice;