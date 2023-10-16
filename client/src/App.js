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
import Welcome from "./pages/WelcomePage";
import SignUpComp from "./pages/SignUp";
import Login from "./pages/Login";
import Market from "./pages/market";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const ClerkProviderWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/signup" element={<SignUpComp />}></Route>
        <Route path="/signin" element={<Login />}></Route>
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
