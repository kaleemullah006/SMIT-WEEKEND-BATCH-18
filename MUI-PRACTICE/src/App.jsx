import Dashboard from "./components/Dashboard";
import MuiPractice from "./components/MuiPractice";
import PracticeSignin from "./components/PracticeSignin";
import PracticeSignup from "./components/PracticeSignup";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <MuiPractice/> */}
      {/* <Signup/> */}
      {/* <PracticeSignup/> */}
      {/* <PracticeSignin/> */}
      {/* <Dashboard/> */}

      <Routes>
        <Route path="/" element={<PracticeSignup />} />
        <Route path="signup" element={<PracticeSignup />} />
        <Route path="signin" element={<PracticeSignin />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
