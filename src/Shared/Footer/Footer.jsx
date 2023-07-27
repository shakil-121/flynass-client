import React from "react";
import "./Footer.css";
import logo from "../../assets/logo/white-logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <div className="bg-[#000c31]">
      <footer className="footer p-10  text-base-content ">
      <div>
        <img className="h-20" src={logo} alt="" />
        <p className="text-white text-lg">
          Flynass is the strongest doorstep <br /> delivery network of
          Bangladesh <br /> with nationwide doorstep delivery,
        </p>
        <div className="flex  mt-6 text-white">
          <div className="bg-[#00a2ff] rounded-md hover:bg-[#051721] p-2">
            <a href="https://www.facebook.com/profile.php?id=100095364961412&mibextid=ZbWKwL">
              <FaFacebookF className="text-2xl"></FaFacebookF>
            </a>
          </div>
          <div className="bg-[#00a2ff] rounded-md hover:bg-[#051721] p-2 ms-3">
            <FaInstagram className="text-2xl"></FaInstagram>
          </div>
          <div className="bg-[#00a2ff] rounded-md hover:bg-[#051721] p-2 ms-3">
            <FaTwitter className="text-2xl"></FaTwitter>
          </div>
          <div className="bg-[#00a2ff] rounded-md hover:bg-[#051721] p-2 ms-3">
            <FaYoutube className="text-2xl"></FaYoutube>
          </div>
        </div>
      </div>
      <div className="font-pppins text-white">
        <span className="footer-title text-2xl">Pages</span>
        <a harf="/" className="link link-hover text-base my-2">Home</a>
        <a harf="/covarge" className="link link-hover text-base my-2">Covarage</a>
        <a harf="/about" className="link link-hover text-base my-2">About us</a>
        <a harf="/services" className="link link-hover text-base my-2">Services</a>
      </div>
      <div className="font-pppins text-white">
        <span className="footer-title text-2xl">Quick Link</span>
        <a harf="/sign_up" className="link link-hover text-base my-2">Registration</a>
        <a harf="/login" className="link link-hover text-base my-2">Merchant Login</a>
        <a harf="/contact" className="link link-hover text-base my-2">Contact Us</a>
        
      </div>
      <div className="font-pppins text-white">
        <span className="footer-title text-2xl">Important Page</span>
        <a className="link link-hover text-base my-2">Trams & Condition</a>
        <a className="link link-hover text-base my-2">Login</a>
      </div>

     
    </footer> 
    <div>
<br />
<hr />
<p className="text-center text-white py-4">
  Copyright © 2023 by Flynass All Rights Reserved. Developed By{" "}
  <a
    className="text-[#00a2ff]"
    target="_blank"
    href="https://sritfusion.com/"
  >
    SR IT Fusion
  </a>
</p>
</div>
  </div>
  );
};

export default Footer;
