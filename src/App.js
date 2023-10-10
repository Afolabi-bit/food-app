import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/WelcomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/welcome" element={<Navigate to={"/welcome"} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
