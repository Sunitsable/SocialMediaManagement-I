import React from "react";
import "./App.css";
import Login from "./Components/Login";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Testimonials from "./Components/Testimonials";
import BgImage from "./Components/BgImage";
import BgImageII from "./Components/BgImageII";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/HomePage";
import Generate from "./GenerateContent/Generate";
import GetOptSales from "./GetOptSales/GetOptSales";
import GetTargetAudi from "./GetTargetAudi/GetTargetAudi";
import BestTime from "./BestTime/BestTime";
import TrackPerfom from "./TrackPerform/TrackPerfom";
import Charts from "./Components/Charts";
import Charts2_1 from "./Components/Charts2_1";
import Charts2_2 from "./Components/Charts2_2";
import Charts2_3 from "./Components/Charts2_3";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Route for the root URL */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/manage-website"
            element={
              <>
                <BgImage>
                  <Navbar />
                  <Intro />
                </BgImage>
                <BgImageII>
                  <About />
                  <Testimonials />
                </BgImageII>
                <Footer />
              </>
            }
          />
         <Route path="/homepage" element={<HomePage/>} />
         <Route path="/generatecontent" element={<Generate/>} />
         <Route path="/getoptsales" element={<><GetOptSales/><Charts/></>} />
         <Route path="/gettargetaudi" element={<GetTargetAudi/>} />
         <Route path="/trackperformance" element={<TrackPerfom/>} />
         <Route path="/besttime" element={<BestTime/>} />
         <Route path="/charts2_1" element={<><Charts2_1/><Charts2_2/><Charts2_3/></>} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
