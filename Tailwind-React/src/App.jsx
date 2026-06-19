import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Day1 from "../day1Tailwind/day1";
import Day2 from "../day2Tailwind/gridResponsive";
import Excercise2 from "../day2Tailwind/excercise2";
import HoverFocusActive from "../day3Tailwind/hoverFocusActive";
import Excercise3 from "../day3Tailwind/exercise3";
import FormsNavbarDarkMood from "../day4Tailwind/formsNavbarDarkMood";
import Excercise4 from "../day4Tailwind/excercise4";
import Assignment from "./components/assignment/assignment";
import TeacherPage from "./components/teacherPage/teacherPage";
import DarkMood from "./components/darkMood/darkMood";
function App() {
  return (



    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day1" element={<Day1 />} />
      <Route path="/day2" element={<Day2 />} />
      <Route path="/exe2" element={<Excercise2 />} />
      <Route path="/day3" element={<HoverFocusActive />} />
      <Route path="/exe3" element={<Excercise3 />} />
      <Route path="/day4" element={<FormsNavbarDarkMood />} />
      <Route path="/exe4" element={<Excercise4 />} />
      <Route path="/assignment" element={<Assignment />} />
      <Route path="/Teacherpage" element={<TeacherPage />} />
      <Route path="/darkmood" element={<DarkMood />} />
    </Routes>
  );
}

export default App;
