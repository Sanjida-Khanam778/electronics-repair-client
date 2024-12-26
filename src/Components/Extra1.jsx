import React from "react";
import { FaTools, FaClock, FaDollarSign, FaShieldAlt } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

const Extra1 = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full md:w-11/12 mx-auto mb-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl lg:text-5xl font-medium" data-aos="fade-up">
          Why Choose ElectroCare?
        </h2>
        <p
          className="text-gray-600 font-medium mb-4 md:mb-10 mt-1 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Delivering top-notch repair services for all your electronic devices.
          Giving you peace of mind and the confidence to trust us with your most
          valuable gadgets.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          className="p-6 border border-red-600 rounded-3xl shadow-xl flex flex-col items-center text-center"
          data-aos="fade-up"
        >
          <img
            className="h-56 rounded-2xl border-2 mb-4"
            src="https://i.ibb.co.com/Xp4nS0f/expert.jpg"
            alt="Expert Technicians"
          />
          <FaTools size={50} className="text-blue-600 mb-4" />
          <h2 className="font-bold text-3xl mb-2">Expert Technicians</h2>
          <p className="text-gray-600 flex-grow">
            Certified and experienced professionals
          </p>
          <button className="px-4 py-2 btn mt-2 bg-red-600 text-white rounded-full hover:bg-red-500">
            Learn More About Us
          </button>
        </div>
        <div
          className="p-6 border border-red-600 rounded-3xl shadow-xl flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            className="h-56 rounded-2xl border-2 mb-4"
            src="https://i.ibb.co.com/gJxZ3Mf/Quick.jpg"
            alt="Quick Turnaround"
          />
          <FaClock size={50} className="text-green-500 mb-4" />
          <h2 className="font-bold text-3xl mb-2">Quick Turnaround</h2>
          <p className="text-gray-600 flex-grow">
            Same-day service for most repairs
          </p>
          <button className="px-4 py-2 btn mt-2 bg-red-600 text-white rounded-full hover:bg-red-500">
            Learn More About Us
          </button>
        </div>
        <div
          className="p-6 border border-red-600 rounded-3xl shadow-xl flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            className="h-56 rounded-2xl border-2 mb-4"
            src='https://i.ibb.co.com/SdzXhtv/Pricing.jpg'
            alt="Transparent Pricing"
          />
          <FaDollarSign size={50} className="text-blue-600 mb-4" />
          <h2 className="font-bold text-3xl mb-2">Transparent Pricing</h2>
          <p className="text-gray-600 flex-grow">
            No hidden costs, upfront quotes
          </p>
          <button className="px-4 py-2 btn mt-2 bg-red-600 text-white rounded-full hover:bg-red-500">
            Learn More About Us
          </button>
        </div>
        <div
          className="p-6 border border-red-600 rounded-3xl shadow-xl flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <img
            className="h-56 rounded-2xl border-2 mb-4"
            src='https://i.ibb.co.com/C80Vdjm/Warranty.webp'
            alt="Warranty Coverage"
          />
          <FaShieldAlt size={50} className="text-green-600 mb-4" />
          <h2 className="font-bold text-3xl mb-2">Warranty Coverage</h2>
          <p className="text-gray-600">
            All repairs backed by a satisfaction guarantee
          </p>
          <button className="px-4 py-2 btn mt-2 bg-red-600 text-white rounded-full hover:bg-red-500">
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Extra1;
