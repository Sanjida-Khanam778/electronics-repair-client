import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

const AllServicesCard = ({ service }) => {
  const { title, area, price, description, image, name, photo, _id } = service;

  return (
    <div className="flex flex-col md:flex-row gap-6 border rounded-3xl w-11/12 md:w-2/3 lg:w-full mx-auto p-6 shadow-lg bg-white hover:shadow-2xl transition-all">
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img
          src={image}
          className="rounded-3xl object-cover h-full w-full"
          alt={`${title}`}
        />
      </div>

      <div className="flex flex-col w-full md:w-2/3 p-4">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
            {title}
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-4">
            {description.substring(0, 99)}...
          </p>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <img
            className="h-12 w-12 rounded-full border border-gray-300"
            src={photo}
            alt={name}
          />
          <p className="flex items-center text-gray-700 text-sm md:text-base">
            <FaUser className="mr-2 " /> {name}
          </p>
        </div>

        <div className="flex justify-between text-sm md:text-base text-gray-700 mb-4 flex-grow">
          <p className="flex items-center">
            <FaDollarSign className="mr-2" />Price: ${price}
          </p>
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2 " />Area: {area}
          </p>
        </div>

        <Link to={`/serviceDetails/${_id}`}>
          <button className="btn w-full mt-2 px-2 md:px-4 bg-red-600 hover:bg-red-700 text-white border-none rounded-lg">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllServicesCard;
