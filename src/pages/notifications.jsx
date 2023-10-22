import Footer from "../components/footer";
import useGlobalContext from "../context";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Notifications = () => {
  const { hitSearch, setHitSearch } = useGlobalContext();
  return (
    <main>
      <header>
        {hitSearch || (
          <div className="flex justify-between">
            <button onClick={() => setHitSearch(!hitSearch)}>
              <FaMagnifyingGlass />
            </button>
          </div>
        )}
      </header>
      <h1>Notifications</h1>
      <Footer type={"notifications"} />
    </main>
  );
};

export default Notifications;
