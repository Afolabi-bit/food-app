import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import {
  ClerkProvider,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Home from "./pages/Home";
import SignUpComp from "./pages/SignUp";
import Login from "./pages/Login";
import Market from "./pages/market";
import Welcome from "./pages/WelcomePage";

/* if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
} */

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
