import { useEffect } from "react";
import Password from "../images/Password.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { SignIn } from "@clerk/clerk-react";

const Login = () => {
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
      <img src={Password} alt="password" className="h-28 mb-4" />

      <SignIn signUpUrl="/signup" afterSignInUrl={"/market"} />
    </main>
  );
};

export default Login;
