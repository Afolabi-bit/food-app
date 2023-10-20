import { Link } from "react-router-dom";
import Menu from "../images/menu-add-fill.svg";
import MagGlass from "../images/search-line.svg";
import Hero from "../images/hero.png";
import Add from "../images/add.svg";
import FoodMenu from "../data";
import { colors } from "../data";
import Header from "../components/header";
import Footer from "../components/footer";

const Market = () => {
  return (
    <main className="market  mt-[50px] mb-[90px] py-8 px-[24px]">
      <Header />
      <section className="center">
        <form className="w-full flex items-center relative mb-[30px]">
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

        {/* Hero */}

        <article className="hero mb-[30px] flex h-[148px] bg-[#25401D] rounded-[10px] w-full">
          <div className="text pt-[20px] w-[50%] pl-[20px] text-white">
            <h1 className="text-[20px]  font-semibold mb-[18px]">
              Always ready for you
            </h1>
            <button className="bg-white text-[#25401D] text-[10px] font-semibold px-[13px] py-[8px] rounded-[5px]">
              Buy Now
            </button>
          </div>
          <div className="img w-[50%] flex items-end ">
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
            {FoodMenu.slice(0, 2).map((f) => {
              const { name, id, image, time } = f;
              return (
                <Link to={`/menu/${name}`} key={id} className="w-[50%]">
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

        <article className="w-full mb-8  p-1  ">
          <h3 className="text-[16px] mb-[10px] font-semibold text-[#142A37]">
            Popular Menu
          </h3>
          <div className="flex relative rounded-[10px] shadow-xl">
            <div className={`bg-[#f3dddf] rounded-[10px]`}>
              <img
                className="w-[110%]"
                src={FoodMenu[13].image}
                alt={FoodMenu[13].name}
              />
            </div>
            <div className="flex flex-col ml-3 ">
              <h3 className="text-[#142A37] mt-2 text-[16px] font-semibold">
                {FoodMenu[13].name}
              </h3>
              <p className="text-[#142A37] text-[10px] font-normal">
                {FoodMenu[13].time}
              </p>
              <p className="text-[#142A37] mt-6 text-[16px] font-semibold">
                {FoodMenu[13].price}
              </p>
            </div>
            <button className="absolute text-white rounded-[5px] bottom-2 right-2 bg-[#DB040B] px-3 py-1">
              Order
            </button>
          </div>
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
