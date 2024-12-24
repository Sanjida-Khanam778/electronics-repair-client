import axios from "axios";
import React, { useEffect, useState } from "react";
import AllServicesCard from "../../Components/AllServicesCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    fetchServiceData();
  }, []);

  const fetchServiceData = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/allServices`)
      .then((res) => {
        // console.log(res.data);
        setServices(res.data);
      })
      .catch((err) => console.error("Error fetching services:", err));
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Page Header */}
      <h2 className="text-3xl font-bold text-center text-[#683edd] mb-6">
        All Services ({services.length})
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-8">
        {services.map((service) => (
          <AllServicesCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
