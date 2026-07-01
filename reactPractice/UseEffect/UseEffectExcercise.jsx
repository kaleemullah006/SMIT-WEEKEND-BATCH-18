// import { useEffect, useState } from "react"

// function UseEffectExcercise() {
//     const [count, setCount] = useState(0)
//     const [data, setData] = useState(0)

// //     useEffect(()=>{
// // console.log("once time")
// //     },[])
//     useEffect(()=>{
// console.log("dependency change par")
//     },[data])
// //     useEffect(()=>{
// // console.log("har render par")
// //     },)
//   return (
//     <>

//     <button className="text-white border px-4 py-2 rounded-2xl font-bold" onClick={()=> setcount(count + 1)}>count: {count}</button>
//     <button className="text-white border px-4 py-2 rounded-2xl font-bold" onClick={()=> setdata(data + 1)}>Data: {data}</button>

//     </>
//   )
// }

// export default UseEffectExcercise

// import { useState, useEffect } from "react";

// export default function UseEffectExcercise() {
//   const [users, setUser] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setLoading(true);

//         const response = await fetch("https://dummyjson.com/users?limit=5");

//         const data = await response.json();

//         setUser(data.users);
//         setLoading(false);
//       } catch (err) {
//         setError("Data load nahi huwa");
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <p>loading...</p>;

//   if (error) return <p>{error}</p>;

//   return (
//     <>
//       <div className="p-6">
//         <h1 className="text-white text-2xl font-bold mb-4">Users List</h1>

//         <div className="overflow-x-auto ">
//           <table className=" text-sm text-left text-white">
//             {/* Table Head */}
//             <thead className="text-xs uppercase bg-gray-700 text-gray-300">
//               <tr>
//                 <th className="px-6 py-3">#</th>

//                 <th className="px-6 py-3">First Name</th>
//                 <th className="px-6 py-3">Last Name</th>
//                 <th className="px-6 py-3">Email</th>
//                 <th className="px-6 py-3">Age</th>
//                 <th className="px-6 py-3">Phone</th>
//                 <th className="px-6 py-3">City</th>
//               </tr>
//             </thead>

//             {/* Table Body */}
//             <tbody>
//               {users.map((user) => (
//                 <tr
//                   key={user.id}
//                   className="border-b border-gray-700 bg-gray-800 hover:bg-gray-600 transition"
//                 >
//                   <td className="px-6 py-4">{user.id}</td>

//                   <td className="px-6 py-4">{user.firstName}</td>
//                   <td className="px-6 py-4">{user.lastName}</td>
//                   <td className="px-6 py-4">{user.email}</td>
//                   <td className="px-6 py-4">{user.age}</td>
//                   <td className="px-6 py-4">{user.phone}</td>
//                   <td className="px-6 py-4">{user.age}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// import { useEffect, useState } from "react";

// function UseEffectExcercise() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);

//         const response = await fetch("https://dummyjson.com/products?limit=5");
//         const data = await response.json();

//         setProducts(data.products);
//         setError(false);
//       } catch (err) {
//         setError("data load nahi huwa");

//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProduct();
//   }, []);

//   if (loading) return <p>loading</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <>
//       <div className="min-h-screen flex flex-col">
//         <table className="border text-center bg-blue-200">
//           <thead className="border">
//             <tr className="border bg-blue-600">
//               <th className="border">id</th>
//               <th className="border">title</th>
//               <th className="border">price</th>
//               <th className="border">category</th>
//             </tr>
//           </thead>

//           <tbody className="border">
//             {products.map((product) => (
//               <tr key={product.id}>
//                 <td className="border">{product.id}</td>
//                 <td className="border">{product.title}</td>
//                 <td className="border">{product.price}</td>
//                 <td className="border">{product.category}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default UseEffectExcercise;
import { useEffect, useState } from "react";

function UseEffectExcercise() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchPosts = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://dummyjson.com/posts?limit=8")
        const data = await response.json()

        setPosts(data.posts)

      }
      catch (err) {
        setError("posts load nahi ho rhe hain")

      }
      finally {
        setLoading(false)
      }

    }
   fetchPosts() 
    
  },[])
  if (loading) return <p>loading...</p>
  if (error) return <p>{error}</p>

  return (<>

    <div className="min-h-screen flex">
      <table className="border ">
        <thead className="border bg-blue-600 ">
          <tr className="">
          <th className="border text-center px-4 py-2 ">ID</th>
          <th className="border text-center px-4 py-2 ">TITLE</th>
          <th className="border text-center px-4 py-2 ">VIEWS</th>
          <th className="border text-center px-4 py-2 ">LIKES</th>
          </tr>
          </thead>
          <tbody>
            {posts.map((post)=>(
              <tr key={post.id}>
                <td className="border text-center px-4 py-2 bg-teal-600">{post.id}</td>
                <td className="border text-center px-4 py-2 bg-teal-400">{post.title}</td>
                <td className="border text-center px-4 py-2 bg-teal-400">{post.views}</td>
                <td className="border text-center px-4 py-2 bg-teal-600">{post.reactions.likes}</td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>




  </>)


}

export default UseEffectExcercise;
