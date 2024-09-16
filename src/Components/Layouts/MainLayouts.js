import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FeatureNotifyPart from "../Ui/HomeSection/FeatureNotifyPart";
import Footer from "./Footer/Footer";

const MainLayouts = () => {
  return (
    <div className="">
      <Navbar />
      <div className="h-screen">
        {" "}
        <Outlet />
        {/* <div className="space-y-[-100px]"> */}
        <Footer />
        {/* </div> */}
      </div>

      {/* <div className="space-y-[-100px]">
        <FeatureNotifyPart />
        <Footer />
      </div> */}
    </div>
  );
};

export default MainLayouts;
