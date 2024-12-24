import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ServiceStatus from "../../Components/ServiceStatus";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";

const ServiceToDo = () => {
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosSecures = useAxiosSecure();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  useEffect(() => {
    fetchServiceData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);
  const fetchServiceData = async () => {
    const { data } = await axiosSecures.get(
      `/myServicesToDo/${user?.email}`
    );
    setServices(data);
    console.log(data);
  };
  return (
    <div>
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-xl">
            <th>Service Info</th>
            <th>Service Booked by User</th>
            <th>Price</th>
            <th>Date</th>
            <th>Instruction</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
           <ServiceStatus key={service._id} service={service}></ServiceStatus>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceToDo;
