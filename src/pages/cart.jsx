import Footer from "../components/footer";
import { SearchForm } from "../components/utils";
import useGlobalContext from "../context";
import { FaMagnifyingGlass, FaArrowLeft } from "react-icons/fa6";
import MenuList from "../data";
import CartItem from "../components/cartitem";

const Cart = () => {
  const { hitSearch, setHitSearch } = useGlobalContext();
  let { cart } = useGlobalContext();
  cart = [...new Set(cart)];

  const removeFromCart = (id) => {
    cart.filter((item) => item != id);
  };
  return (
    <main className="px-7 pt-[100px]">
      <header className="py-5 px-7 bg-white w-full fixed top-0 left-0">
        <div className="flex justify-between items-center">
          {hitSearch || (
            <button onClick={() => setHitSearch(!hitSearch)}>
              <FaMagnifyingGlass />
            </button>
          )}
          {hitSearch && (
            <button onClick={() => setHitSearch(!hitSearch)}>
              <FaArrowLeft />
            </button>
          )}
          <h1 className="text-base font-semibold">Cart</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M4.24726 7.33333H19.0473L19.5782 5.2381H6.3709V3.14286H20.9382C21.5246 3.14286 22 3.6119 22 4.19048C22 4.27613 21.9894 4.36147 21.9683 4.44457L19.3137 14.9207C19.1956 15.3871 18.7709 15.7143 18.2836 15.7143H3.18545C2.59903 15.7143 2.12363 15.2453 2.12363 14.6667V2.09524H0V0H3.18545C3.77188 0 4.24726 0.46904 4.24726 1.04762V7.33333ZM4.24726 22C3.07441 22 2.12363 21.062 2.12363 19.9048C2.12363 18.7476 3.07441 17.8095 4.24726 17.8095C5.42011 17.8095 6.3709 18.7476 6.3709 19.9048C6.3709 21.062 5.42011 22 4.24726 22ZM16.9891 22C15.8162 22 14.8654 21.062 14.8654 19.9048C14.8654 18.7476 15.8162 17.8095 16.9891 17.8095C18.162 17.8095 19.1127 18.7476 19.1127 19.9048C19.1127 21.062 18.162 22 16.9891 22Z"
              fill="#DB040B"
            />
          </svg>
        </div>
      </header>
      {hitSearch && <SearchForm />}
      <article>
        {cart.map((id) => {
          let food = MenuList.find((item) => item.id == id);

          return <CartItem food={food} remove={removeFromCart} />;
        })}
      </article>
      <Footer type={"cart"} />
    </main>
  );
};

export default Cart;
