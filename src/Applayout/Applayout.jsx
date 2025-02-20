import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Codex from "../Pages/codex/Codex";
import Socialprofile from "../Pages/SocialProfiles/Socialprofiles";
import Contact from "../Pages/Contact/Contact";
import Loading from "../Components/Loading/Loading";

const Applayout = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, [location.pathname]); 
  return (
    <div>
      <Navbar />
      {loading ? ( 
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/codex" element={<Codex />} />
          <Route path="/socials" element={<Socialprofile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </div>
  );
};

export default Applayout;
