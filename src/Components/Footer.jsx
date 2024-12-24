import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import logoFooter from "../assets/logo-big.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div>
      <footer
        className={`footer flex flex-col rounded p-5 lg:p-20 lg:pb-10 ${
          theme === "dark"
            ? "text-yellow-400 bg-opacity-95 bg-base-300"
            : "text-black bg-gray-200"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-6 justify-around items-end md:w-10/12 mx-auto md:mb-10">
          <div className="space-y-4 md:w-1/3">
            <div className="flex justify-center md:justify-start">
              <img className=" mb-2" src={logoFooter} alt="" />
            </div>
            <Link className="font-bold font-logoFont text-red-700 text-xl md:text-2xl xl:text-4xl">
              Electro<span className="text-yellow-400">Care</span>
            </Link>
            <p className="pt-4 font-bold text-black w-10/12 md:w-full mx-auto text-center md:text-start">
              Your ultimate destination for exploring, discovering, and
              celebrating the magic of movies.
            </p>
          </div>

          <div>
            <div className="flex gap-5 mb-10">
              <a className="text-4xl text-blue-500">
                <FaTwitter></FaTwitter>
              </a>

              <a>
                <FaFacebook className="text-4xl text-blue-600"></FaFacebook>
              </a>
            </div>

            <p className="text-xl mb-4 font-semibold">Contact Information</p>
            <p>
              Location: av. Washington 165, NY CA 54003 <br />
              Phone: +31 85 964 47 25 <br />
              Email: info@filmyscope.com <br />
            </p>
          </div>
        </div>
        <div className="border-t w-full p-5 flex justify-center ">
          <p className="text-center">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
