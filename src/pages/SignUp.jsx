import { Link } from "react-router-dom";
import { useEffect } from "react";
import Account from "../images/Account.png";
import Profile from "../images/profile-svg.svg";
import Email from "../images/email.svg";
import Padlock from "../images/lock.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const SignUp = () => {
  useEffect(() => {
    AOS.init({ duration: 700, offset: 0, once: true });
  }, []);

  return (
    <main
      data-aos="zoom-out"
      className="pb-9 pt-6 px-4 flex flex-col text-center justify-end md:justify-center items-center overflow-hidden min-h-screen  w-screen"
    >
      <img src={Account} alt="" className="mb-5" />
      <form action="#" className="w-full md:w-2/3 lg:w-2/5" data-aos="zoom-in">
        <h1 className="font-semibold text-xl text-[#142A37] mb-5">
          Sign up for free
        </h1>
        <div
          className="form-control w-full  mb-7 relative"
          data-aos="fade-right"
        >
          <img
            src={Profile}
            alt="profile-icon"
            className="absolute top-1/2 left-4 translate-y-[-50%]"
          />
          <input
            type="text"
            name="usernanme"
            required
            autoComplete="off"
            placeholder="username"
            className="w-full border-zinc-500 border rounded-[10px] shadow h-[52px] pl-11"
          />
        </div>
        <div
          className="form-control w-full  mb-7 relative"
          data-aos="fade-left"
        >
          <img
            src={Email}
            alt="email-icon"
            className="absolute top-1/2 left-4 translate-y-[-50%]"
          />
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            placeholder="Email"
            className="w-full border-[#888] border rounded-[10px] shadow h-[52px] pl-11"
          />
        </div>
        <div
          className="form-control w-full  mb-12 relative"
          data-aos="fade-right"
        >
          <img
            src={Padlock}
            alt="password-icon"
            className="absolute top-1/2 left-4 translate-y-[-50%]"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="w-full border-zinc-500 border rounded-[10px] shadow h-[52px] pl-11"
          />
        </div>
        <button
          className="w-full md:w-2/3 bg-[#25401D] text-white h-[52px] rounded-[10px] mb-4"
          data-aos="fade-up"
        >
          Create Account
        </button>
        <p data-aos="fade-up">
          <span className="text-[#DB040B]">Got an account?</span>{" "}
          <Link to={"/login"} className="text-[#9C9C9C] opacity-[0.9]">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
};

export default SignUp;
