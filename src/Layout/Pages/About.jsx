import React from "react";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Mission and Vision Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Mission and Vision</h1>
        <p className="text-lg text-gray-600">
          At ElectroCare, our mission is to provide fast, reliable, and affordable repair solutions for your electronics. Our vision is to be the most trusted name in electronic repairs worldwide, driven by innovation and excellent customer care.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Head Technician</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="rounded-full mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold">Michael Brown</h3>
            <p className="text-gray-600">Customer Support Manager</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic mb-4">
              "ElectroCare saved my laptop from the brink of death! Their service was fast and very affordable. Highly recommended!"
            </p>
            <h4 className="font-semibold">- Sarah Wilson</h4>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic mb-4">
              "I’ve never experienced such excellent customer support. They truly go above and beyond!"
            </p>
            <h4 className="font-semibold">- James Carter</h4>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6">Our Journey</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="h-8 w-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
              2015
            </span>
            <p className="text-gray-600">
              Founded in a small workshop, ElectroCare began with a mission to offer reliable repair services for all electronic devices.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="h-8 w-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
              2020
            </span>
            <p className="text-gray-600">
              Expanded to multiple locations, earning a reputation for fast and affordable repairs.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="h-8 w-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
              2023
            </span>
            <p className="text-gray-600">
              Launched an innovative repair tracker and expanded globally with a commitment to quality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
