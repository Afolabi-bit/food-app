import { Link } from "react-router-dom";
import { useEffect } from "react";
import Account from "../images/Account.png";
import Profile from "../images/profile-svg.svg";
import Email from "../images/email.svg";
import Padlock from "../images/lock.svg";
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

  /*   const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); */

  /* useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:3001/register").then((res) => {
      console.log(res.data);
    });
  }; */

  return (
    <main
      data-aos="zoom-out"
      className="pb-9 pt-6 px-8 flex flex-col text-center justify-center md:justify-center items-center overflow-hidden min-h-screen  w-full"
    >
      <img src={Account} alt="" className="mb-5 h-28" />
      <h1 className="font-semibold text-xl text-[#142A37] mb-5">
        Sign up for free
      </h1>
      <SignUp
        redirectUrl="/market"
        signInUrl="/login"
        path="/signup"
        routing="path"
      />
    </main>
  );
};

export default SignUpComp;
