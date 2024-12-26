import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";

const UpdateService = () => {
  const axiosSecures = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState({});
  const { title, area, price, description, image, name, photo, _id } = service;

  useEffect(() => {
    fetchServiceData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const fetchServiceData = async () => {
    const { data } = await axiosSecures.get(
      `/service/${id}`
    );
    setService(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const price = form.price.value;
    const title = form.title.value;
    const area = form.area.value;
    const description = form.description.value;
    const serviceData = {
      image,
      price,
      title,
      area,
      description,
    };
    console.table(serviceData, id);
    try {
      const { data } = await axiosSecures.patch(
        `${import.meta.env.VITE_API_URL}/updateService/${id}`,
        serviceData
      );
      console.log(data);
      form.reset();
      toast.success("Service Updated SuccessFully");
      navigate(`/manage-service/${user?.email}`);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="my-10 md:my-20">
      <h2 className="text-3xl text-center mb-4 md:mb-10">Update Form</h2>
      <form
        onSubmit={handleSubmit}
        className="card-body w-10/12 bg-slate-100 md:w-1/2 lg:w-1/3 mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">
              Image URL of the Service
            </span>
          </label>
          <input
            type="url"
            placeholder="Image URL"
            name="image"
            defaultValue={image}
            className="input input-bordered bg-white"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Service Name</span>
          </label>
          <input
            type="text"
            placeholder="Service Name"
            name="title"
            defaultValue={title}
            className="input input-bordered bg-white"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Price</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            name="price"
            defaultValue={price}
            className="input input-bordered bg-white"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Service Area</span>
          </label>
          <input
            type="text"
            placeholder="Service Area"
            name="area"
            defaultValue={area}
            className="input input-bordered bg-white"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Description</span>
          </label>
          <textarea
            placeholder="Description"
            className="textarea textarea-bordered bg-white"
            name="description"
            defaultValue={description}
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary text-white bg-red-600 hover:bg-red-700">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
