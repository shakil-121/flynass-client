import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EmailService_id,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Message Send Successfully !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="bgi">
        <h1 className="mt-16 pt-48 ps-16 text-7xl text-white font-bold font-pppins">
          Contact US
        </h1>
      </div>
      <div>
        <h1 className="text-5xl text-indigo-950 font-pppins font-bold md:pt-28 md:ps-16">
          Send Us a Message
        </h1>
      </div>
      <div className="bg-slate-200  m-14 md:flex gap-4 rounded-xl">
        <div className="md:w-2/3 p-10">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="user_name"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="user_email"
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </div>
            <br />
            <input
              className="btn hover:bg-orange-600 font-bold hover:text-white"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
        <div className="md:w-1/3 contact-bg bg-blue-950 p-10 text-white">
          <h1 className="border-l-8 border-orange-400 p-2 text-2xl font-semibold text-white font-pppins">
            Let's get in touch
          </h1>
          <div className="flex">
            <FaMapMarkerAlt className="text-4xl mt-10"></FaMapMarkerAlt>
            <p className="mt-10 ms-4">Mirpur,Dhaka-1216</p>
          </div>
          <div className="flex">
            <FaMobileAlt className="text-4xl mt-10"></FaMobileAlt>
            <p className="mt-8 ms-4">
              +880 1633-607006 <br /> +880 1791-750192
            </p>
          </div>
          <div className="flex">
            <FaEnvelope className="text-4xl mt-10"></FaEnvelope>
            <p className="mt-8 ms-4">
              hasibmeem9@gmail.com <br /> ahamedimraz699@gmail.com
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
