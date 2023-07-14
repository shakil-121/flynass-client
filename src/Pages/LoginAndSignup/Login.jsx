import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { FaFileImage, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./Login.css"

const Login = () => {

  const { login, passwordReset, googleLogin } = useContext(AuthContext);
  const emailRef=useRef()


  const  handleSubmit= event => {
    event.preventDefault()
        const form=event.target; 
        const email=form.email.value;
        const password=form.password.value;
    login(email,password)
    .then((result) => {
      const loggeduser = result.user;
      toast("Login Successfully");
    }).catch((error) => {
      console.log(error);
    });
  }; 

  const handelresetpassword=()=>{
    const email=emailRef.current.value; 
    if(!email)
    {
        alert('Please Enter Your Email Address')
        return;
    } 
    passwordReset(email)
    .then(()=>{
        alert('Please Check your Email')
    }) 
    .catch(error=>{ 
        console.log(error); 
        toast("Email is Not Found !")
    })

  }

  const handleloginwithgoogle=()=>{
    googleLogin()
  }
  return (
    <div>
      <div className="hero w-full min-h-screen rounded-lg bg py-16">
        <div className="card flex-shrink-0 md:w-1/2 bg-opacity-80  shadow-2xl text-white bg-white">
          <form onSubmit={handleSubmit} className="card-body">
            <div>
              <h1 className="font-pppins text-3xl pb-5 font-bold text-center text-black">
                Login
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

            <Link className="text-decoration-none text-sky-600"><small onClick={handelresetpassword}>Forget Password</small></Link>

            <div className="form-control mt-6">
              <button className="btn bg-zinc-950 border-none text-white hover:text-black">
                Login
              </button>
            </div>
            {/* <p className="text-center text-red-600">{error}</p> */}
            <p className="text-center text-black text-lg font-semibold">
              Or Sign-in with
            </p>
            <div onClick={handleloginwithgoogle} className="flex text-center gap-8 py-4 justify-center">
              <Link>
                <FaGoogle className="text-black h-6 w-6"></FaGoogle>
              </Link>
            </div>
          </form>
          <p className="text-center text-black pb-6">
            Are you new in Flynass ?
            <Link className="text-blue-600 ps-2" to="/signup">
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
