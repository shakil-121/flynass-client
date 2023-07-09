import profile from "../../../assets/profile.jpg";
import { LiaEdit } from "react-icons/lia";
const MerchantProfile = () => {
    return (
        <div className='bg-pink-400 p-10'>
            <div className="flex justify-between">
                <h1 className='text-4xl font-bold font-pppins'>My Profile</h1>
            </div>
            <div className="mt-14">
                <img className="w-32 rounded" src={profile} alt="" />
                <div className="flex justify-between mt-8">
                    <div className="flex-1 grid grid-cols-2 mt-5">
                        <h4 className="font-bold mt-2">
                            Merchant ID:
                            <br />
                            <span className="font-serif font-medium">FN-12102</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            Full Name:
                            <br />
                            <span className="font-serif font-medium">MD. Rabbi Mia</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            Email Address:
                            <br />
                            <span className="font-serif font-medium">codersrabbi@gmail.com</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            Phone:
                            <br />
                            <span className="font-serif font-medium">+8801303329413</span>
                        </h4>

                        <h4 className="font-bold mt-2">
                            NID Number:
                            <br />
                            <span className="font-serif font-medium">7307890245</span>
                        </h4>
                    </div>
                    <div>
                        <button className="text-xl font-serif flex items-center"><LiaEdit /> Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MerchantProfile;