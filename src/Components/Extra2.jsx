import React from 'react';
import AOS from "aos";


const Extra2 = () => {
    React.useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false,   
        });
        AOS.refresh(); 
      }, []);
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
        <h2
          className="text-2xl lg:text-5xl font-medium"
          data-aos="fade-up"
        >
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
        </div>
    );
};

export default Extra2;