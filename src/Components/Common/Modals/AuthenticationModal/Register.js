import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import SocialLoginAuthIcon from "./SocialLoginAuthIcon";
import axios from "axios";

const Register = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = () => {
    axios
      .post("http://api.webfusionx.com/api/users/signup", {
        email: email,
        password: password,
        confirmPassword: password,
      })
      .then((r) => {
        console.log(r);
      });
  };
  return (
    <div>
      <from>
        <div>
          <label className="text-[14px] font-normal text-[#D7D7D7]">
            Full name
          </label>
          <input
            type="text"
            placeholder="eg. john doe"
            className="input placeholder:text-[13px] w-full h-[34px] rounded-[4px] bg-[#222222] border border-[#39393A] mt-1 px-3"
          />{" "}
        </div>
        <div className="my-3">
          <label className="text-[14px] font-normal text-[#D7D7D7]">
            Email address
          </label>
          <input
            type="text"
            placeholder="john@gmail.com"
            className="input w-full h-[34px] placeholder:text-[13px] rounded-[4px] bg-[#222222] border border-[#39393A] mt-1 px-3"
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
            className="input w-full h-[34px] placeholder:text-[13px] rounded-[4px] bg-[#222222] border border-[#39393A] mt-1 px-3"
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
        <div className="flex justify-normal items-start mt-3 gap-2">
          <input type="checkbox" className="checkbox" size="small" />
          <p className="text-[13px] font-normal mt-[-2px] text-[#888888]">
            Creating an account means you are okay with our{" "}
            <span className="text-[#2244FF] underline">
              terms and conditions
            </span>{" "}
            and our{" "}
            <span className="text-[#2244FF] underline">privacy policy</span>.{" "}
          </p>
        </div>
        <button
          className="w-full h-[34px] rounded-[4px] text-[14px] font-medium border border-[#39393A] bg-[#2244FF] mt-7"
          onClick={() => register()}
        >
          Register
        </button>
      </from>
      <div className="flex flex-col w-full my-3">
        <div className="divider">Or</div>
      </div>
      <SocialLoginAuthIcon />
    </div>
  );
};

export default Register;
