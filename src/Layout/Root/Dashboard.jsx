import profile from "../../assets/profile.jpg";
import { Outlet } from "react-router-dom";
import { MdVerified } from "react-icons/md";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open gap-5 max-w-screen-xl mx-auto">
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
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <div className="mb-10">
              <img className="w-20 h-20 rounded-full border-2 border-red-400 mx-auto" src={profile} alt="" />
              <h1 className="text-3xl text-center mt-3 font-semibold">Rabbi Mia</h1>
              <h4 className="text-xl font-semibold mt-4 flex gap-2 items-center justify-center">Merchant Account<MdVerified className="text-success"/></h4>
            </div>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
