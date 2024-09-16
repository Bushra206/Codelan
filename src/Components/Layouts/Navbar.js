import React, { useRef, useState } from "react";
import logo from "../../assets/logo.png";
import { MdOutlineMenu } from "react-icons/md";
import Authentication from "../Common/Modals/AuthenticationModal/Authentication";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef("");
  const handleScroll = (e) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const handleClick = (e) => {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  };

  const menu = (
    <>
      <Link
        to="#features"
        className="text-[14px] lg:py-0 py-1.5 pl-2 lg:pl-0 lg:text-[18px] font-medium leading-[22px]"
        onClick={handleScroll}>
        Features
      </Link>
      <Link
        to="#pricing"
        className="text-[14px] lg:py-0 py-1.5 pl-2 lg:pl-0 lg:text-[18px] font-medium leading-[22px]"
        onClick={handleScroll}>
        Pricing
      </Link>
      <Link
        to="#automation"
        className="text-[14px] lg:py-0 py-1.5 pl-2 lg:pl-0 lg:text-[18px] font-medium leading-[22px]"
        onClick={handleScroll}>
        Automation
      </Link>
      <Link
        to="#contact"
        className="text-[14px] lg:py-0 py-1.5 pl-2 lg:pl-0 lg:text-[18px] font-medium leading-[22px]"
        onClick={handleScroll}>
        Contact us
      </Link>
    </>
  );
  return (
    <>
      <div className="navbar max-w-[1560px] h-[52px] mt-[12px] lg:mt-[32px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="w-7 mx-auto lg:hidden">
              <MdOutlineMenu className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content flex flex-col mt-3 z-[1] p-2 shadow bg-[#222222] rounded-[4px] w-52 border border-[#39393A]"
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
              {menu}
            </ul>
          </div>
          <div className="flex justify-normal items-center gap-1 lg:gap-2">
            <img src={logo} alt="logo" />
            <h2 className="text-[19px] lg:text-2xl font-bold leading-[29px] text-white">
              CodeLane
              <span className="text-[#396afd]">.</span>
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex z-[9999]">
          <ul className="menu menu-horizontal px-1 space-x-[32px]">{menu}</ul>
        </div>
        <div className="navbar-end gap-3 lg:gap-6">
          <div
            className="relative max-w-[77px] lg:max-w-[97px] h-[40px] lg:h-[52px] rounded-lg bg-gradient-to-tr from-[#ffffff] to-[#2244ff] p-0.5 shadow-lg"
            onClick={() => setVisible(true)}>
            <div className="bg-[#111111] hover:bg-gradient-to-tr from-[#ffffff] to-[#2244ff] px-[15px]  lg:px-[22px] py-[8px] lg:py-[11px] rounded-md cursor-pointer flex justify-start items-center relative z-[9999]">
              <p className="font-medium text-[14px] lg:text-[18px] text-nowrap text-center">
                Log in
              </p>
            </div>
          </div>
          <div
            className="w-[120px] lg:w-[162px] h-[40px] lg:h-[52px] bg-[#2244FF] rounded-[4px] text-[14px] lg:text-[18px] font-medium flex justify-center items-center cursor-pointer"
            onClick={() => setVisible(true)}>
            Start for free
          </div>
        </div>
      </div>

      <Authentication visible={visible} setVisible={setVisible} />
    </>
  );
};

export default Navbar;
