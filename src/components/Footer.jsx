import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#71bdf0] text-black py-8 -mt-1 px-24">
      <div className="container mx-auto flex flex-col justify-between items-center md:flex-row ">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm">Email: example@example.com</p>
          <p className="text-sm">Phone: +1234567890</p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a
            href="#"
            className="text-lg mx-2 hover:text-gray-200 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-lg mx-2 hover:text-gray-200 transition-colors duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-lg mx-2 hover:text-gray-200 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a href="#" className="mx-2">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="mx-2">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="mx-2">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
