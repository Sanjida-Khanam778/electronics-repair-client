import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const testimonials = [
  { 
    name: "John Doe",
    role: "Customer",
    image: "https://i.pravatar.cc/100?img=1",
    quote:
      "Amazing repair service! My laptop was fixed within a day, and it works like new.",
  },
  {
    name: "Sarah Khan",
    role: "Business Owner",
    image: "https://i.pravatar.cc/100?img=2",
    quote:
      "Highly professional and affordable. Fixed my smartphone screen flawlessly!",
  },
  {
    name: "Michael Lee",
    role: "Freelancer",
    image: "https://i.pravatar.cc/100?img=3",
    quote:
      "Great customer service and quick turnaround. Will definitely recommend!",
  },
];

const Testimonials = () => {
    const {theme} = useContext(AuthContext)
  return (
    <section className={`py-12 lg:py-24 w-full lg:my-24 ${theme==='light' && 'bg-slate-50'}`}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl lg:text-5xl font-medium" data-aos="fade-up">
            What Our Clients Say
          </h2>
          <p
            className="text-gray-600 font-medium mb-4 md:mb-10 mt-1 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From quick and reliable repairs to outstanding customer service,
            hear firsthand experiences from those who trust us with their
            devices.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <h4 className="mt-4 font-semibold text-gray-800">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
