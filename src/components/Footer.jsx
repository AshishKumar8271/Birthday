import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#71bdf0] text-black py-8 -mt-1 font-ubuntu px-12">
      <div className="container mx-auto flex flex-col justify-between items-center md:flex-row xl:w-[1200px]">
        <div className="text-center md:text-left">
          <h3 className="text-base font-semibold">Contact Us</h3>
          <p className="text-xs text-nowrap">Email: example@example.com</p>
          <p className="text-xs">Phone: +1234567890</p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a
            href="#"
            className="text-base mx-2 hover:text-gray-200 transition-colors duration-300 text-nowrap"
          >
            Home
          </a>
          <a
            href="#"
            className="text-base mx-2 hover:text-gray-200 transition-colors duration-300 text-nowrap"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-base mx-2 hover:text-gray-200 transition-colors duration-300 text-nowrap"
          >
            Contact Us
          </a>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a href="#" className="mx-2">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="mx-2">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="mx-2">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
