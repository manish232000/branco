// src/pages/Services.jsx
import { Link } from "react-router-dom";
import services from "../data/servicesData"; // import service data

export default function Services() {
  return (
    <section id="services" className="section py-12">
      <div className="container mx-auto px-4">
        <h2 className="h2 text-center font-bold text-3xl">Our Services</h2>
        <p className="text-slate-600 mt-2 text-center">
          We provide professional solutions to boost your business.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${index}`} // route with index for detail lookup
              className="card text-center p-6 shadow-lg rounded-xl bg-white hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.title}
                className="mx-auto w-72 h-72 object-contain"
              />
              <h3 className="font-bold mt-4 text-lg">{service.title}</h3>
              <p className="text-slate-600 mt-2">{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
