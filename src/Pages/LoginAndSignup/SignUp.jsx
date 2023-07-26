import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import animation from "../../assets/all-animation/93796-door-delivery.json";
import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { FaFileImage, FaGoogle } from "react-icons/fa";
const imgHosting_token = import.meta.env.VITE_img_uploadToken;
import "./signup.css";
import { Result } from "postcss";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../AuthProvider/AuthProvider";

// console.log(imgHosting_token);
const SignUp = () => {
  const { createAccount, googleLogin } = useContext(AuthContext);
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imgHosting_token}`;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const userInfo = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            NID: data.nid,
            image: imgUrl,
            role:"merchant",
            address:data.address,
          };
        //   console.log(userInfo);

          createAccount(data.email, data.password)
            .then((result) => {
              const loggedUser = result.user;
              updateProfiledata(loggedUser, data.name, imgUrl);
              toast("Account Create Successfully !")
              console.log(result); 
              console.log(userInfo); 
              fetch("http://localhost:5000/users",{
                method:"POST",
                headers:{
                  "content-type":"application/json"
                },
                body:JSON.stringify(userInfo)
              })
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
  };

  const updateProfiledata = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => console.log(error));
  };
   
  const handleloginwithgoogle=()=>{
    googleLogin()
  }
  return (
    <div>
      <div className="hero w-full min-h-screen rounded-lg  bg-slate-200  py-16">
        <div className="hero-content w-5/6 flex-col py-4  lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <Lottie
              className="h-72 w-full"
              animationData={animation}
              loop={true}
            />
          </div>

          <div className="card flex-shrink-0 md:w-1/2  shadow-2xl text-white bg-white">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div>
                <h1 className="font-pppins text-3xl pb-5 font-bold text-center text-black">
                  Create An Account
                </h1>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Name</span>
                </label>
                <input
                  name="name"
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                  className="input input-bordered border-slate-300 text-black"
                />
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
                  <span className="label-text text-lg">NID Number</span>
                </label>
                <input
                  name="nid"
                  {...register("nid", { required: true })}
                  type="text"
                  placeholder="NID Number"
                  className="input input-bordered border-slate-300 text-black"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Address</span>
                </label>
                <input
                  name="nid"
                  {...register("address", { required: true })}
                  type="text"
                  placeholder="Address"
                  className="input input-bordered border-slate-300 text-black"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Phone Number</span>
                </label>
                <input
                  name="phone"
                  {...register("phone", { required: true })}
                  type="text"
                  placeholder="Type your Phone Number"
                  className="input input-bordered border-slate-300 text-black"
                />
              </div> 

              {/* file uploader older version */}
              {/* <div class="mb-8">
                <label className="label">
                  <span className="label-text text-lg">Upload your Photo</span>
                </label>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  name="image"
                  id="file"
                  class="sr-only border-slate-300 text-black"
                />
                <label
                  for="file"
                  class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#131313] p-2 text-center"
                >
                  <div>
                    <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                      Drop files here
                    </span>
                    <span class="mb-2 block text-base font-medium text-[#6B7280]">
                      Or
                    </span>
                    <span className="file-input inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div> */}
              
              <div> 
              <label className="label">
                  <span className="label-text text-lg">Upload your Photo</span>
                </label>
              <input 
               {...register("image", { required: true })}
               type="file"
               name="image"
               id="file"
              className="file-input text-black file-input-bordered w-full max-w-xs" />
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
              <div onClick={handleloginwithgoogle} className="flex bg-black w-1/2 btn mx-auto hover:bg-orange-600 justify-center">
                <Link>
                  <FaGoogle className="text-white h-6 w-6"></FaGoogle>
                </Link>
              </div>
            </form>
            <p className="text-center text-black pb-6">
              Already have an account?
              <Link className="text-blue-600 ps-2" to="/login">
                LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignUp;
