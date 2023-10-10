import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nature from "../images/Nature-food-Logo-on-transparent-background-PNG 2.png";
import Loader from "../images/loader-simple-transparent.gif";
import Loader2 from "../images/loader-simple.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const navigateTo = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 120 });
    const timeout = setTimeout(() => {
      navigateTo("/welcome");
    }, 8000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main
      className="home py-24 flex justify-center items-end  bg-no-repeat overflow-hidden h-screen w-screen"
      data-aos="zoom-out"
    >
      <img src={Loader2} alt="" className="absolute bottom-5 right-1/2" />
      <img src={Nature} alt="loader" />
    </main>
  );
};

export default Home;
