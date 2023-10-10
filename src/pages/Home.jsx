import { useEffect } from "react";
import { redirect } from "react-router-dom";
import Nature from "../images/Nature-food-Logo-on-transparent-background-PNG 2.png";

const Home = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("redirect");
      return redirect("/welcome");
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <main className="home flex justify-center items-end  bg-no-repeat overflow-hidden h-screen w-screen">
      <img src={Nature} alt="banner" />
    </main>
  );
};

export default Home;
