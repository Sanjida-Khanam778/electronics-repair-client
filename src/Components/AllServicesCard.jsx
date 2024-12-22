import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

const AllServicesCard = ({ service }) => {
  const { title, area, price, description, image, name, photo, _id } = service;

  return (
    <div className="flex flex-col md:flex-row gap-6 border rounded-3xl w-11/12 md:w-2/3 mx-auto p-6 shadow-lg bg-white hover:shadow-2xl transition-all">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img
          src={image}
          className="rounded-3xl object-cover h-full w-full"
          alt={`${title}`}
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col w-full md:w-2/3 p-4">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            {title}
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            {description.substring(0, 99)}...
          </p>
        </div>

        {/* Service Provider Info */}
        <div className="flex items-center gap-4 mb-4">
          <img
            className="h-12 w-12 rounded-full border border-gray-300"
            src={photo}
            alt={name}
          />
          <p className="flex items-center text-gray-700 text-sm md:text-base">
            <FaUser className="mr-2 text-[#683edd]" /> {name}
          </p>
        </div>

        {/* Pricing and Location */}
        <div className="flex justify-between text-sm md:text-base text-gray-700 mb-4 flex-grow">
          <p className="flex items-center">
            <FaDollarSign className="mr-2 text-[#683edd]" /> ${price}
          </p>
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-[#683edd]" /> {area}
          </p>
        </div>

        {/* View Details Button */}
        <Link to={`/serviceDetails/${_id}`}>
          <button className="btn w-full mt-2 px-2 md:px-4 bg-[#683edd] hover:bg-[#3e0cc9] text-white border-none rounded-lg">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllServicesCard;
