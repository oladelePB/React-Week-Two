import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "../Design/Navbar";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";

// install react-router-dom with the below command
// npm i react-router-dom
const BasicRouting = () => {
  return (
    <div>
      <Router>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="profile/:username" element={<Profile />} />

          {/* Error Page would always be at the buttom i.e. last route. */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default BasicRouting;
