import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import SocialLoginAuthIcon from "./SocialLoginAuthIcon";
import axios from "axios";

const Signin = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    axios
      .post("https://api.webfusionx.com/api/users/login", {
        email: email,
        password: password,
        confirmPassword: password,
      })
      .then(() => {
        window.open("https://admin.codelaneit.com", "_self");
      });
  };
  return (
    <div>
      <from>
        <div className="my-4">
          <label className="text-[14px] font-normal text-[#D7D7D7]">
            Email address
          </label>
          <input
            type="text"
            placeholder="john@gmail.com"
            className="input w-full  h-[34px] placeholder:text-[13px] rounded-[4px] bg-[#222222] border border-[#39393A] mt-1 px-3"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>

        <div className="relative">
          <label className="text-[14px] font-normal text-[#D7D7D7]">
            Password
          </label>
          <input
            type={`${show ? "text" : "password"}`}
            placeholder="********"
            className="input w-full  h-[34px] placeholder:text-[13px] rounded-[4px] bg-[#222222] border border-[#39393A] mt-1 px-3"
            onChange={(e) => setPassword(e.target.value)}
          />

          {show ? (
            <AiOutlineEye
              className="absolute top-10 right-3 text-xl text-gray-600 cursor-pointer"
              onClick={() => setShow(!show)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="absolute top-10 text-xl right-3 text-gray-400 cursor-pointer"
              onClick={() => setShow(!show)}
            />
          )}
        </div>

        <button
          className="w-full  h-[34px] placeholder:text-[13px] rounded-[4px] text-[14px] font-medium border border-[#39393A] bg-[#2244FF] mt-7"
          onClick={() => login()}
        >
          Sign In
        </button>
      </from>
      <div className="flex flex-col w-full my-5">
        <div className="divider">Or</div>
      </div>
      <SocialLoginAuthIcon />
    </div>
  );
};

export default Signin;
