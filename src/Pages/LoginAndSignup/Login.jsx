import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaFileImage, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";


const Login = () => { 
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    const onSubmit=data=>{

    }
  return (
    <div>
      <div className="hero w-full min-h-screen rounded-lg  bg-slate-200 mt-16 py-16">
        <div className="card flex-shrink-0 md:w-1/2  shadow-2xl text-white bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                name="email"
                {...register("email", { required: true })}
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
                {...register("password", { required: true })}
                type="password"
                placeholder="password"
                className="input input-bordered border-slate-300 text-black"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-zinc-950 border-none text-white hover:text-black">
                Registration
              </button>
            </div>
            {/* <p className="text-center text-red-600">{error}</p> */}
            <p className="text-center text-black text-lg font-semibold">
              Or Sign-up with
            </p>
            <div className="flex text-center gap-8 py-4 justify-center">
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
