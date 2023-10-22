import { UserButton, useUser } from "@clerk/clerk-react";
import Bell from "../images/notification-svg.svg";
import { Link } from "react-router-dom";

const Header = ({ page }) => {
  const { user } = useUser();
  return (
    <header className="fixed bg-white w-full h-[70px] z-10 top-0 left-0 flex justify-between items-center px-[24px]">
      <div className="user flex ">
        <div className="image translate-y-1 ">
          <UserButton />
        </div>
        {page == "home" && (
          <div className="name ml-3">
            <p className=" font-semibold text-[16px] text-[#142A37]">
              Welcome, {user.fullName.split(" ")[0]}
            </p>
            <p className="text-[#142A37] text-[10px] opacity-50">
              Lagos, Nigeria
            </p>
          </div>
        )}
      </div>
      {page == "menu" && (
        <h1 className="font-semibold  text-[#142A37] text-base">
          Popular Menu
        </h1>
      )}
      {page == "bookings" && (
        <h1 className="font-semibold  text-[#142A37] text-base">
          Popular Restaurant
        </h1>
      )}
      <Link to={"/notifications"}>
        <img src={Bell} alt="Notifications" className="" />
      </Link>
    </header>
  );
};

export default Header;
