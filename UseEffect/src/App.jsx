// // import Dashboard from "./component/Dashboard"
// import App2 from "./component/composition/App2"
// // import { Suspense } from "react"



// function App() {
//   return (
//     // <Dashboard/>
//    <App2/>
   
//   )
// }

// export default App


// import {lazy, Suspense} from "react"
// import {Routes , Route, Link} from "react-router-dom"
// import Home from "./component/Home"
// const Profile2 = lazy(()=>import("./component/Profile2"))
// const Dashboard2 = lazy(()=>import("./component/Dashboard2"))

// function App() {
//   return (
//    <>
//    <nav className="flex justify-center bg-[#10898d] py-4 gap-2 font-bold text-[#032f3c] text-lg">
//     <Link className="border px-4 py-1 rounded-3xl hover:bg-[#046169] bg-[#217b7e] hover:-translate-y-1 transtion duration-300 hover:text-white" to="/">Home</Link>
//     <Link className="border px-4 py-1 rounded-3xl hover:bg-[#046169] bg-[#217b7e] hover:-translate-y-1 transtion duration-300 hover:text-white" to="/Profile2">Profile</Link>
//     <Link className="border px-4 py-1 rounded-3xl hover:bg-[#046169] bg-[#217b7e] hover:-translate-y-1 transtion duration-300 hover:text-white" to="/Dashboard2 ">Dashboard</Link>
//    </nav>
//    <Suspense fallback={<h2>Loading Page</h2>}>

//    <Routes>
// <Route path="/" element={<Home/>}/>
// <Route path="profile2" element={<Profile2/>}/>
// <Route path="dashboard2" element={<Dashboard2/>}/>

//    </Routes>

//    </Suspense>


   
   
   
   
   
//    </>
//   )
// }

// export default App

import Header from "./component/composition/Header"
import Layout from "./component/composition/Layout"
import Dashboard from "./component/composition/Dashboard"
import Sidebar from "./component/composition/Sidebar"
import Footer from "./component/composition/Footer";

function App() {
  return (
    <Layout
      header={<Header />}
      sidebar={<Sidebar />}
      footer={<Footer/>}
  >
      <Dashboard />
    </Layout>
  );
}

export default App;