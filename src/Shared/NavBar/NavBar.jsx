// import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"; 
import logo from "../../assets/logo/logo.png"

const NavBar = () => {
  return (
    <div className="navbar bg-sky-100 sticky top-0 z-10 px-6 -pt-16">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
            <Link to="contact">Contact Us</Link>
            </li>
            <li>
            <Link to="signup">Registration</Link>
            </li>
          </ul>
        </div>
        <img className="h-24" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li>
              <Link>Home</Link>
            </li>
            <li>
            <Link to="contact">Contact Us</Link>
            </li>
            <li>
            <Link to="signup">Registration</Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn" to="login">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
