// import { supabase } from "../supabase";
// import { useState, useEffect } from "react";
// export default function Dashboardexe() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getUser = async () => {
//       const { data } = await supabase.auth.getUser();

//       if (!data.user) {
//         window.location.href = "/Signinexe";
//       } else {
//         setUser(data.user);
//       }
//       setLoading(false);
//     };
//     getUser();
//   }, []);

//   const handleLogout = async () => {
//     await supabase.auth.signOut();
//     window.location.href = "/Signinexe";
//   };
//   return (
//     <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-center  ">
//       <div className="w-80 bg-gray-800 rounded-3xl space-y-2 border border-white p-6">
//         <h1 className="text-3xl font-bold">Dashboard</h1>
//         <div className="bg-gray-800 p-6 rounded-2xl text-center">
//           <p className="text-gray-400 text-sm">Logged in as:</p>
//           <p className="text-green-400 font-bold text-lg">{user?.email}</p>
//           <p className="text-blue-400 text-sm mt-1">
//             Course: {user?.user_metadata?.course}
//           </p>
//           <p className="text-blue-400 text-sm mt-1">
//            Name: {user?.user_metadata?.full_name}
//           </p>
//         </div>
//         <button
//           className="bg-gray-900 border border-white text-white rounded-3xl px-4 py-2 font-bold"
//           onClick={handleLogout}
//         >
//           SignOut
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react"

// export default function Pagination() {
//   const [users, setUsers] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [totalPages, setTotalPages] = useState(0)

//   const limit = 10 // ← har page par 10 users

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setLoading(true)

//         // skip calculate karo
//         const skip = (currentPage - 1) * limit

//         const response = await fetch(
//           `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
//         )
//         const data = await response.json()

//         setUsers(data.users)

//         // total pages calculate karo
//         setTotalPages(Math.ceil(data.total / limit))

//       } catch (err) {
//         console.error(err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchUsers()
//   }, [currentPage]) // ← currentPage badlega toh fetch dobara chalega!

//   if (loading) return (
//     <p className="text-white text-center mt-10">⏳ Loading...</p>
//   )

//   return (
//     <div className="min-h-screen bg-gray-950 p-6">

//       <h1 className="text-white text-2xl font-bold mb-6 text-center">
//         Users List
//       </h1>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-white text-sm text-left">
//           <thead className="bg-gray-700 uppercase text-xs text-gray-300">
//             <tr>
//               <th className="px-4 py-3">ID</th>
//               <th className="px-4 py-3">Name</th>
//               <th className="px-4 py-3">Email</th>
//               <th className="px-4 py-3">Age</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr
//                 key={user.id}
//                 className="border-b border-gray-700 bg-gray-800 hover:bg-gray-700 transition"
//               >
//                 <td className="px-4 py-3">{user.id}</td>
//                 <td className="px-4 py-3">{user.firstName} {user.lastName}</td>
//                 <td className="px-4 py-3">{user.email}</td>
//                 <td className="px-4 py-3">{user.age}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Buttons */}
//       <div className="flex justify-center items-center gap-4 mt-8">

//         {/* Previous Button */}
//         <button
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-indigo-600 text-white rounded-xl disabled:opacity-40 hover:bg-indigo-500 transition"
//         >
//           ← Prev
//         </button>

//         {/* Page Numbers */}
//         <div className="flex gap-2">
//           {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//             <button
//               key={page}
//               onClick={() => setCurrentPage(page)}
//               className={`px-3 py-1 rounded-lg text-sm font-bold transition ${
//                 currentPage === page
//                   ? "bg-indigo-600 text-white"      // active page
//                   : "bg-gray-700 text-gray-300 hover:bg-gray-600" // other pages
//               }`}
//             >
//               {page}
//             </button>
//           ))}
//         </div>

//         {/* Next Button */}
//         <button
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-indigo-600 text-white rounded-xl disabled:opacity-40 hover:bg-indigo-500 transition"
//         >
//           Next →
//         </button>

//       </div>

//       {/* Page Info */}
//       <p className="text-gray-400 text-center mt-4 text-sm">
//         Page {currentPage} of {totalPages}
//       </p>

//     </div>
//   )
// }

import { useState, useEffect } from "react"

export default function Pagination() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const limit = 8 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true) 
        const skip = (currentPage - 1) * limit
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
       
        const data = await response.json()
      
        setProducts(data.products)
        setTotalPages(Math.ceil(data.total / limit))
      }   
    catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }
  fetchProducts()
  }
, [currentPage])
  if (loading) return (
    <p className="text-white text-center mt-10">⏳ Loading...</p>
  ) 
  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <h1 className="text-white text-2xl font-bold mb-6 text-center"> 
        Products List
      </h1>
      <table className="w-full text-white text-sm text-left">
        <thead className="bg-gray-700 uppercase text-xs text-gray-300">
          <tr>    
            <th>image</th>
            <th>price</th>
            <th>title</th>
            <th>rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-gray-600">
              <td>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-20 h-20 h-48 object-cover rounded-lg mb-4"
                />
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.title}</td>
              <td>{product.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl disabled:opacity-40 hover:bg-indigo-500 transition"
        >
          ← Prev
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg text-sm font-bold transition ${
                currentPage === page
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl disabled:opacity-40 hover:bg-indigo-500 transition"
        >
          Next →
        </button>
      </div>
      <p className="text-gray-400 text-center mt-4 text-sm">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  )
} 


   
  