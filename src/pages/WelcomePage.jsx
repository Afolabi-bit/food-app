import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import DashDot from "../images/dashdot.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useGlobalContext } from "../context";
import Spices from "../images/Large set of isolated vegetables on a white background.png";

const Welcome = () => {
  useEffect(() => {
    AOS.init({ duration: 700, offset: 20, once: true });
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
  }, []);
  const { trigger, setTrigger } = useGlobalContext();
  return (
    <main>
      {trigger || (
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
            A warm welcome and lots of good wishes on becoming part of our
            growing team.
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
      )}
      {trigger && (
        <section className="get-started pb-16 px-4 flex flex-col text-center justify-end md:justify-center items-center overflow-hidden min-h-screen  w-full">
          <img
            src={Spices}
            alt="Spicies and vegetables"
            className="mb-8"
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
              A warm welcome and lots of good wishes on becoming part of our
              growing team.
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
      )}
    </main>
  );
};

export default Welcome;
