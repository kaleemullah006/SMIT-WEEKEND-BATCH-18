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

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<UseProductCard/>}/>
        {/* <Route path="parentteachercard" element={<ParentTeacherCard/>}/> */}
        <Route path="state" element={<State/>}/>
        {/* <Route path="parent1" element={<Parent1/>}/> */}
        <Route path="parent" element={<Parent/>}/>
        <Route path="parentcontext" element={<ParentContext/>}/>
        <Route path="mainapp" element={<MainApp/>}/>
        <Route path="/hoc" element={<HOC/>}/>
        <Route path="/hoccard" element={<HOC1/>}/>
        <Route path="/hocex" element={<HOCEXCERCISE/>}/>
        
<Route path="/memo" element={<MemoTest />} />

      </Routes>
   
  );
}

export default App;
