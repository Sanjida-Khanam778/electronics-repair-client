import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const AddService = () => {
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
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/addService`,
        serviceData
      );
      console.log(data);
      form.reset()
      toast.success('Service Added SuccessFully')
    } catch (err) {
      console.log(err);
      toast.error(err.message)
    }
  };
  return (
    <div className="my-10 md:my-24 flex items-center justify-center">
      <div className="w-11/12 md:w-1/4 bg-slate-100 rounded-2xl">
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
            <button className="btn btn-primary text-white bg-[#683edd]">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
