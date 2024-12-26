import React from "react";
import { Link } from "react-router-dom";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { title, price, description, image, name, photo, _id } = service;

  return (
    <div className="flex flex-col md:flex-row items-start border shadow-lg rounded-3xl p-4 lg:p-6 hover:shadow-2xl transition w-full mx-auto bg-white dark:bg-gray-800 dark:text-gray-200">
      <div className="lmd:w-1/3 w-full h-[300px] mb-4 md:mb-0">
        <img
          src={image}
          className="h-full w-full rounded-3xl object-cover"
          alt={title}
        />
      </div>

      <div className="md:w-2/3 w-full md:pl-6 flex flex-col">
        <h2 className="text-xl md:text-2xl font-semibold  mb-3">{title}</h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description.length > 99
            ? description.substring(0, 99) + "..."
            : description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {photo ? (
              <img
                className="h-10 w-10 rounded-full border-2 border-red-600"
                src={photo}
                alt={name}
              />
            ) : (
              <FaUserCircle className="h-10 w-10 text-gray-400" />
            )}
            <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
              {name}
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row">
          <Link to={`/serviceDetails/${_id}`}>
            <button className="btn  py-2 border-2 border-red-600 bg-white hover:bg-red-600 hover:text-white font-semibold rounded-lg transition">
              View Details
            </button>
          </Link>
          <div className="flex items-center gap-2 text-lg  font-bold">
            <MdOutlinePriceChange className="text-2xl" />${price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;