import Footer from "../components/footer";
import { UserProfile } from "@clerk/clerk-react";

const UserProfilePage = () => <UserProfile path="/profile" routing="path" />;

const ProfilePage = () => {
  return (
    <main>
      <UserProfile />
      <Footer type={"profile"} />
    </main>
  );
};
export default ProfilePage;
