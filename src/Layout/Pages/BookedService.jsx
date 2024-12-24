import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { format } from "date-fns";

const BookedService = () => {
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetchServiceData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);
  const fetchServiceData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/bookedServices/${user?.email}`
    );
    setServices(data);
    // console.log(data);
  };
  return (
    <div className="w-11/12 md:w-9/12 mx-auto my-10 md:my-20">
        <h2 className="text-3xl text-center mb-4 md:mb-10">Booked Services</h2>
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
              <td className={`${service?.status === 'Pending' && 'text-red-600'}`}>{service?.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookedService;
