import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import Bell from "../images/notification-svg.svg";
import Menu from "../images/menu-add-fill.svg";
import MagGlass from "../images/search-line.svg";
import Hero from "../images/hero.png";
import Add from "../images/add.svg";
import FoodMenu from "../data";
import { colors } from "../data";

const Market = () => {
  const { user } = useUser();
  return (
    <main className="market  mt-[50px] mb-[90px] py-8 px-[24px]">
      <header className="fixed bg-white w-full h-[70px] z-10 top-0 left-0 flex justify-between items-center px-[24px]">
        <div className="user flex ">
          <div className="image translate-y-1 ">
            <UserButton />
          </div>
          <div className="name ml-3">
            <p className=" font-semibold text-[16px] text-[#142A37]">
              Welcome, {user.fullName.split(" ")[0]}
            </p>
            <p className="text-[#142A37] text-[10px] opacity-50">
              Lagos, Nigeria
            </p>
          </div>
        </div>
        <button>
          <img src={Bell} alt="Notifications" className="" />
        </button>
      </header>
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
        <article className="hero mb-[30px] flex h-[148px] bg-[#25401D] rounded-[10px] w-full">
          <div className="text pt-[20px] pl-[20px] text-white">
            <h1 className="text-[20px] font-semibold mb-[18px]">
              Always ready for you
            </h1>
            <button className="bg-white text-[#25401D] text-[10px] font-semibold px-[13px] py-[8px] rounded-[5px]">
              Buy Now
            </button>
          </div>
          <div className="img relative">
            <img
              src={Hero}
              className="w-[203px] translate-y-12 shadow-sm"
              alt=""
            />
          </div>
        </article>

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

        <article className="w-full mb-8  p-1 shadow-xl rounded-[10px]">
          <h3 className="text-[16px] mb-[10px] font-semibold text-[#142A37]">
            Popular Menu
          </h3>
          <div className="flex relative">
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
        <article className="flex justify-center items-center">
          <Link
            className="text-[14px] center font-normal w-fit opacity-50"
            to={"/menu"}
          >
            see &nbsp; more &nbsp; >>>
          </Link>
        </article>
      </section>
      <footer className="fixed bg-white px-5 bottom-0 left-0 w-full h-[79px] shadow-inner flex justify-between items-center">
        <button className="flex active flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M18 17.997C18 18.5493 17.5523 18.997 17 18.997H1C0.44772 18.997 0 18.5493 0 17.997V7.31086C0 7.00468 0.14027 6.71537 0.38065 6.52574L8.3807 0.214882C8.7438 -0.0716275 9.2562 -0.0716275 9.6193 0.214882L17.6193 6.52574C17.8597 6.71537 18 7.00468 18 7.31086V17.997ZM4 9.99697C4 12.7584 6.23858 14.997 9 14.997C11.7614 14.997 14 12.7584 14 9.99697H12C12 11.6539 10.6569 12.997 9 12.997C7.3431 12.997 6 11.6539 6 9.99697H4Z"
              fill="#9C9C9C"
            />
          </svg>
          <span className="text-[10px] font-semibold">Home</span>
        </button>
        <button className="flex  flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M18.25 15H20.25V17H0.25V15H2.25V8C2.25 3.58172 5.83172 0 10.25 0C14.6683 0 18.25 3.58172 18.25 8V15ZM7.25 19H13.25V21H7.25V19Z"
              fill="#9C9C9C"
            />
          </svg>
          <span className="text-[10px] font-semibold">Notification</span>
        </button>
        <button className="flex  flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="21"
            viewBox="0 0 17 21"
            fill="none"
          >
            <path
              d="M0.5 21C0.5 16.5817 4.08172 13 8.5 13C12.9183 13 16.5 16.5817 16.5 21H0.5ZM8.5 12C5.185 12 2.5 9.315 2.5 6C2.5 2.685 5.185 0 8.5 0C11.815 0 14.5 2.685 14.5 6C14.5 9.315 11.815 12 8.5 12Z"
              fill="#9C9C9C"
            />
          </svg>
          <span className="text-[10px] font-semibold">Profile</span>
        </button>
        <button className="flex  flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              d="M4.64038 7H18.5788L19.0788 5H6.64038V3H20.3596C20.9119 3 21.3596 3.44772 21.3596 4C21.3596 4.08176 21.3496 4.16322 21.3297 4.24254L18.8297 14.2425C18.7185 14.6877 18.3185 15 17.8596 15H3.64038C3.0881 15 2.64038 14.5523 2.64038 14V2H0.640381V0H3.64038C4.19267 0 4.64038 0.44772 4.64038 1V7ZM4.64038 21C3.53581 21 2.64038 20.1046 2.64038 19C2.64038 17.8954 3.53581 17 4.64038 17C5.74495 17 6.64038 17.8954 6.64038 19C6.64038 20.1046 5.74495 21 4.64038 21ZM16.6404 21C15.5358 21 14.6404 20.1046 14.6404 19C14.6404 17.8954 15.5358 17 16.6404 17C17.745 17 18.6404 17.8954 18.6404 19C18.6404 20.1046 17.745 21 16.6404 21Z"
              fill="#9C9C9C"
            />
          </svg>
          <span className="text-[10px] font-semibold">Cart</span>
        </button>
        <button className="flex  flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              className="active:fill-[#DB040B]"
              d="M18 17.997C18 18.5493 17.5523 18.997 17 18.997H1C0.44772 18.997 0 18.5493 0 17.997V7.31086C0 7.00468 0.14027 6.71537 0.38065 6.52574L8.3807 0.214882C8.7438 -0.0716275 9.2562 -0.0716275 9.6193 0.214882L17.6193 6.52574C17.8597 6.71537 18 7.00468 18 7.31086V17.997ZM4 9.99697C4 12.7584 6.23858 14.997 9 14.997C11.7614 14.997 14 12.7584 14 9.99697H12C12 11.6539 10.6569 12.997 9 12.997C7.3431 12.997 6 11.6539 6 9.99697H4Z"
              fill="#9C9C9C"
            />
          </svg>
          <span className="text-[10px] font-semibold">Home</span>
        </button>
      </footer>
    </main>
  );
};

export default Market;
