import React, { useContext, useRef } from "react";
import {
  Link,
  NavLink,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { FaFileImage, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./Login.css";
import { useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { useQuery } from "@tanstack/react-query";

const Login = () => {
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useTitle("Login")
  const { login, passwordReset, googleLogin } = useContext(AuthContext);
  const emailRef = useRef();

  const { data: allUsers = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users')
    return res.json();
  })

  // const loggedInUser = user?.email;
  const currentUser = allUsers.find(item => item.email === userEmail)
  const role = currentUser?.role;

  console.log(userEmail, role);

  // const from=location.state?.from?.pathname || '/dashboard/menu'
  const location = useLocation();
  const navigate = useNavigate()

  let from;
  if (role === 'merchant') {
    from = location.state?.from?.pathname || '/dashboard';
  }
  else if (role === 'pending') {

  }
  else if (role === 'admin' && role === 'superAdmin') {

  }
  // else if{
  //   navigate('/');
  // }

  // const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError('');

    login(email, password)
      .then((result) => {
        const loggeduser = result.user;
        toast("Login Successfully");
        form.reset();
        setError('');
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.log(error);
        setError("Email/Password Wrong");
      });
  };

  const handelresetpassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please Enter Your Email Address");
      return;
    }
    passwordReset(email)
      .then(() => {
        alert("Please Check your Email");
      })
      .catch((error) => {
        console.log(error);
        toast("Email is Not Found !");
      });
  };

  const handleloginwithgoogle = () => {
    googleLogin();
  };

  return (
    <div>
      <div className="hero w-full min-h-screen rounded-lg bg py-16">
        <div className="card flex-shrink-0 md:w-1/2 bg-opacity-80  shadow-2xl text-white bg-white">
          <form onSubmit={handleSubmit} className="card-body">
            <div>
              <h1 className="font-pppins text-3xl pb-5 font-bold text-center text-black">
                Marchent Login
              </h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Email</span>
              </label>
              <input
                ref={emailRef}
                name="email"
                type="text"
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="email"
                className="input input-bordered border-slate-300 text-black"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered border-slate-300 text-black"
              />
            </div>
            <div className="text-center mt-2 mb-2 text-red-500">
              <p>{error}</p>
            </div>
            <Link className="text-decoration-none text-sky-600">
              <small onClick={handelresetpassword}>Forget Password</small>
            </Link>

            <div className="form-control mt-6">
              <button className="btn bg-zinc-950 border-none text-white hover:text-black">
                Login
              </button>
            </div>
          </form>
          <p className="text-center text-black pb-6">
            Are you new in Flynass ?
            <Link className="text-blue-600 ps-2" to="/registration">
              Create Account
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
