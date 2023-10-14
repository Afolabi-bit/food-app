import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Home from "./pages/Home";
import Welcome from "./pages/WelcomePage";
import SignUpComp from "./pages/SignUp";
import Login from "./pages/Login";
import Market from "./pages/market";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  console.log("no key");
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/signup" element={<SignUpComp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/market" element={<Market />}></Route>
        </Routes>
      </Router>
    </ClerkProvider>
  );
}

export default App;
