import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
const PopularService = () => {
  React.useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: false,   
      });
      AOS.refresh(); 
    }, []);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetchServiceData();
  }, []);
  const fetchServiceData = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/services`).then((res) => {
      // console.log(res.data);
      setServices(res.data);
    });
  };
  return (
    <div className="my-10 md:my-24">
      <div className="mb-4 md:mb-10">
        <h2 data-aos="fade-right" className="text-center font-body font-bold text-2xl md:text-5xl">
          Popular Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:w-11/12 w-full mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div
        
        className=" mx-auto w-10/12 mt-5"
      >
        <Link className="" to={`/allServices`}>
          <button data-aos="zoom-in" data-aos-duration="1000" className="btn mt-6 px-2 w-full md:px-4 bg-red-600 hover:bg-red-700 text-white border-none">
            All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularService;
