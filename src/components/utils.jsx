import Menu from "../images/menu-add-fill.svg";
import MagGlass from "../images/search-line.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const SearchForm = () => {
  useEffect(() => {
    AOS.init({ duration: 500, offset: 0, once: true });
  }, []);
  return (
    <form
      data-aos="zoom-out"
      className="w-full flex items-center relative mb-[30px] "
    >
      <img
        src={MagGlass}
        className="absolute top-[50%] translate-y-[-50%] left-[12px]"
        alt=""
      />
      <input
        type="text"
        placeholder="Search meal"
        className="bg-[#F5F5F5] h-[52px] rounded-[10px] pl-11 w-full"
      />
      <button className="h-[33px] w-[44px] px-[10px]">
        <img src={Menu} size={"24px"} alt="" />
      </button>
    </form>
  );
};
