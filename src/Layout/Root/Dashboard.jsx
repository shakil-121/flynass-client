import profile from "../../assets/profile.jpg";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdOutlineDashboard, MdVerified } from "react-icons/md";
import { FaBars, FaHistory, FaShoppingCart, FaSignOutAlt, FaUserGraduate, FaUsers, } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { AiFillShopping } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Profile from "../../Dashboard/Profile/Profile";
import NavBar from "../../Shared/NavBar/NavBar";
import DashboardNavBar from "../../Shared/DashboardNavBar/DashboardNavBar";
import useUserInfo from "../../Hooks/useUserInfo";
import useAdmin from "../../Hooks/useAdmin";
import useSuperAdmin from "../../Hooks/useSuperAdmin";

const Dashboard = () => {
  const navigate = useNavigate()
  const { user, logout } = useContext(AuthContext);
  const { user, logout } = useContext(AuthContext) 
  const userInfo=useUserInfo();
  const [isAdmin,isAdminLoading]=useAdmin()  
  const [isSupperAdmin,isSuperAdminLoading]=useSuperAdmin()

  const handleLogout = () => { 

    if(isAdminLoading || isSuperAdminLoading)
    {
      return <div>Lodding-------</div>
    }

    console.log(isSupperAdmin);
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
      <DashboardNavBar />
      <div className="drawer lg:drawer-open md:gap-5 px-4 md:px-0">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
         {
            // console.log(isSupperAdmin)
            console.log(isAdmin)

         }
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary lg:drawer-open lg:hidden 10"
          >
            <FaBars />
          </label>

          {/* Page content here */}
          <Outlet></Outlet>
          {/* <Profile></Profile> */}

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full rounded-md bg-white">
            <div className="mb-10">
              <img className="w-20 h-20 rounded-full border-2 border-white mx-auto" src={userInfo?.image} alt="" />
              <h1 className="text-3xl text-center mt-3 font-semibold">{userInfo?.name}</h1>
              <h4 className="text-xl font-semibold mt-4 flex gap-2 items-center justify-center">{userInfo?.role}<MdVerified className="text-success" /></h4>
            </div>
            <div className="h-100vh font-pppins px-5 text-xl">
              <div className="flex flex-col gap-2">
                {
                  isAdmin?<>
                  <li>
                  <NavLink to="admin-analysis">
                    <MdOutlineDashboard />
                    Dashboard
                  </NavLink>
                </li>
                  </>:<></>
                }
                {
                  !isAdmin?<>
                  <li>
                  <Link to="">
                    <FaUserGraduate />
                    Profile</Link>
                </li>
                <li>
                  <Link to="my-parcel">
                    <AiFillShopping />
                    My Parcel</Link>
                </li>
                <li>
                  <Link to="all-admin">
                    <FaShoppingCart />
                    All Admin</Link>
                </li>
                <li>
                  <Link to="all-parcel">
                    <FaShoppingCart />
                    All Parcel</Link>
                </li>
                <li>
                  <Link to="manage-user">
                    <FaUsers />
                    Manage User</Link>
                </li>
                <li>
                  <Link to="">
                    <FaHistory />
                    Order History</Link>
                </li>
                <li>
                  <Link to="/services">
                    <FiSettings />
                    Service</Link>
                </li>
                  </>:<></>
                }
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
