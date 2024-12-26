import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Components/hooks/useAxiosSecure";

const AddService = () => {
  const axiosSecures = useAxiosSecure();

  const { user } = useContext(AuthContext);
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
      photo: user?.photoURL,
      name: user?.displayName,
      email: user?.email,
    };
    console.table(serviceData);
    try {
      const { data } = await axiosSecures.post(`/addService`, serviceData);
      console.log(data);
      form.reset();
      toast.success("Service Added SuccessFully");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="my-10 md:my-24 flex-col flex items-center justify-center">
      <div className="flex flex-col justify-center items-center w-10/12 mx-auto">
        <h2 className="text-2xl lg:text-5xl font-medium text-center">
          Add a New Service
        </h2>
        <p className="text-gray-600 font-medium mb-4 md:mb-10 mt-1 text-center">
          Fill out the form below to add a new service to your offerings. Make
          sure to provide all the necessary details to attract customers.{" "}
        </p>
      </div>
      <div className="w-11/12 md:w-1/2 lg:w-1/4 bg-slate-100 rounded-2xl">
        <form onSubmit={handleSubmit} className="card-body">
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
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn hover:bg-red-700 text-white bg-red-600">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
