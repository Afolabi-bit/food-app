import { useParams } from "react-router-dom";
import MenuList from "../data";

const Details = () => {
  const { id } = useParams();
  let food = MenuList.find((food) => food.id == id);
  const { name, image, time, price, info } = food;
  return (
    <main className="mt-[50px]">
      <div className=" rounded-[24px] mb-7 mx-auto  h-[364px] shadow w-[345px] flex justify-center items-center">
        <img
          className="w-full scale-[1.05] object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className=" px-7">
        <div className="flex justify-between mb-3">
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
    </main>
  );
};

export default Details;
