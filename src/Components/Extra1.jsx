import React from "react";
import img1 from '../../src/assets/images/slider2.jpeg'
const Extra1 = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <h2>Why Choose ElectroCare?</h2>
        <p>
          Delivering top-notch repair services for all your electronic devices.
          Giving you peace of mind and the confidence to trust us with your most
          valuable gadgets.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 border">
          <img className="h-56" src={img1} alt="" />
          <h2>Expert Technicians</h2>
          <p>Certified and experienced professionals</p>
          <button>Learn More About Us</button>
        </div>
        <div className="p-6 border">
          <img className="h-56" src={img1} alt="" />
          <h2>Quick Turnaround</h2>
          <p>Same-day service for most repairs</p>
          <button>Learn More About Us</button>
        </div>
        <div className="p-6 border">
          <img className="h-56" src={img1} alt="" />
          <h2>Transparent Pricing</h2>
          <p>No hidden costs, upfront quotes</p>
          <button>Learn More About Us</button>
        </div>
        <div className="p-6 border">
          <img className="h-56" src={img1} alt="" />
          <h2>Warranty Coverage</h2>
          <p>All repairs backed by a satisfaction guarantee</p>
          <button>Learn More About Us</button>
        </div>
      </div>
    </div>
  );
};

export default Extra1;
