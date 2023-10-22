import Footer from "../components/footer";
import { UserProfile } from "@clerk/clerk-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UserProfilePage = () => <UserProfile path="/profile" routing="path" />;

const ProfilePage = () => {
  useEffect(() => {
    AOS.init({ duration: 500, offset: 0, once: true });
  }, []);
  return (
    <main className="pb-[100px]">
      <article data-aos="zoom-out">
        <UserProfile />
      </article>
      <Footer type={"profile"} />
    </main>
  );
};
export default ProfilePage;
