import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { format } from "date-fns";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";

const BookedService = () => {
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
    const { data } = await axiosSecures.get(`/bookedServices/${user?.email}`);
    setServices(data);
  };
  return (
    <div className="w-11/12 md:w-9/12 mx-auto my-10 md:my-20">
       <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
        <h2
          className="text-2xl lg:text-5xl font-medium text-center"
        >Manage Your Booked Services
        </h2>
        <p
          className="text-gray-600 font-medium mb-4 md:mb-10 mt-1 text-center"
        
        >
         Track the status of your booking services, update status, and ensure timely completion with ease
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>Service Info</th>
              <th>Service Provider</th>
              <th>Price</th>
              <th>Date</th>
              <th>Instruction</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={service.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{service?.title}</div>
                      <div className="text-sm opacity-50">
                        Service ID: {service?.serviceId}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{service?.name}</div>
                      <div className="text-sm opacity-50">
                        Email: {service?.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  ${service?.price}
                  <br />
                </td>
                <td>{format(new Date(service?.date), "P")}</td>
                <td>{service?.instruction.substring(0, 20)}...</td>
                <td
                  className={`${
                    service?.status === "Pending" && "text-red-600"
                  }`}
                >
                  {service?.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedService;
