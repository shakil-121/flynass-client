// import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaUserShield, FaPhoneAlt } from "react-icons/fa";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
 // Function to handle scroll event
 const handleScroll = () => {
  if (window.scrollY > 20) {
    setScrolled(true);
  } else {
    setScrolled(false);
  }
};

useEffect(() => {
  // Attach the event listener when the component mounts
  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  const { user } = useContext(AuthContext);
  return (
    <div    className={`navbar fixed z-10  text-white px-16 transition ${
      scrolled ? 'bg-[#1E8FD0]' : 'bg-transparent'
    }`}
>
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
              <Link to="services">Services</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
            <li>
              <Link to="coverage">Coverage</Link>
            </li>
            {
              user ? <></> : <>
                <li>
                  <Link to="signup">Registration</Link>
                </li>
              </>
            }
            <li>
              <p><FaPhoneAlt></FaPhoneAlt> 09611305423</p>
            </li>
          </ul >
        </div >
        <img className="h-16" src={logo} alt="" />
      </div >
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-pppins text-base px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="services">Services</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <Link to="coverage">Coverage</Link>
          </li>
          {
            user ? <></> : <>
              <li>
                <Link to="signup">Registration</Link>
              </li>
            </>
          }
          <li>
            <a href="tel:09611305423"><FaPhoneAlt></FaPhoneAlt> 09611305423</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Link className="btn mx-3 bg-[#062751] hover:text-black text-white" to="/dashboard">
              <div>
                <h1>Hello <br />
                  Rabbi Mia</h1>
              </div>
            </Link>
            <div className="avatar online">
              <div className="h-16 auto rounded-full">
                <img className="" title={user?.displayName} src={user.photoURL} alt="" />
              </div>
            </div>
          </>
        ) : (
          <>
            <Link className="btn btn-active bg-[#062751] text-white hover:text-black" to="/login"><FaUserShield></FaUserShield> Login</Link>
          </>
        )}
      </div>
    </div >
  );
};

export default NavBar;
