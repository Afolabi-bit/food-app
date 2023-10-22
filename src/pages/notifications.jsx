import Footer from "../components/footer";
import useGlobalContext from "../context";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Notifications = () => {
  const { hitSearch, setHitSearch } = useGlobalContext();
  return (
    <main>
      <h1>Notifications</h1>
      <Footer type={"notifications"} />
    </main>
  );
};

export default Notifications;
