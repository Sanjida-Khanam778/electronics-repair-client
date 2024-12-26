import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { MdPerson, MdLocationOn, MdDateRange } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";

const ServiceDetail = () => {
  const {theme} = useContext(AuthContext)
  const axiosSecures = useAxiosSecure();

  const navigate = useNavigate()
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const {data: serviceData} = useLoaderData();
  const { _id, name, photo, email, area, image, title, description, price } =
    serviceData || {};

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const form = e.target;
    const bookedData = {
      serviceId: form.id.value,
      title: form.title.value,
      image: form.image.value,
      name: form.name.value,
      email: form.email.value,
      userName: form.userName.value,
      userEmail: form.userEmail.value,
      instruction: form.instruction.value,
      price: form.price.value,
      date: startDate,
      status: "Pending",
    };

    try {
      const { data } = await axiosSecures.post(
        `/bookedService`,
        bookedData
      );
      console.log(data)
      toast.success("Service Booked Successfully");
      navigate('/booked-service')
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className={`text-3xl font-semibold text-center text-gray-800 mb-6 ${
          theme === "dark"
            ? "text-white bg-opacity-95 bg-base-300"
            : "text-black bg-gray-200"
        }`}>
        Service Details
      </h2>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Service Information
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src={image}
              alt={title}
              className="rounded-lg w-full object-cover h-full"
            />
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-2 flex items-center gap-2">
              <FcServices className="text-2xl"></FcServices>
              <strong>Service Name:</strong> {title}
            </p>
            <div className="flex gap-2 items-center text-gray-600 dark:text-gray-300 mb-2">
              <MdPerson className="text-[#3edd4b] text-2xl" />
              <p>
                <strong>Service Provider:</strong> {name}
              </p>
              <img src={photo} className="w-10 h-10 rounded-full ml-6" alt="" />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2 flex items-center gap-2">
              <MdLocationOn className="text-[#3eddc5] text-2xl" />
              <strong>Location:</strong> {area}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2 text-justify">
              <strong>Description:</strong> {description}
            </p>
            <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
              <FaDollarSign className="text-yellow-400" />
              <strong>Price:</strong> ${price}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center flex items-center justify-center">
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="btn px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition flex items-center gap-2"
        >
          <MdDateRange />
          Book Now
        </button>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-[530px]">
          <h2 className="text-4xl text-center mb-6">Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Id</span>
                </label>
                <input
                  className="input input-bordered"
                  name="id"
                  placeholder="Service Id"
                  defaultValue={_id}
                  type="text"
                  disabled={true}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  className="input input-bordered"
                  name="title"
                  placeholder="Service Name"
                  defaultValue={title}
                  type="text"
                  disabled={true}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Image</span>
                </label>
                <input
                  className="input input-bordered"
                  name="image"
                  placeholder="Service Image"
                  defaultValue={image}
                  type="url"
                  disabled={true}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Provider email</span>
                </label>
                <input
                  className="input input-bordered"
                  name="email"
                  placeholder="Provider email"
                  defaultValue={email}
                  type="email"
                  disabled={true}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Provider Name</span>
                </label>
                <input
                  className="input input-bordered"
                  name="name"
                  placeholder="Provider Name"
                  defaultValue={name}
                  type="text"
                  disabled={true}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Current User email</span>
                </label>
                <input
                  className="input input-bordered"
                  name="userEmail"
                  placeholder="Current User email"
                  defaultValue={user?.email}
                  type="email"
                  disabled={true}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Current User Name</span>
                </label>
                <input
                  className="input input-bordered"
                  name="userName"
                  placeholder="Current User Name"
                  defaultValue={user?.displayName}
                  type="text"
                  disabled={true}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Taking Date</span>
                </label>
                <DatePicker
                  className="input input-bordered"
                  name="date"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Special instruction</span>
                </label>
                <input
                  className="input input-bordered"
                  name="instruction"
                  placeholder="Special instruction"
                  type="text"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  className="input input-bordered"
                  name="price"
                  placeholder="Price"
                  type="text"
                  disabled
                  defaultValue={price}
                />
              </div>
            </div>
            <div className="flex">
              <div className="form-control w-full mt-6">
                <button className="btn w-full btn-primary text-white bg-red-600">
                  Purchase
                </button>
              </div>
            </div>
          </form>
         
        </div>
      </dialog>
    </div>
  );
};

export default ServiceDetail;
