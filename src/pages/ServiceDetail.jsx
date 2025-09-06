// src/pages/ServiceDetail.jsx
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import services from "../data/servicesData";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services[id];

  if (!service) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold">Service not found</h2>
        <Link to="/services" className="text-blue-600 hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-12">
      {/* Hero Image */}
      <img
        src={service.img}
        alt={service.title}
        className="w-full max-h-96 object-cover rounded-xl shadow-lg mb-8"
      />

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-4 text-slate-800">
        {service.title}
      </h1>

      {/* Short description highlight */}
      <p className="bg-blue-50 border-l-4 border-blue-600 text-slate-700 p-4 rounded-lg mb-8">
        {service.desc}
      </p>

      {/* Render Markdown content */}
      <div className="prose prose-lg max-w-none prose-headings:text-slate-800 prose-p:text-slate-700 prose-li:marker:text-blue-600">
        <ReactMarkdown>{service.content}</ReactMarkdown>
      </div>

      {/* Back Button */}
      <div className="mt-12">
        <Link
          to="/services"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          ← Back to Services
        </Link>
      </div>
    </div>
  );
}
