import profile from "../../assets/profile.jpg";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Profile from "../../Dashboard/Profile/Profile";
import NavBar from "../../Shared/NavBar/NavBar";

const Dashboard = () => {
  const navigate = useNavigate()
  const { user, logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
      .then(() => {
        // navigate({to:"/"})

        console.log("logout completed");
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div>
      <div className="drawer lg:drawer-open md:gap-5 px-4 md:px-0 max-w-screen-xl mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}

          <Outlet></Outlet>
          {/* <Profile></Profile> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-white h-full rounded-md  bg-[#062751]">
            <div className="mb-10">
              <img className="w-20 h-20 rounded-full border-2 border-white mx-auto" src={profile} alt="" />
              <h1 className="text-3xl text-center mt-3 font-semibold">Rabbi Mia</h1>
              <h4 className="text-xl font-semibold mt-4 flex gap-2 items-center justify-center">Merchant Account<MdVerified className="text-success" /></h4>
            </div>
            <div className="h-100vh font-pppins px-5 text-xl">
              <div className="flex flex-col gap-2">
                {/* <li>
                  <NavLink to="/dashboard">
                    Dashboard
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to="admin-analysis">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <Link to="profile">Profile</Link>
                </li>
                <li>
                  <Link to="my-parcel">My Parcel</Link>
                </li>
                <li>
                  <Link to="">History</Link>
                </li>
                <li>
                  <Link to="/services">Service</Link>
                </li>
              </div>
              <div className="absolute bottom-10 flex flex-col gap-3">
                <h2>Hotline: 09611305423</h2>
                <button className="btn bg-[red] text-white" onClick={handleLogout}><NavLink to="/">
                  LogOut
                </NavLink><FaSignOutAlt></FaSignOutAlt> </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
