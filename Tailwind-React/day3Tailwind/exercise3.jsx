// export default function Excercise3(){
//     return(
//         <>
//         <div className="min-h-screen flex justify-center items-center bg-yellow-500 ">

//         <div className="w-64 bg-white p-6 rounded-xl shadow hover:shadow-lg hover:bg-gray-200 hover:-translate-y-1 transition duration-300 cursor-pointer">
//   <h2 className="font-bold text-lg">Tajweed Basics</h2>
//   <p className="text-gray-500 text-sm">Ghunna aur Qalqalah</p>
// </div>
//         </div>

//         </>
//     )
// }
import { Link } from "react-router-dom"
export default function Exercise3() {
  const teachers = [
    {
      name: "kaleem ullah",
      role: "Quran Teacher",
      city: "karachi",
      status: "busy",
    },
    {
      name: "Ahmad Ali",
      role: "English Teacher",
      city: "karachi",
      status: "Available",
    },
    {
      name: "Ali Ahmad",
      role: "Math Teacher",
      city: "karachi",
      status: "busy",
    },
  ];

  return (
    <>
    <Link to="/" className="fixed top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg">
  ← Back
</Link>
      <div className="min-h-screen flex flex-wrap justify-center items-center bg-yellow-400 gap-2">
        {teachers.map((teacher) => (
          <div className="w-64 bg-white rounded-3xl p-2  shadow hover:shadow-lg hover:bg-gray-200 transition duration-300  cursor-pointer text-center space-y-1"> 
            <div className="w-14 h-14 bg-red-400 rounded-full mx-auto text-center hover:bg-pink-800"></div>
            <h2 className="font-bold text-center">👤{teacher.name}</h2>

            <p className="text-sm text-center text-gray-800 hover:text-black hover:font-bold">
              📚{teacher.role}
            </p>

            <p className="text-xs text-center text-gray-500 hover:text-black hover:font-bold">
              📍{teacher.city}
            </p>

          <span className={`text-xs  font-semibold  px-4  py-1 rounded-full  ${teacher.status === "Available" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`

          }> {teacher.status} </span>


            <button className="w-full bg-pink-300 rounded-full px-2 py-1  hover:bg-pink-500  hover:-translate-y-1 transition duration-300 hover:font-bold mt-2 ">
              Click Me
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
