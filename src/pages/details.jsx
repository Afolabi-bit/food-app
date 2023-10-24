import { Link, useParams } from "react-router-dom";
import MenuList from "../data";
import useGlobalContext from "../context";

const Details = () => {
  const { id } = useParams();
  let food = MenuList.find((food) => food.id == id);
  const { name, image, time, price, info } = food;
  const { cart, setCart } = useGlobalContext();
  return (
    <main className="mt-[50px]  px-7 relative">
      <div className=" rounded-[24px] mb-7 mx-auto overflow-hidden  h-[364px] shadow w-full flex justify-center items-center">
        <img
          className="w-full h-full rounded-[24px] object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className="">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h1 className="text-[#142A37] text-[20px] font-bold">{name}</h1>
            <p className="text-[#142A37] text-[16px] font-normal opacity-50">
              {time}
            </p>
          </div>
          <p className="text-[#DB040B] text-[18px] text-base font-bold">
            {price}
          </p>
        </div>
        <p className="text-[#142A37] text-base font-normal">{info}</p>
      </div>

      <div className="w-full  fixed left-[0] py-[28px]  bg-white z-10 bottom-0 px-[24px]">
        <Link
          to={"/market"}
          onClick={() => setCart([id, ...cart])}
          className=" w-full  flex justify-center rounded-[10px] bg-[#25401D] py-[15px] text-white text-base font-medium"
        >
          Buy Now
        </Link>
      </div>
    </main>
  );
};

export default Details;
