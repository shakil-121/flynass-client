import profile from "../../assets/images/default.png";
import { FaBars, FaHistory, FaShoppingCart, FaUsers } from 'react-icons/fa';
import { Outlet } from 'react-router';
import useUserInfo from '../../Hooks/useUserInfo';
import { MdAttachMoney, MdOutlineDashboard, MdVerified } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth';
import { IoMdNotifications } from "react-icons/io";
import { baseUrl } from "../../config/api";

const AdminDashboard = () => {
    const userInfo = useUserInfo();
    const { user } = useAuth();

    const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`${baseUrl}/users`)
        return res.json();
    })

    const loggedInUser = user?.email;
    const currentUser = allUsers.find(item => item.email === loggedInUser)
    const role = currentUser?.role;

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content overflow-hidden">
                    {/* Page content here */}
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary lg:drawer-open lg:hidden 10"
                    >
                        <FaBars />
                    </label>

                    {/* Page content here */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side z-10">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-stone-200 rounded-md text-base-content">
                        {/* Sidebar content here */}
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
                                {
                                    role === 'admin' ?
                                        <>
                                            <li>
                                                <NavLink to="/admin_dashboard">
                                                    <MdOutlineDashboard />
                                                    Dashboard
                                                </NavLink>
                                            </li>
                                            <li>
                                                <Link to="all-parcel">
                                                    <FaShoppingCart />
                                                    All Parcel</Link>
                                            </li>
                                            <li>
                                                <Link to="payment">
                                                    <MdAttachMoney />
                                                    Payment</Link>
                                            </li>
                                            <li>
                                                <Link to="history">
                                                    <FaHistory />
                                                    Order History</Link>
                                            </li>
                                            <li>
                                                <Link to="notice-board">
                                                    <IoMdNotifications />
                                                    Notice Board</Link>
                                            </li>
                                            <li>
                                                <Link to="menu">
                                                    <FaBars />
                                                    Menu</Link>
                                            </li>
                                        </>
                                        :
                                        <>
                                            {
                                                role === 'superAdmin' ?
                                                    <>
                                                        <li>
                                                            <NavLink to="/admin_dashboard">
                                                                <MdOutlineDashboard />
                                                                Dashboard
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <Link to="all-parcel">
                                                                <FaShoppingCart />
                                                                All Parcel</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="payment">
                                                                <MdAttachMoney />
                                                                Payment</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="history">
                                                                <FaHistory />
                                                                Order History</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="all-admin">
                                                                <FaShoppingCart />
                                                                All Admin</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="manage-user">
                                                                <FaUsers />
                                                                Manage User</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="notice-board">
                                                                <IoMdNotifications />
                                                                Notice Board</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="menu">
                                                                <FaBars />
                                                                Menu</Link>
                                                        </li>
                                                    </>
                                                    :
                                                    <>
                                                    </>
                                            }
                                        </>
                                }
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;