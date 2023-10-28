import Footer from "../components/footer";
import { UserButton } from "@clerk/clerk-react";

const Notifications = () => {
  return (
    <main>
      <header className="flex items-center justify-between py-5 px-7 bg-white w-full fixed top-0 left-0 ">
        <UserButton />
        <h1 className="translate-y-1 text-[#142A37] text-base font-semibold mb-4">
          Notifications
        </h1>
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
      </header>
      <Footer type={"notifications"} />
    </main>
  );
};

export default Notifications;
