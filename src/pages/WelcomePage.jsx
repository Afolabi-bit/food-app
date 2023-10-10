import { FaArrowRight } from "react-icons/fa6";
import DashDot from "../images/dashdot.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 20, once: true });
  }, []);

  return (
    <main
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
        <button className="p-5 rounded-full bg-[#25401D]">
          <FaArrowRight className="text-white" size={"24px"} />
        </button>
      </div>
    </main>
  );
};

export default Welcome;
