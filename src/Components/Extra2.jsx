import React from "react";
import AOS from "aos";
import faq from '../assets/images/faq.webp'

const Extra2 = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="my-10 lg:my-24 w-10/12 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl lg:text-5xl font-medium" data-aos="fade-up">
        Frequently Asked Questions
        </h2>
        <p
          className="text-gray-600 font-medium mb-4 md:mb-10 mt-1 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Have questions about our services? Find answers to the most common inquiries below. If you need further assistance, feel free to contact us!
        </p>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row justify-center items-center">
        <div>
            <img src={faq} alt="" />
        </div>
        <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          What services does ElectroCare offer?
          </div>
          <div className="collapse-content">
            <p>ElectroCare offers a wide range of electronic repair services including mobile phone repairs, laptop and computer repairs, tablet servicing, gaming console repairs, home appliance repairs, and more. We also provide maintenance services to ensure the longevity of your devices.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          How long does it take to repair my device?
          </div>
          <div className="collapse-content">
            <p>Repair time varies depending on the type of service. For most repairs, we offer a same-day service. However, some repairs, such as complex motherboard repairs, may take longer. We’ll provide you with an estimated time upon booking your service.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          Is there a warranty on repairs?
          </div>
          <div className="collapse-content">
            <p>Yes! We offer a warranty on all repairs. Our warranty covers parts and labor for a specific period depending on the type of repair. If you face any issues within the warranty period, we’ll fix it at no additional cost.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          How can I book a repair service?
          </div>
          <div className="collapse-content">
            <p>You can book a repair service through our website by filling out a simple service request form. Alternatively, you can contact our customer support team for assistance in scheduling an appointment.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Extra2;
