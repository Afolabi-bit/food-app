import { useParams } from "react-router-dom";
import MenuList from "../data";

const Details = () => {
  const { name } = useParams();
  let food = MenuList.filter((food) => food.name === name)[0];
  return (
    <main>
      <div className="w-full h-[333px] flex justify-center items-center">
        <img className="w-full object-cover" src={food.image} alt={food.name} />
      </div>
    </main>
  );
};

export default Details;
