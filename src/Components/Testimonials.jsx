import React from "react";

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
  return (
    <section className="py-12 lg:py-24 bg-gray-100 w-full">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <h4 className="mt-4 font-semibold text-gray-800">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
