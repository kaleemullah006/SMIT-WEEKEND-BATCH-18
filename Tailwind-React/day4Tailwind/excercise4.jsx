import { Link } from "react-router-dom";

export default function Exercise4() {
  return (
    <>
      <nav className="flex flex-wrap  justify-between items-center bg-blue-200 px-4 py-2 shadow shadow-blue-400 gap-2">
    

        <div className="font-bold shadow shadow-blue-400 rounded-3xl px-2 hover:bg-blue-400 hover:text-white">
          MyApp
        </div>

        <div className="flex gap-6 bg-blue-300 rounded-3xl px-4 py-1 ">
          <a
            className="font-bold hover:text-white shadow shadow-blue-400 px-2 rounded-3xl hover:bg-blue-400"
            href=""
          >
            Home
          </a>
          <a
            className="font-medium shadow shadow-blue-400 rounded-3xl px-2  hover:bg-blue-400 hover:text-white"
            href=""
            >
            About
          </a>
          <a
            className="font-medium hover:text-white shadow shadow-blue-400 rounded-3xl px-2 hover:bg-blue-400"
            href=""
            >
            Contact
          </a>
        </div>

        <button className="bg-blue-400 px-4 py-2 rounded-3xl hover:bg-blue-600 font-bold hover:text-white">
          Login
        </button>


              
      </nav>


      {/* INPUT FORM  */}

     <div className="w-[90%] max-w-90 flex flex-wrap justify-center items-center pt-8 pl-8 ">

     <div className="flex flex-col gap-4 border border-blue-400 rounded-3xl px-4 py-2 w-90  justify-center items-center shadow-lg shadow-blue-300 hover:shadow-blue-500 ">
        <label className="block w-full pl-2 fon-medium text-gray-700">Name:</label>

      <input type="text" 
      placeholder="Enter Name"
      className="border border-gray-300 w-full px-4 py-2 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 " />

<label className="block w-full pl-2 fon-medium text-gray-700">Email:</label>

      <input type="text"
      placeholder="Enter Email"
      className="border border-gray-300 w-full px-4 py-2 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200" />

      <textarea className="w-full border border-gray-400 rounded-2xl px-4 py-1 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-blue-300"
      placeholder="Enter message..." rows={4}></textarea>

      <button className="w-full bg-blue-300 rounded-3xl px-4 py-2 hover:bg-blue-400  transition duration-100 hover:-translate-y-1 hover:text-white">Submit</button>



     </div>





     </div>









    </>
  );
}
