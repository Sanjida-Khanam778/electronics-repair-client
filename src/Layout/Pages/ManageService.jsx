import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";
import { signalContext } from "../../Provider/SignalProvider";
import { VscEmptyWindow } from "react-icons/vsc";

const ManageService = () => {
  const { signal, setSignal } = useContext(signalContext);
  const axiosSecures = useAxiosSecure();
  const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axiosSecures.get(`/services/${user?.email}`).then((res) => {
      setServices(res.data);
    });
  }, [axiosSecures, user?.email, signal]);

  const handleDelete = async (id) => {
    try {
      axiosSecures
        .delete(`${import.meta.env.VITE_API_URL}/service/${id}`)
        .then((res) => {
          Swal.fire({
            title: "Are you sure?",
            text: "Want to permanently delete this?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Service has been deleted.",
                icon: "success",
              });
              setSignal(Math.random());
              console.log(res.data);
            }
          });
        });
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="my-12">
      <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
        <h2 className="text-2xl lg:text-5xl font-medium text-center">
        Manage Your Services
        </h2>
        <p className="text-gray-600 font-medium mb-4 md:mb-10 mt-1 text-center">
        View, edit, and delete the services you’ve added. Keep your offerings up-to-date and organized.
        </p>
      </div>
      <div className="overflow-x-auto w-11/12 md:w-9/12 mx-auto">
        <table className="table">
          <thead>
            <tr className="text-xl">
              <th>Service Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services && services.length > 0 ? (
              services.map((service) => (
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
                          {service?.area}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    ${service?.price}
                    <br />
                  </td>
                  <td>{service?.description.substring(0, 25)}...</td>
                  <th className="space-x-2 flex">
                    <Link to={`/updateService/${service?._id}`}>
                      <button className="btn btn-ghost">
                        <BiEdit className="text-2xl text-green-600"></BiEdit>
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="btn btn-ghost "
                    >
                      <FiDelete className="text-2xl text-red-500"></FiDelete>
                      Delete
                    </button>
                  </th>
                </tr>
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

export default ManageService;
