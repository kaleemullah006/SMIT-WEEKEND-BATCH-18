import { Routes, Route } from "react-router-dom";
import "./App.css";
import UseProductCard from "./pages/useProductCard";
// import ParentTeacherCard from "./component/propDrilling/ParentTeacherCard";
import State from "./pages/State";
// import Parent1 from "./component/parent1"
// import Parent from "../propDrilling/parent"
import Parent from "./component/propDrilling/parent";
import ParentContext from "./component/ContextAPI/parent";
// import  from "./component/propDrilling/grandChild";
import MainApp from "./component/ContextAPI/MainApp";
import MemoTest from "./Memoization/MemoTest";
import HOC from "./component/HOC/HOC";
import HOC1 from "./component/HOC/HocCard";
import HOCEXCERCISE from "./component/HOCExcercise/HocExcercise";
// import UseEffect from "../UseEffect/useEffect";
import Example from "../UseEffect/useEffect";
import Dashboard from "../UseEffect/Dashboard";
import Navbar from "../UseEffect/Navbar";
import Footer from "../UseEffect/Footer";
import Card from "../UseEffect/Card";
import UseEffectExcercise from "../UseEffect/UseEffectExcercise";
import RHF from "./component/ReactHookForm/RHF";
import RegistrationForm from "./component/ReactHookForm/Zod/Zod";
import Signup from "./component/supabase/Signup";
import Login from "./component/supabase/Login";
import Dashboard2 from "./component/supabase/SignupDashboard";
import Signupexe from "./component/supabase/excercise/signupexe";
import Dashboardexe from "./component/supabase/excercise/dashboardexe";
import Signinexe from "./component/supabase/excercise/signinexe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UseProductCard />} />
      {/* <Route path="parentteachercard" element={<ParentTeacherCard/>}/> */}
      <Route path="state" element={<State />} />
      {/* <Route path="parent1" element={<Parent1/>}/> */}
      <Route path="parent" element={<Parent />} />
      <Route path="parentcontext" element={<ParentContext />} />
      <Route path="mainapp" element={<MainApp />} />
      <Route path="/hoc" element={<HOC />} />
      <Route path="/hoccard" element={<HOC1 />} />
      <Route path="/hocex" element={<HOCEXCERCISE />} />
      {/* <Route path="/useeffect" element={<UseEffect/>}/> */}
      <Route path="/example" element={<Example />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/navbar" element={<Navbar />} />

      <Route path="/memo" element={<MemoTest />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/card" element={<Card />} />
      <Route path="/UseEffectExcercise" element={<UseEffectExcercise />} />
      <Route path="/rhf" element={<RHF />} />
      <Route path="/RegistrationForm" element={<RegistrationForm />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard2" element={<Dashboard2 />} />
      <Route path="/signupexe" element={<Signupexe />} />
      <Route path="/signinexe" element={<Signinexe />} />
      <Route path="/dashboardexe" element={<Dashboardexe />} />
    </Routes>
  );
}

export default App;
