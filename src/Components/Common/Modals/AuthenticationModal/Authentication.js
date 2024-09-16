import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import Register from "./Register";
import Signin from "./Signin";
import { CgClose } from "react-icons/cg";

const Authentication = ({ setVisible, visible }) => {
  const [activeTab, setActiveTab] = useState("register");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Dialog
      header="Header"
      visible={visible}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
      className="bg-[#222222] w-[360px] lg:w-[437px] h-[787px] py-6 px-7 rounded-[4px] relative"
      onHide={() => setVisible(false)}>
      <CgClose
        className="absolute top-7 right-4 cursor-pointer"
        onClick={() => setVisible(false)}
      />
      <div className="flex justify-normal items-center gap-5 mb-5">
        <p
          className={`text-[17px] font-semibold ${
            activeTab === "register"
              ? "text-[#D7D7D7] btn_active"
              : "text-[#888888]"
          } leading-[24.2px] cursor-pointer`}
          onClick={() => handleTabChange("register")}>
          Register
        </p>
        <p
          className={`text-[17px] font-semibold ${
            activeTab === "signin"
              ? "text-[#D7D7D7] btn_active"
              : "text-[#888888]"
          } leading-[24.2px] cursor-pointer`}
          onClick={() => handleTabChange("signin")}>
          Sign In
        </p>
      </div>
      {activeTab === "register" && <Register />}
      {activeTab === "signin" && <Signin />}
    </Dialog>
  );
};

export default Authentication;
