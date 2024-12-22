import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const PopularService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetchServiceData();
  }, []);
  const fetchServiceData = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/services`).then((res) => {
      console.log(res.data);
      setServices(res.data);
    });
  };
  return (
    <div className="my-24">
      <div className="mb-10">
        <h2 className="text-center font-body font-bold text-5xl">
          Popular Services
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5 w-10/12 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className=" mx-auto w-10/12 mt-5">
        <Link className="" to={`/allServices`}>
          <button className="btn mt-6 px-2 w-full md:px-4 bg-[#683edd] hover:bg-[#3e0cc9] text-white border-none">
            All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularService;
