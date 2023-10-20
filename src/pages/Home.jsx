import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import DashDot from "../images/dashdot.svg";
import Nature from "../images/Nature-food-Logo-on-transparent-background-PNG 2.png";
import Loader2 from "../images/loader-simple.gif";
import Spices from "../images/Large set of isolated vegetables on a white background.png";
import useGlobalContext from "../context";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { user } = useUser();
  const navigateTo = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 500, offset: 20, once: true });
    if (user === null) {
      const timeout = setTimeout(() => {
        navigateTo("/welcome");
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
    if (user !== null) {
      const timeout = setTimeout(() => {
        navigateTo("/market");
      }, 300);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  return (
    <main
      className="home pb-14 flex justify-center items-end  bg-no-repeat overflow-hidden h-screen w-full"
      data-aos="fade-right"
    >
      <img src={Loader2} alt="" className="absolute bottom-5  right-1/2" />
      <img src={Nature} alt="loader" />
    </main>
  );
};

const Welcome = () => {
  const { setTrigger } = useGlobalContext();
  return (
    <section
      data-aos="fade-right"
      className="welcome py-8 px-4 md:py-20 flex flex-col text-center justify-end items-center  bg-no-repeat overflow-hidden h-screen w-screen"
    >
      <h1
        className=" text-4xl mb-4 font-semibold text-[#142A37]"
        data-aos="fade-down"
      >
        Welcome
      </h1>
      <p
        className="text-[#142A37] text-lg font-medium mb-8 md:w-2/3"
        data-aos="fade-down"
      >
        A warm welcome and lots of good wishes on becoming part of our growing
        team.
      </p>
      <div className="wrapper" data-aos="fade-up">
        <img src={DashDot} alt="" className="mb-8" />
        <button
          className="p-5 rounded-full bg-[#25401D]"
          onClick={() => setTrigger(true)}
        >
          <FaArrowRight className="text-white" size={"24px"} />
        </button>
      </div>
    </section>
  );
};

const GetStarted = () => {
  return (
    <section className="get-started pb-16 px-4 flex flex-col text-center justify-end md:justify-center items-center overflow-hidden min-h-screen  w-full">
      <img
        src={Spices}
        alt="Spicies and vegetables"
        className="mb-8 w-60 lg:w-72"
        data-aos="zoom-out"
      />
      <div className="flex flex-col text-center justify-end items-center">
        <h1
          className="text-3xl mb-4 font-semibold text-[#142A37]"
          data-aos="fade-down"
        >
          Get ready to taste the best meals
        </h1>
        <p
          className="text-[#142A37] text-lg font-medium mb-10 md:w-2/3"
          data-aos="fade-down"
        >
          A warm welcome and lots of good wishes on becoming part of our growing
          team.
        </p>
        <Link
          data-aos="fade-up"
          to={"/signup"}
          className="flex justify-center rounded-[18px] text-white items-center bg-[#25401D] w-full md:w-2/3 py-6  "
        >
          <span className="mr-2 text-lg">Get Started</span>{" "}
          <FaArrowRight size={"20px"} />
        </Link>
      </div>
    </section>
  );
};

export default Home;
