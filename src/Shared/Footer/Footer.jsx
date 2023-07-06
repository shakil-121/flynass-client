import React from "react";
import "./Footer.css";
import logo from "../../assets/logo/white-logo.png"; 
import { FaFacebookF,FaTwitter,FaInstagram,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="md:h-[60vh] h-full p-10 f-bg mt-16">
      <div className="md:flex justify-center">
      <div>
        <img className="h-24 w-auto" src={logo} alt="Flynass Logo" />
        <br />
        <p className="text-white text-lg">
          Many desktop publishing packages <br /> and web page editors now use
          are <br /> dolra Ipsum as their default .
        </p>
        <div className="flex  mt-6 text-white">
            <div className="bg-[#184f6e] hover:bg-[#051721] p-2">
              <FaFacebookF className="text-2xl"></FaFacebookF>
            </div>
            <div className="bg-[#184f6e] hover:bg-[#051721] p-2 ms-3">
                <FaInstagram className="text-2xl"></FaInstagram>
            </div>
            <div className="bg-[#184f6e] hover:bg-[#051721] p-2 ms-3">
                <FaTwitter className="text-2xl"></FaTwitter>
            </div>
            <div className="bg-[#184f6e] hover:bg-[#051721] p-2 ms-3">
                <FaYoutube className="text-2xl"></FaYoutube>
            </div>
        </div>
      </div>

      <div className="text-white md:ms-16">
        <h1 className="text-2xl">Quick Links</h1> 
        <div className="bg-orange-500 h-1 mt-2 w-3/4"></div> 
        <h2 className="text-lg mt-6">About</h2> 
        <h1 className="text-lg mt-2">Services</h1> 
        <h2 className="text-lg mt-2">Contact</h2> 
        <h2 className="text-lg mt-2">Coverage</h2>
        
      </div>
      <div className="text-white md:ms-36">
        <h1 className="text-2xl">Services</h1> 
        <div className="bg-orange-500 h-1 mt-2 w-3/4"></div> 
        <h2 className="text-lg mt-6">About</h2> 
        <h1 className="text-lg mt-2">Services</h1> 
        <h2 className="text-lg mt-2">Contact</h2> 
        <h2 className="text-lg mt-2">Coverage</h2>
        
      </div>
      <div className="text-white md:ms-36">
        <h1 className="text-2xl">Community</h1> 
        <div className="bg-orange-500 h-1 mt-2 w-3/4"></div> 
        <h2 className="text-lg mt-6">About</h2> 
        <h1 className="text-lg mt-2">Services</h1> 
        <h2 className="text-lg mt-2">Contact</h2> 
        <h2 className="text-lg mt-2">Coverage</h2>
        
      </div>
      </div>  
      <br />
      <hr /> 
      <p className="text-center text-white py-4">Copyright © 2023 by Flynass All Rights Reserved. Developed By <a className="text-amber-500" target="_blank" href="https://sritfusion.com/">SR IT Fusion</a></p>
    </div>
  );
};

export default Footer;
