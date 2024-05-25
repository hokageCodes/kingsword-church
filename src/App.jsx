import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/footer/Footer";
import AboutPage from "./pages/AboutPage";
import ConnectPage from "./pages/ConnectPage";
import VolunteerForm from "./components/volunteer-form/page";
import ContactForm from "./components/contact-form/page";
import GivePage from "./pages/GivePage";
import CalgaryPage from "./pages/CalgaryPage";
import TorontoPage from "./pages/TorontoPage";
import VancouverPage from "./pages/VancouverPage";
import VideoSection from "./pages/ListenPage";
import Locations from "./components/our-locations/OurLocationsContent";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/volunteer-form" element={<VolunteerForm />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/give" element={<GivePage />} />
        <Route path="/locations/calgary" element={<CalgaryPage />} />
        <Route path="/locations/toronto" element={<TorontoPage />} />
        <Route path="/locations/vancouver" element={<VancouverPage />} />
        <Route path="/listen" element={<VideoSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App; 
