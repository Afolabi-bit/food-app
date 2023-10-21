import Header from "../components/header";
import MenuList from "../data";
import Food from "../components/food";

const Menu = () => {
  return (
    <main className="mt-[50px] mb-[98px] py-8 px-[24px]">
      <Header page={"menu"} />
      <section className="w-full">
        {MenuList.map((food, index) => {
          return <Food key={food.id} food={food} />;
        })}
      </section>
      <div className="w-full h- fixed left-[0] py-[28px]  bg-white z-10 bottom-0 px-[24px]">
        <button className=" w-full rounded-[10px] bg-[#25401D] py-[15px] text-white text-base font-medium">
          Add to cart
        </button>
      </div>
    </main>
  );
};

export default Menu;
