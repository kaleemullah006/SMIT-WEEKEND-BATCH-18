import { Link } from "react-router-dom";
import Buttons from "../src/components/buttons/buttons";


export default function FormsNavbarDarkMood() {
  return (
    <>
     <nav className="flex items-center justify-between bg-blue-100 shadow shadow-blue-300 px-6 py-4 ">

<div className="text-xl font-bold text-blue-600">MyApp</div>

<div className="flex gap-6">
<a className="text-gray-700 hover:text-blue-600 font-bold" href="#">Home</a>
<a className="text-gray-700 hover:text-blue-600 font-bold" href="">About</a>
<a className="text-gray-700 hover:text-blue-600 font-bold" href="">Contact</a>
</div>

<button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-3xl transition font-bold">Login</button>






     </nav>



     {/* INPUT FORM  */}
        <div className="min-h-screen flex justify-center items-center bg-gray-50">

      <div className="w-70 border border-blue-200 shadow-lg shadow-blue-300 rounded-2xl flex flex-col gap-4 p-6 ">
  
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
    <input
      type="text"
      placeholder="Enter Name"
      className="border border-gray-300 rounded-3xl px-4 py-2 w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
    <input
      type="text"
      placeholder="Enter Your Email"
      className="border border-gray-300 rounded-3xl px-4 py-2 w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
    />
  </div>

  {/* <button className="w-full bg-blue-400 rounded-3xl px-4 py-2 hover:bg-blue-600 hover:font-medium transition duration-100 hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-blue-200">
    Submit
  </button> */}
 <Buttons text="cancel" color="bg-blue-700" size="sm" />
 <Buttons text="Delete" color="bg-red-700" size="md" />
 <Buttons text="Confirm" color="bg-green-700" size="lg" />

</div>
        </div>



    </>
  );
}
