import axios from "axios";
import { format } from "date-fns";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ServiceStatus = ({ service }) => {
  const { status, _id } = service || {};
  // console.log("Prev", status);
  const [currentStatus, setCurrentStatus] = useState(status || "Pending");
  const handleStatusChange = async(e) => {
    const newStatus = e.target.value;
    setCurrentStatus(newStatus);
    // console.log("New", newStatus, _id);
    try {
      const {data} = await axios.put(
        `${import.meta.env.VITE_API_URL}/bookedService/${_id}`,
        { status: newStatus }
      );
      console.log(data)
      if (data.modifiedCount) {
        toast.success(`Status updated to ${newStatus}`);
      }
    } catch (error) {
      toast.error("Failed to update status. Please try again.");
      setCurrentStatus(status); // Revert to the original status if update fails
    }
  };
  const {} = service || {};
  return (
    <tr key={service._id}>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={service.image} alt="Avatar Tailwind CSS Component" />
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
            <div className="font-bold">{service?.userName}</div>
            <div className="text-sm opacity-50">
              Email: {service?.userEmail}
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
        className={`${currentStatus === "Pending" && "text-red-600"} ${
          currentStatus === "Working" && "text-yellow-500"
        } ${currentStatus === "Completed" && "text-green-600"}`}
      >
        <select
          value={currentStatus}
          onChange={handleStatusChange}
          className={`select select-bordered w-full max-w-xs `}
        >
          <option value="Pending">Pending</option>
          <option value="Working">Working</option>
          <option value="Completed">Completed</option>
        </select>
      </td>
    </tr>
  );
};

export default ServiceStatus;