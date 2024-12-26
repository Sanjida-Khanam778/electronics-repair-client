import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ServiceStatus from "../../Components/ServiceStatus";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";
import { ScrollRestoration } from "react-router-dom";
import { VscEmptyWindow } from "react-icons/vsc";

const ServiceToDo = () => {
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosSecures = useAxiosSecure();

  useEffect(() => {
    fetchServiceData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);
  const fetchServiceData = async () => {
    const { data } = await axiosSecures.get(`/myServicesToDo/${user?.email}`);
    setServices(data);
    console.log(data);
  };
  return (
    <div className="my-10">
      <ScrollRestoration></ScrollRestoration>
      <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
        <h2 className="text-2xl lg:text-5xl font-medium text-center">
          Update Status of your Services
        </h2>
        <p className="text-gray-600 font-medium mb-4 md:mb-10 mt-1 text-center">
          Manage the status of your services, update status, and ensure timely
          completion with ease
        </p>
      </div>
      <div className="overflow-x-auto mx-auto w-11/12 md:w-10/12">
        <table className="table">
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
            {services && services.length > 0 ? (
              services.map((service) => (
                <ServiceStatus
                  key={service._id}
                  service={service}
                ></ServiceStatus>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 p-10">
                  <h2 className="text-4xl font-bold text-red-500 flex justify-center gap-6">
                    <VscEmptyWindow></VscEmptyWindow>No Service to Show
                  </h2>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceToDo;
