import axios from "axios";
import React, { useEffect, useState } from "react";
import AllServicesCard from "../../Components/AllServicesCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchServiceData();
  }, [search]);

  const fetchServiceData = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/allServices?search=${search}`)
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => console.error("Error fetching services:", err));
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        All Services ({services.length})
      </h2> 
      <label className="input input-bordered flex items-center gap-2 w-2/3 md:w-1/3 mx-auto mb-4 md:mb-10">
        <input type="text" onChange={e=>setSearch(e.target.value)} name="search" className="grow" placeholder="Search" />
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

      <div className="grid grid-cols-1 gap-8">
        {services.map((service) => (
          <AllServicesCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
