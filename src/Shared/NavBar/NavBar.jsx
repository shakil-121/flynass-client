// import logo from "../../assets/logo.png"
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const navItems = <>
        <li className="font-pppins"><NavLink to="/">Home</NavLink></li>
        <li className="font-pppins"><NavLink to="/about">About</NavLink></li>
        <li className="font-pppins"><NavLink to="/menu">Services</NavLink></li>
        <li className="font-pppins"><NavLink to="/order">Contact</NavLink></li>
        <li className="font-pppins"><NavLink to="/login">Login</NavLink></li>
        <li className="font-pppins"><NavLink to="/register">Register</NavLink></li>
    </>
    return (
        <div className='flex justify-center'>
            <div className="navbar fixed z-10 px-16 bg-black bg-opacity-30  text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <img src="" className="w-28 rounded-lg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;