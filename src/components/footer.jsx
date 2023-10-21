import { Link } from "react-router-dom";

const Footer = ({ type }) => {
  return (
    <footer className="fixed bg-white px-5 bottom-0 left-0 w-full h-[79px] shadow-inner flex justify-between items-center">
      <Link
        to={"/market"}
        className={
          type == "home"
            ? "active flex  flex-col items-center justify-center"
            : "flex  flex-col items-center justify-center"
        }
      >
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
      </Link>
      <Link
        to={"/notifications"}
        className={
          type == "notifications"
            ? "active flex  flex-col items-center justify-center"
            : "flex  flex-col items-center justify-center"
        }
      >
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
      </Link>
      <Link
        to={"/user"}
        className={
          type == "profile"
            ? "active flex  flex-col items-center justify-center"
            : "flex  flex-col items-center justify-center"
        }
      >
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
      </Link>
      <Link
        to={"/bookings"}
        className={
          type === "bookings"
            ? "active flex  flex-col items-center justify-center"
            : "flex  flex-col items-center justify-center"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
        >
          <path
            d="M1.08333 0H14.4167C14.8769 0 15.25 0.387889 15.25 0.866365V17.5667C15.25 17.806 15.0634 18 14.8333 18C14.7748 18 14.717 17.987 14.6636 17.9623L7.75 14.7553L0.836442 17.9623C0.626292 18.0598 0.379925 17.9617 0.286158 17.7433C0.262317 17.6876 0.25 17.6275 0.25 17.5667V0.866365C0.25 0.387889 0.6231 0 1.08333 0ZM7.75 9.9632L10.1991 11.3018L9.73133 8.46656L11.7128 6.45869L8.97458 6.04503L7.75 3.46546L6.52542 6.04503L3.78727 6.45869L5.76863 8.46656L5.30089 11.3018L7.75 9.9632Z"
            fill="#9C9C9C"
          />
        </svg>
        <span className="text-[10px] font-semibold">Bookings</span>
      </Link>
      <Link
        to={"/cart"}
        className={
          type == "cart"
            ? "active flex  flex-col items-center justify-center"
            : "flex  flex-col items-center justify-center"
        }
      >
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
      </Link>
    </footer>
  );
};

export default Footer;
