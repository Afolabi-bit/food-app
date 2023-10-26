import useGlobalContext from "../context";

const CartItem = ({ food }) => {
  const { image, name, price, id } = food;
  const { cart, setCart } = useGlobalContext();

  function removeFromCart(arg) {
    /* 
    const order = cart.find((item) => +item === +arg); */
    const newCart = cart.filter((item) => +item !== arg);
    setCart(newCart);
  }
  return (
    <article className="flex relative p-[3px] w-full rounded-[10px] shadow mb-5">
      <img
        className="w-[92px] h-[90px] object-cover rounded-[10px]"
        src={image}
        alt={name}
      />
      <div className="ml-5 pt-2">
        <h2 className="text-base font-medium">{name}</h2>
        <p className="text-[#142A37] text-base font-bold">{price}</p>
      </div>
      <button
        onClick={() => removeFromCart(id)}
        className="absolute top-[12px] right-[11px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 8.5858L12.8284 5.75736L14.2426 7.17157L11.4142 10L14.2426 12.8284L12.8284 14.2426L10 11.4142L7.17157 14.2426L5.75736 12.8284L8.5858 10L5.75736 7.17157L7.17157 5.75736L10 8.5858Z"
            fill="black"
          />
        </svg>
      </button>
    </article>
  );
};

export default CartItem;
