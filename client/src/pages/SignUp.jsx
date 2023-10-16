import { useEffect } from "react";
import Account from "../images/Account.png";
import AOS from "aos";
import "aos/dist/aos.css";

import { SignUp } from "@clerk/clerk-react";

const SignUpComp = () => {
  useEffect(() => {
    AOS.init({ duration: 700, offset: 0, once: true });
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main
      data-aos="zoom-out"
      className="pb-9 pt-6 px-8 flex flex-col text-center justify-center md:justify-center items-center overflow-hidden min-h-screen  w-full"
    >
      <img src={Account} alt="" className="mb-5 h-28" />
      <h1 className="font-semibold text-xl text-[#142A37] mb-5">
        Sign up for free
      </h1>
      <SignUp signInUrl="/signin" afterSignUpUrl={"/market"} />
    </main>
  );
};

export default SignUpComp;
