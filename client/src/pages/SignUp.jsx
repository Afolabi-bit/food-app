import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Account from "../images/Account.png";
import Profile from "../images/profile-svg.svg";
import Email from "../images/email.svg";
import Padlock from "../images/lock.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import useGlobalContext from "../context";
import axios from "axios";

const SignUp = () => {
  useEffect(() => {
    AOS.init({ duration: 700, offset: 0, once: true });
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
  }, []);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3001/register").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <main
      data-aos="zoom-out"
      className="pb-9 pt-6 px-8 flex flex-col text-center justify-center md:justify-center items-center overflow-hidden min-h-screen  w-full"
    >
      <img src={Account} alt="" className="mb-5 h-28" />
      <form action="#" className="w-full md:w-2/3 lg:w-2/5" data-aos="zoom-in">
        <h1 className="font-semibold text-xl text-[#142A37] mb-5">
          Sign up for free
        </h1>
        <div
          className="form-control w-full  mb-5 relative"
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="off"
            placeholder="username"
            className="w-full border-zinc-500 border rounded-[10px] shadow h-[52px] pl-11"
          />
        </div>
        <div
          className="form-control w-full  mb-5 relative"
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
            placeholder="Email"
            className="w-full border-[#888] border rounded-[10px] shadow h-[52px] pl-11"
          />
        </div>
        <div
          className="form-control w-full  mb-8 relative"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
