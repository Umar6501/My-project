"use client";
import "./home.scss";
import Link from "next/link";

export default function Login() {
  return (
    <div className="Login absolute z-[101] top-0 bottom-[0px] left-0 right-0 w-full h-full bg-white">
      <div className="login-content flex flex-row justify-between">
        <div className="left-content flex flex-col items-center gap-2 justify-center h-[744px] w-[990px]">
          <img
            src="./logo.svg"
            alt=""
            className="absolute left-[30px] top-[30px]"
          />
          <h1 className="text-3xl font-bold font-sans">Login To eatly</h1>
          <input
            type="text"
            placeholder="Email"
            className="w-[450px] h-[60px] rounded-lg pl-20 text-sans text-2xl bg-[#e1e1e1] mt-7 outline-none"
          />
          <img
            src="./Email.svg"
            alt=""
            className="absolute top-[290px] left-[183px]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[450px] h-[60px] rounded-lg pl-20 pr-2 text-sans text-2xl bg-[#e1e1e1] mt-4 outline-none"
          />
          <img
            src="./Lock.svg"
            alt=""
            className="absolute top-[370px] left-[185px]"
          />

          <p className=" text-right w-[450px] text-[#6C5FBC]">
            Forget Password ?
          </p>
          <Link href="/home">
            <button className="buttons my-2">
              <span className="transition"></span>
              <span className="gradient"></span>
              <span className="label">Login</span>
            </button>
          </Link>

          <p className="w-[450px] text-center text-sans text-sm">
            Create A New Account? <b className="text-[#6C5FBC]">Login</b>
          </p>
          <div className="absolute flex flex-row justify-between px-5 bottom-2 gap-[410px]">
            <p className="w-[170px] text-left text-[#718096]">Privacy Policy</p>
            <p className="w-[170px] text-right text-[#718096]">
              Copyright 2022
            </p>
          </div>
        </div>
        <div className="right-content w-[990px] bg-[#6C5FBC] flex flex-col items-center justify-center">
          <img src="./llgg.png" alt="" className=" w-[546px] h-[417px]" />
          <h3 className="w-[500px] text-center text-4xl font-extrabold text-white">
            Find Foods With Love{" "}
          </h3>
          <p className="w-[500px] text-center text-sm text-white my-5">
            Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
            Including Asian, Chinese, Italians And Many More. Our Dashboard
            Helps You To Manage Orders And Money.
          </p>
        </div>
      </div>
      {/* <Link href="/home" className="absolute top-36">
        Home
      </Link> */}
    </div>
  );
}
