import profile from "../../assets/profile.jpg";
import { Link, Outlet } from "react-router-dom";
import { MdVerified } from "react-icons/md";

const Dashboard = () => {    
  return (
    <div>
      <div className="drawer lg:drawer-open md:gap-5 px-4 md:px-0 max-w-screen-xl mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-white h-full bg-[#2c2c54]">
            <div className="mb-10">
              <img className="w-20 h-20 rounded-full border-2 border-red-400 mx-auto" src={profile} alt="" />
              <h1 className="text-3xl text-center mt-3 font-semibold">Rabbi Mia</h1>
              <h4 className="text-xl font-semibold mt-4 flex gap-2 items-center justify-center">Merchant Account<MdVerified className="text-success" /></h4>
            </div>
            <div className="">
              <div>
                <li>
                  <Link to="/dashboard/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/dashboard/my-parcel">my-parcel</Link>
                </li>
                <li>
                  <Link to="/dashboard/">History</Link>
                </li>
              </div>
              <div>
                <button>LogOut</button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
