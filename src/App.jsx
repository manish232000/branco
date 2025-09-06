// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./components/Services";
import ServiceDetail from "./pages/ServiceDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServiceDetail />} />
    </Routes>
  );
}
