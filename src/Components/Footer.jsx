import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import logoFooter from "../assets/logo-big.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div>
      <footer
        className={` flex flex-col rounded p-5 lg:py-20 lg:pb-10 ${
          theme === "dark"
            ? "text-white bg-opacity-95 bg-base-300"
            : "text-black bg-gray-200"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-6 justify-around items-center md:items-end text-center md:w-10/12 mx-auto md:mb-10">
          <div className="space-y-4 md:w-1/3 flex flex-col">
            <div className="flex justify-center md:justify-start">
              <img className="mt-10 md:mt-0 mb-2" src={logoFooter} alt="" />
            </div>
            <Link className="font-bold font-logoFont text-red-700 text-center md:text-start text-3xl xl:text-4xl">
              Electro<span className="text-yellow-400">Care</span>
            </Link>
            <p className={`pt-4 font-bold text-opacity-60 text-black w-10/12 md:w-full mx-auto text-center md:text-start ${
          theme === "dark"
            ? "text-white "
            : "text-black "
        }`}>
              Your ultimate destination for exploring, discovering, and
              celebrating the magic of movies.
            </p>
          </div>
          <div className="flex flex-col justify-center md:justify-end">
            <h6 className={`mb-4 text-xl font-bold ${
          theme === "dark"
            ? "text-white "
            : "text-black "
        }`}>Explore</h6>
            <a className={`text-opacity-60 font-bold ${
          theme === "dark"
            ? "text-white "
            : "text-black "
        }`}>Services</a>
            <a className={`text-opacity-60 font-bold ${
          theme === "dark"
            ? "text-white "
            : "text-black "
        }`}>Manage Booking</a>
            <a className={`text-opacity-60 font-bold ${
          theme === "dark"
            ? "text-white "
            : "text-black "
        }`}>Book a Service</a>
            <a className={`text-opacity-60 font-bold ${
          theme === "dark"
            ? "text-white "
            : "text-black "
        }`}>Services-To-Do</a>
          </div>
          <div>
            <div className="flex justify-center md:justify-end gap-5 mb-10">
              <Link
                to={"https://www.linkedin.com/in/sanjida-khanam-ice"}
                className="text-4xl text-blue-700"
              >
                <FaLinkedin></FaLinkedin>
              </Link>

              <Link
                to={"https://www.facebook.com"}
                className="text-4xl text-blue-600"
              >
                <FaFacebook></FaFacebook>
              </Link>
            </div>

            <p className="text-xl mb-4 text-start md:text-end font-semibold">Contact Information</p>
            <p className={`text-start md:text-end mb-4 md:mb-0 font-bold text-opacity-60 ${
          theme === "dark"
            ? "text-white "
            : "text-black "
        }`}>
              Location: av. Washington 165, NY CA 54003 <br />
              Phone: +31 85 964 47 25 <br />
              Email: info@filmyscope.com <br />
            </p>
          </div>
        </div>
        <div className="border-t border-black border-opacity-20 w-full pt-4 flex justify-center ">
          <p className="text-cente font-mediumr">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
