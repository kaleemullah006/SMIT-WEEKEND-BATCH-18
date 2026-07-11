// import {  useEffect ,useState} from 'react'

// import { useEffect } from "react"

// const UseEffect = () => {
//   const [count, setCount] = useState(0)

// // function clickHandler() {
// //   console.log('button clicked')
// // }
// // clickHandler()
// useEffect(() => {
//      console.log("App Mounted");
//   console.log("First time render");
//   console.log("Component is now visible");
//   }, [])

//   return (
//     <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
//      {/* <h1>component mounted</h1>
//      <button onClick={clickHandler}>Click me</button>
//      <br />*/}
//      <div className='flex flex-col items-center justify-center  bg-blue-400 border-2 border-white rounded-3xl p-4 w-70 h-70 text-white font-bold space-y-1 shadow-lg shadow-blue-600'>
//         <p className='text-xl font-bold text-black rounded-3xl border-2 px-4 py-1 border-white'>Count: { count}</p>
//      <button className='bg-blue-600 text-white hover:bg-blue-500 hover:text-white font-bold py-2 px-4 border-2 border-white rounded-3xl' onClick={() => setCount(count + 1)}>Increment</button>
//      </div>
//     </div>
//   )
// }

// export default UseEffect
// import { useEffect, useState } from "react"

// function UseEffect() {
//   const [count, setCount] = useState(0)
//   const [timer, settimer] =useState(true)
//   function clickHandler(){
//     settimer(!timer)
//     console.log("timer false huwa")
//   }
// useEffect(() => {
//  const timer = setInterval(() => {
//   console.log("timer running")
//  }, 1000);

//   return () => {
//     clearInterval(timer)
//     console.log("timer stopped")
//   }
// }, [count,clickHandler])

//   return (<>

//   <h1>{count}</h1>

//   <button onClick={()=> setCount(count + 1)}>click me</button><br />
//   <button onClick={clickHandler}>{timer ? "Hide timer" : "Show timer"}</button>

//   </>

//   )

// }

// export default UseEffect

// import { useEffect } from "react"

// function Practice() {

//   useEffect(() => {

//   console.log("component Loaded")

//   }, [])

//   return (<>
//     <div>useeffect</div>

//     <button onClick={()=> console.log("button Clicked")}>click me</button>
//   </>
//   )
// }

// export default  Practice
// import { useEffect, useState } from "react"

// function Practice() {
//   const[users, setUsers] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {

//     const fetchPosts = async ()=>{

//       const response = await fetch("https://jsonplaceholder.typicode.com/users")

//       const data = await response.json()
//       setUsers(data)
//       setLoading(false)

//     }

//     fetchPosts()

//   }, [])
//   if(loading)return
//     <p>loading...</p>

//   return (<>

// {users.map((user)=>(
//   <li key={user.id}>{user.email}</li>
// ))}

//   </>
//   )
// }

// export default  Practice

// import { useEffect, useState } from "react";

// function Posts() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {

//       fetchPosts();

//   }, []);
//   async function fetchPosts() {

//      try {
//        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

//        if (!response.ok) {
//        throw new Error("Something went wrong");
//      }

//        const data = await response.json()

//        setPosts(data)
//        setLoading(false)
//      }
// catch (error) {
//        setError("failed to load data")
//        setLoading(false)

//      }
//    }

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   return (<>
//     <ul>

//       {posts.map((post)=>(
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//     <button onClick={fetchPosts}> click me</button>
//       </>
//   );
// }

// export default Posts;

// import { useEffect, useState } from "react";

// function Posts() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function fetchPosts() {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts"
//         );

//         if (!response.ok) {
//           throw new Error("Something went wrong");
//         }

//         const data = await response.json();

//         setPosts(data);
//         setLoading(false);

//       } catch (error) {
//         setError("Failed to load posts");
//         setLoading(false);
//       }
//     }

//     fetchPosts();

//   }, []);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2>{error}</h2>;
//   }

//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>
//           {post.title}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default Posts;

// import { useState, useEffect } from "react";

// import axios from "axios"
// export default function Data (){
//   const [users, setUsers] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState("")

//  async  function fetchUser(){

//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users")

//       setUsers(response.data)
//       setLoading(false)

//     } catch (error) {
//       setError("failed to load data")
//       setLoading(false)
//     }finally{
//       setLoading(false)
//     }

//   }

//   useEffect(()=>{
//     fetchUser()
//   },[])

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }
//   if (error){
//     return <h2>{error}</h2>
//   }

//   return(<>

// <table>
//   <thead><tr><th>id</th>
//   <th>fullName</th>
//   <th>lastName</th>
//   <th>email</th>
//   <th>age</th></tr></thead>
//   <tbody>
//     {users.map((user)=>(

//       <tr key={user.id}>
//       <td>{user.id}</td>
//     <td>{user.name}</td>
//     <td>{user.name}</td>
//     <td>{user.email}</td>
//     <td>{user.city}</td>
//     </tr>
//     ))}
//     </tbody>

// </table>
// </>)

// }
// import { useState, useEffect } from "react";
// import axios from "axios";

// function UseEffect() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   async function fetchUser(){
//     try {
// setLoading(true)
//       const response = await axios.get("https://jsonplaceholder.typicode.com/users")

//       setUsers(response.data)

//     } catch (error) {
//       if (error.response){
//         setError(`Server Error ${error.response.status}`)
//       }
//       else{
//         setError("Network error")
//       }

//     }
//     finally{
//       setLoading(false)
//     }
//   }

//   useEffect(()=>{
//     fetchUser()
//   },[])

// if(loading){
//   return <h2>Loading...</h2>
// }

//   if(error){
//     return <h2>{error}</h2>

//   }

//   return(<>
//   <div className="flex flex-wrap justify-center items-center gap-2">

//   {
//     users.map((user)=>(
//       <div className="border-2 border-blue-400  w-60 rounded-3xl px-4 py-2 " key={user.id}>
//         <h2 className="text-lg font-bold">{user.name}</h2>

//         <p>{user.email}</p>

//       </div>
//     ))
//   }

//   </div>

//   </>)
//    ;
// }

// export default UseEffect;

// import { useState } from "react";
// import axios from "axios";

// function UpdateProduct() {
//   const [productName, setProductName] = useState("");
//   const [price, setPrice] = useState();
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function createProduct(e) {
//     try {
//       setLoading(true);

//       const response = await axios.put(
//         "https://jsonplaceholder.typicode.com/posts/1",
//         {
//           title: productName,
//           body: price,
//           userId: 1,
//         },
//       );

//       setMessage("product updated");
//       setProductName("");
//       setPrice("");
//       console.log(response.data);
//     } catch (error) {
//       setMessage("Failed to update product");
//     } finally {
//       setLoading(false);
//     }
//   }
 

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter Product"
//         value={productName}
//         onChange={(e) => setProductName(e.target.value)}
//       />

//       <input
//         type="number"
//         placeholder="Enter Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       <button onClick={createProduct}>
//         {loading ? "Updating..." : "update Product"}
//       </button>
//       <h2>{message}</h2>
//     </>
//   );
// }

// export default UpdateProduct;
import { useState } from "react";
import axios from "axios";

function DeleteProduct() {
 
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function createProduct() {
    try {
      setLoading(true);

      const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/posts/1"
  
      );

      setMessage("product deleted successfully");
      
      
    } catch (error) {
      setMessage("Failed to delete product");
    } finally {
      setLoading(false);
    }
  }
 

  return (
    <>
    

     
      <button onClick={createProduct}>
        {loading ? "Deleting..." : "Delete Product"}
      </button>
      <h2>{message}</h2>
    </>
  );
}

export default DeleteProduct;
