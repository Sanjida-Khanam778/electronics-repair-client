import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ManageService = () => {
  const myServices = useLoaderData();
    const [services, setServices] = useState(myServices);
    const {user} = useContext(AuthContext)

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  const fetchServiceData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/services/${user?.email}`
    );
    setServices(data);
  };
  const handleDelete = async(id) => {
    try{
        axios.delete(`${import.meta.env.VITE_API_URL}/service/${id}`)
        .then(res=>{
            Swal.fire({
                title: "Are you sure?",
                text: "Want to permanently delete this?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your Service has been deleted.",
                    icon: "success"
                  });
                  fetchServiceData()
                  console.log(res.data)
                }
              });
        
        })
    // console.log(data)
    
    }catch(err){
        console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="my-12">
      <div className="overflow-x-auto w-11/12 md:w-9/12 mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th>Service Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Action</th>
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
                      <div className="text-sm opacity-50">{service?.area}</div>
                    </div>
                  </div>
                </td>
                <td>
                  ${service?.price}
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">
                        Desktop Support Technician
                      </span> */}
                </td>
                <td>{service?.description.substring(0, 25)}...</td>
                <th className="space-x-2 flex">
                  <Link to={`/updateService/${service?._id}`}>
                    <button
                      // onClick={() =>
                      //   document.getElementById("my_modal_3").showModal()
                      // }
                      className="btn btn-ghost"
                    >
                      <BiEdit className="text-2xl text-green-600"></BiEdit>Edit
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
            ))}
          </tbody>
        </table>
      
      </div>
    </div>
  );
};

export default ManageService;
