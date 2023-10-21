import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Home from "./pages/Home";
import SignUpComp from "./pages/SignUp";
import Login from "./pages/Login";
import Market from "./pages/market";
import Welcome from "./pages/WelcomePage";
import Menu from "./pages/menu";
import Details from "./pages/details";
import Bookings from "./pages/bookings";
import ProfilePage from "./pages/profile";
import Cart from "./pages/cart";

/* if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
 */
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const ClerkProviderWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/welcome" element={<Welcome />}></Route>
        <Route
          path="/signup/*"
          redirectUrl={"/market"}
          routing="path"
          element={<SignUpComp routing="path" path="/signup" />}
        ></Route>
        <Route
          path="/signin/*"
          redirectUrl={"/market"}
          routing="path"
          element={
            <Login routing="path" path="/signin" afterSignUpUrl={"/market"} />
          }
        ></Route>
        <Route
          path="/market"
          element={
            <>
              <SignedIn>
                <Market />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        ></Route>
        <Route exact path="/menu" element={<Menu />}></Route>
        <Route exact path="/bookings" element={<Bookings />}></Route>
        <Route exact path="/user" element={<ProfilePage />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/menu/:id" element={<Details />}></Route>
      </Routes>
    </ClerkProvider>
  );
};

function App() {
  return (
    <Router>
      <ClerkProviderWithRoutes />
    </Router>
  );
}

export default App;
