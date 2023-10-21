import { useParams } from "react-router-dom";
import MenuList from "../data";

const Details = () => {
  const { id } = useParams();
  let food = MenuList.find((food) => food.id == id);
  const { name, image, time, price, info } = food;
  return (
    <main className="mt-[50px] relative">
      <div className=" rounded-[24px] mb-7 mx-auto  h-[364px] shadow w-[345px] flex justify-center items-center">
        <img
          className="w-full scale-[1.05] object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className=" px-7">
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

      <div className="w-full h- fixed left-[0] py-[28px]  bg-white z-10 bottom-0 px-[24px]">
        <button className=" w-full rounded-[10px] bg-[#25401D] py-[15px] text-white text-base font-medium">
          Buy Now
        </button>
      </div>
    </main>
  );
};

export default Details;
