// import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaUserShield, FaPhoneAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { baseUrl } from "../../config/api";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [error, setError] = useState('');
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
  const { user, logout } = useContext(AuthContext);

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

  const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch(`${baseUrl}/users`)
    return res.json();
  })

  const loggedInUser = user?.email;
  const currentUser = allUsers.find(item => item.email === loggedInUser)
  const role = currentUser?.role;

  return (
    <div className={`navbar fixed z-10  text-white pe-10 transition ${scrolled ? 'bg-[#1E8FD0]' : 'bg-transparent'
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown text-sky-300">
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
            className="menu menu-sm border-sky-500 border-2 font-pppins text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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

            <li>
              <Link to="about">About Us</Link>
            </li>
            {/* {
              user ? <></> : <>
                <li>
                  <Link to="registration">Registration</Link>
                </li>
              </>
            } */}
            <li>
              <p><FaPhoneAlt></FaPhoneAlt> 09611305423</p>
            </li>
          </ul >
        </div >
       <Link to="/"> <img className="md:h-16 h-10" src={logo} alt="" /></Link>
      </div >
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-pppins  text-base px-1">
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
          <li>
            <Link to="about">About Us</Link>
          </li>
          {/* {
            user ? <></> : <>
              <li>
                <Link to="registration">Registration</Link>
              </li>
            </>
          } */}
          <li>
            <a href="tel:09611305423"><FaPhoneAlt></FaPhoneAlt> 09611305423</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">

        {
          role === 'admin' ?
            <div>
              <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Your are not Merchant</span>
                <div>
                  <button onClick={handleLogout} className="btn btn-sm btn-primary">X</button>
                </div>
              </div>
            </div>
            :
            <>
              {
                role === 'superAdmin' ?
                  <div>
                    <div className="alert alert-error">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>Your are not Merchant</span>
                      <div>
                        <button onClick={handleLogout} className="btn btn-sm btn-primary">X</button>
                      </div>
                    </div>
                  </div>
                  :
                  <>
                    {
                      role === 'pending' ?
                        <div>
                          <div className="alert alert-error text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>Your account has been Disabled/Pending</span>
                            <div>
                              <button onClick={handleLogout} className="btn btn-sm btn-primary">X</button>
                            </div>
                          </div>
                        </div>
                        :
                        <>
                          <>
                            {user ?
                              <>
                                <Link className="btn mx-3 bg-[#062751] hover:text-black md:text-base text-[10px] text-white" to="/dashboard">
                                  <div>
                                    <h1>Hello <br />
                                      {user?.displayName}</h1>
                                  </div>
                                </Link>
                                <div className="avatar online">
                                  <div className="md:h-16 h-10 auto rounded-full">
                                    <img className="" title={user?.displayName} src={user.photoURL} alt="" />
                                  </div>
                                </div>
                              </>
                              :
                              <>
                                <Link className="btn btn-active bg-[#062751] text-white hover:text-black" to="/login"><FaUserShield></FaUserShield> Login</Link>
                              </>
                            }
                          </>
                        </>
                    }
                  </>
              }
            </>
        }
      </div>
    </div >
  );
};

export default NavBar;
