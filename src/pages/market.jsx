import { Link } from "react-router-dom";
import Hero from "../images/hero.png";
import Add from "../images/add.svg";
import FoodMenu from "../data";
import Food from "../components/food";
import Header from "../components/header";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { SearchForm } from "../components/utils";

const Market = () => {
  useEffect(() => {
    AOS.init({ duration: 500, offset: 0, once: true });
  }, []);
  return (
    <main className="pt-[100px] overflow-hidden w-[100vw] relative px-[15px] pb-[120px] ">
      <Header page={"home"} />
      <SearchForm />
      <section data-aos="zoom-out" className="center">
        {/* Hero */}

        <article className="hero overflow-hidden  mb-[30px] flex justify-between h-[148px] bg-[#25401D] rounded-[10px] w-full">
          <div className="text pt-[20px] w-[50%] pl-[20px] text-white">
            <h1 className="text-[18px]  font-semibold mb-[18px]">
              Always ready for you
            </h1>
            <Link
              to={"/menu"}
              className="bg-white text-[#25401D] text-[10px] font-semibold px-[13px] py-[8px] rounded-[5px]"
            >
              Buy Now
            </Link>
          </div>

          <div className="img w-[45%] flex items-end ">
            <img
              src={Hero}
              className="w-full h-[120px] object-cover object-left  translate-y-2 shadow-sm  "
              alt=""
            />
          </div>
        </article>

        {/* Available Menu */}

        <article className="mb-[30px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[16px] font-semibold text-[#142A37]">
              Available Menu
            </h3>
            <Link
              to={"/menu"}
              className="text-[#142A37] text-[10px] font-[400] opacity-50"
            >
              view more
            </Link>
          </div>
          <div className="flex gap-x-[15px] justify-between">
            {FoodMenu.slice(7, 9).map((f) => {
              const { name, id, image, time } = f;
              return (
                <Link to={`/menu/${id}`} key={id} className="w-[50%]">
                  <img className="h-[103px] w-[100%] mb-2" src={image} alt="" />
                  <div className="flex justify-between mt-1">
                    <div className="flex-col ">
                      <p className="font-semibold text-[12px] text-[#142A37]">
                        {name}
                      </p>
                      <p className="font-[400] translate-y-[-3px] text-[10px] opacity-50 text-[#142A37]">
                        {time}
                      </p>
                    </div>
                    <button className="w-[20px] h-[20px] bg-[#DB040B] flex items-center justify-center rounded-full">
                      <img src={Add} alt="add to cart" />
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </article>

        {/* Popular Menu */}

        <article className="w-full mb-2  p-1  ">
          <h3 className="text-[16px] mb-[10px] font-semibold text-[#142A37]">
            Popular Menu
          </h3>
          <Food food={FoodMenu[13]} />
        </article>

        {/*  See More Link */}
        <article className="flex justify-center items-center">
          <Link
            className="text-[14px] center font-normal w-fit opacity-50"
            to={"/menu"}
          >
            see &nbsp; more &nbsp; >>>
          </Link>
        </article>
      </section>
      <Footer type={"home"} />
    </main>
  );
};

export default Market;
