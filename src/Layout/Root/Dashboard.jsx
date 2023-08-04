import profile from "../../assets/images/default.png";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdOutlineAttachMoney, MdOutlineDashboard, MdVerified } from "react-icons/md";
import { FaBars, FaHistory, FaShoppingCart, FaSignOutAlt, FaUserGraduate, FaUsers, } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { AiFillShopping } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import DashboardNavBar from "../../Shared/DashboardNavBar/DashboardNavBar";
import useUserInfo from "../../Hooks/useUserInfo";
import useAdmin from "../../Hooks/useAdmin";
import useSuperAdmin from "../../Hooks/useSuperAdmin";
import useMarchent from "../../Hooks/useMarchent";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const navigate = useNavigate()
  const { user, logout } = useContext(AuthContext);
  const userInfo = useUserInfo();
  const [isAdmin, isAdminLoading] = useAdmin()
  const [isSuperAdmin, isSuperAdminLoading] = useSuperAdmin();
  const [isMerchant, isMerchantLoading] = useMarchent();

  const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users')
    return res.json();
  })

  const loggedInUser = user?.email;
  const currentUser = allUsers.find(item => item.email === loggedInUser)
  const role = currentUser?.role;

  // console.log(role);

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
      <DashboardNavBar />
      <div className="drawer lg:drawer-open md:gap-5 px-4 md:px-0">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content overflow-hidden">

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
        <div className="drawer-side mt-1">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full rounded-md bg-white">
            <div className="mb-10">
              {
                userInfo?.image ?
                  <>
                    <img className="w-20 h-20 rounded-full border-2 border-white mx-auto" src={userInfo?.image} alt="" />
                  </>
                  :
                  <>
                    <img className="w-20 h-20 rounded-full border-2 border-white mx-auto" src={profile} alt="" />
                  </>
              }
              <h1 className="text-3xl text-center mt-3 font-semibold">{userInfo?.name}</h1>
              <h4 className="text-xl font-semibold mt-4 flex gap-2 items-center justify-center">{userInfo?.role}<MdVerified className="text-success" /></h4>
            </div>
            <div className="h-100vh font-pppins px-5 text-xl">
              <div className="flex flex-col gap-2">
                <li>
                  <Link to="merchant-analysis">
                    <MdOutlineDashboard />
                    Dashboard</Link>
                </li>
                <li>
                  <Link to="my-parcel">
                    <AiFillShopping />
                    My Parcel</Link>
                </li>
                <li>
                  <Link to="/dashboard/history">
                    <FaHistory />
                    Order History</Link>
                </li>
                <li>
                  <Link to="/dashboard/merchant-payment">
                    <MdOutlineAttachMoney />
                    Payment</Link>
                </li>
                <li>
                  <Link to="/services">
                    <FiSettings />
                    Service</Link>
                </li>
                <li>
                  <Link to="menu">
                    <FaBars />
                    Menu</Link>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
