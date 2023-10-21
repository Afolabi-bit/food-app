import { Link } from "react-router-dom";
import { colors } from "../data";

const Food = ({ food }) => {
  const { name, image, time, price } = food;
  let color = colors[Math.floor(Math.random * colors.length)];
  return (
    <article className="mb-3 relative w-full h-[97px] flex shadow-lg rounded-[10px]">
      <div className={`rounded-[10px] bg-${color} w-[113px] h-[90px] `}>
        <img
          className="w-full h-full rounded-[10px]  object-cover object-center"
          src={image}
          alt={name}
        />
      </div>
      <div className=" p-3">
        <h2 className="text-base font-semibold text-[#142A37]">{name}</h2>
        <p className="text-[10px] text-[#142A37]">{time}</p>
        <p className="text-base font-semibold translate-y-2 text-[#142A37]">
          {price}
        </p>
      </div>
      <Link
        to={`/menu/${name}`}
        className="absolute h-[21px] w-[53px] text-[10px] text-white rounded-[5px] bottom-2 right-2 bg-[#DB040B] flex justify-center items-center"
      >
        Order
      </Link>
    </article>
  );
};

export default Food;
