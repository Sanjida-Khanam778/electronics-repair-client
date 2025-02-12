import React from "react";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      {/* About Us Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About ElectroCare</h1>
        <p className="text-lg text-gray-600">
          Your trusted partner in electronic repairs, dedicated to ensuring your devices are in safe hands. We combine cutting-edge technology with unparalleled expertise to deliver exceptional service every time.
        </p>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="h-16 w-16 flex items-center justify-center mx-auto bg-red-600 text-white rounded-full mb-4 text-xl">
              1
            </div>
            <h4 className="font-semibold mb-2">Book a Service</h4>
            <p className="text-gray-600">
              Choose your device and book your repair online in just a few clicks.
            </p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 flex items-center justify-center mx-auto bg-red-600 text-white rounded-full mb-4 text-xl">
              2
            </div>
            <h4 className="font-semibold mb-2">Free Pickup</h4>
            <p className="text-gray-600">
              We'll pick up your device from your location for free.
            </p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 flex items-center justify-center mx-auto bg-red-600 text-white rounded-full mb-4 text-xl">
              3
            </div>
            <h4 className="font-semibold mb-2">We Fix It</h4>
            <p className="text-gray-600">
              Our experts repair your device using top-quality parts and tools.
            </p>
          </div>
          <div className="text-center">
            <div className="h-16 w-16 flex items-center justify-center mx-auto bg-red-600 text-white rounded-full mb-4 text-xl">
              4
            </div>
            <h4 className="font-semibold mb-2">Safe Delivery</h4>
            <p className="text-gray-600">
              Get your device back in perfect working condition with doorstep delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Customer-Centric Focus */}
      <section className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center mb-6">Our Commitment to You</h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          At ElectroCare, our customers are at the heart of everything we do. We guarantee:
        </p>
        <ul className="list-disc pl-8 md:pl-20 text-gray-600 space-y-4">
          <li>Fast and efficient service to minimize your downtime.</li>
          <li>Transparent pricing with no hidden fees.</li>
          <li>Quality repairs backed by a warranty.</li>
          <li>Friendly and professional customer support.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
