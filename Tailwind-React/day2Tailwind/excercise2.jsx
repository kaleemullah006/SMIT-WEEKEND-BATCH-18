// export default function Excercise2() {
//   return (
//     <div className="min-h-screen flex bg-gray-200 justify-center items-center">
//       <div className="grid grid-cols-1 md:grid-cols-3  gap-8 ">


//         <div className="w-64  bg-white rounded-3xl text-center">
//           <div className="bg-blue-700 rounded-full mx-auto text-center mt-3 w-16 h-16"></div>
//           <h2 className="text-center font-bold bg-blue-100 rounded-3xl">Kaleem Ullah</h2>
//          <p className="text-sm text-center">Developer</p>
//           <p className="text-sm text-center">Karachi</p>
//           <button className="w-full  bg-blue-700 rounded-3xl text-center">
//             Follow
//           </button>
//         </div>


//         <div className="w-64  bg-white rounded-3xl text-center">
//           <div className="bg-pink-700 rounded-full mx-auto text-center mt-3 w-16 h-16"></div>
//           <h2 className="text-center font-bold bg-blue-300 rounded-3xl">inam Ullah</h2>
//           <p className="text-sm text-center">Developer</p>
//           <p className="text-sm text-center">Karachi</p>
//           <button className="w-full bg-blue-700 rounded-3xl text-center">
//             Follow
//           </button>
//         </div>


//         <div className="w-64  bg-white rounded-3xl text-center">
//           <div className="w-14 h-14 rounded-full bg-blue-500 mx-auto mb-3"></div>
//           <h2 className="text-center font-bold bg-blue-300 rounded-3xl">Saleem Ullah</h2>
//           <p className="text-sm text-center">Developer</p>
//           <p className="text-sm text-center">Karachi</p>
//           <button className="bg-blue-700 rounded-3xl text-center   w-full">
//             Follow
//           </button>
//         </div>



//       </div>
//     </div>
//   );
// }


// MAP K SATH /////////////////////////////

// export default function Excercise2(){
//     const people = [
//   { name: "Kaleem Ullah", role: "Developer", city: "Karachi" },
//   { name: "Inam Ullah",   role: "Designer",  city: "Lahore"  },
//   { name: "Saleem Ullah", role: "QA",        city: "Islamabad" },
// ]
//     return(
//          <div className="min-h-screen flex bg-gray-200 justify-center items-center">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//   {people.map((person) => (
    
//     <div className="bg-white rounded-3xl text-center w-64 p-4">
//       <div className="w-14 h-14 rounded-full bg-blue-500 mx-auto mb-3"></div>
//       <h2 className="font-bold">{person.name}</h2>
//       <p className="text-gray-500 text-sm">{person.role}</p>
//       <p className="text-gray-400 text-sm">{person.city}</p>
//       <button className="mt-4 w-full py-2 bg-blue-700 text-white rounded-3xl">
//         Follow
//       </button>
//     </div>

//   ))}
// </div>
// </div>
//     )
// }
import { Link } from "react-router-dom"
export default function Excercise2(){
  const lessons = [
     { title: "Noorani Qaida", chapter: "Tahajji", duration: "30 min" },
  { title: "Tajweed Basics", chapter: "Ghunna ", duration: "45 min" },
  { title: "Tajweed Basics", chapter: "Ghunna ", duration: "45 min" },
  { title: "Surah Yaseen", chapter: "Ayat 1-20", duration: "1 hour" },
  { title: "Surah Yaseen", chapter: "Ayat 1-20", duration: "1 hour" },
  { title: "Surah Yaseen", chapter: "Ayat 1-20", duration: "1 hour" },
  ]

return(
<Link to="/" className="fixed top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg">
  ← Back
</Link>,

<div className="min-h-screen flex flex-wrap justify-center items-center bg-gray-300 gap-3">

    {lessons.map((lesson)=> (
      <div className="bg-white w-64 rounded-3xl p-4 ">

      <div className="bg-pink-700 rounded-full w-14 h-14 mx-auto mt-3"></div>
      <h2 className="font-bold text-center">{lesson.title}</h2>
      <p className="text-sm text-center text-gray-600">{lesson.chapter}</p>
      <p className="text-xs text-center text-gray-400">{lesson.duration}</p>
      <button className="w-full bg-red-600 hover:bg-black hover:text-white transition duration-200 active:bg-green-400 active:text-black font-bold text-center rounded-3xl text-white ">Start Lesson</button>
      </div>
      
    ))}

  </div>





    
)




}