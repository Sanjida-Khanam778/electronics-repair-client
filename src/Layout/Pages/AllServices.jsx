import axios from "axios";
import React, { useEffect, useState } from "react";
import AllServicesCard from "../../Components/AllServicesCard";
import Loader from "./Loader";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false)
  const [sortOption, setSortOption] = useState("default"); // State for sorting

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchServiceData();
  }, [search, sortOption]);

  const fetchServiceData = () => {
    setLoader(true)
    axios
      .get(`${import.meta.env.VITE_API_URL}/allServices?search=${search}`)
      .then((res) => {
        let data = res.data;
setLoader(false)
        // Sorting Logic
        if (sortOption === "price-asc") {
          data.sort((a, b) => a.price - b.price); // Sort by ascending price
        } else if (sortOption === "price-desc") {
          data.sort((a, b) => b.price - a.price); // Sort by descending price
        }

        setServices(data);
      })
      .catch((err) => console.error("Error fetching services:", err));
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        All Services ({services.length})
      </h2>

    <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Search Bar */}
        <label className="input input-bordered flex items-center gap-2 mb-4 md:mb-10 md:w-1/4">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          className="grow"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      {/* Sorting Dropdown */}
      <div className="mb-6 md:w-1/4">
        <select
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
          className="select select-bordered w-full"
        >
          <option value="default">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>

      {/* Services Grid */}
      {
        loader?<Loader></Loader>: <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <AllServicesCard key={service._id} service={service} />
        ))}
      </div>
      }
     
    </div>
  );
};

export default AllServices;
