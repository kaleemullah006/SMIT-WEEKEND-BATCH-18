// // "use client"
// import Link from "next/link"
// import { useState } from "react"



// function SignupPage() {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [confirmPassword, setConfirmPassword] = useState("")

//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
//         e.preventDefault()

//         console.log("name====>", name)
//         console.log("email===>", email)
//         console.log("password===>", password)
//         console.log("confirmPassword===>", confirmPassword)
//     }
//   return (<>
//     <div>SignupPage</div>
//     <Link href={"/"}>Back to Home</Link>


//     <form onSubmit={handleSubmit}>
//         <input type="text"
//         value={name}
//         placeholder="enter name"
//         onChange={(e)=> setName(e.target.value)} />

    
//         <input type="text"
//         value={email}
//         placeholder="enter email"
//         onChange={(e)=> setEmail(e.target.value)} />
    
//         <input type="password"
//         value={password}
//         placeholder="enter name"
//         onChange={(e)=> setPassword(e.target.value)} />
    
//         <input type="password"
//         value={confirmPassword}
//         placeholder="enter name"
//         onChange={(e)=> setConfirmPassword(e.target.value)} />

//         <button type="submit">Signup</button>
//     </form>
//      <br />

//      <Link href={"signin"}>already acoount available</Link>
    
//   </>
//   )
// }

// export default SignupPage

"use client";

import Link from "next/link";
import { useState } from "react";

function SignupPage() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   
    console.log("email===>", email);
    console.log("password===>", password);
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        {/* Heading */}
        <h1 className="mb-2 text-center text-3xl font-bold text-gray-800">
          Create Account
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Signup to create your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

         

          {/* Email */}
          <input
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          {/* Password */}
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

        

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Signin
          </button>

        </form>

        {/* Signin Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          if you  have not an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Signup
          </Link>
        </p>

        {/* Home Link */}
        <div className="mt-4 text-center">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-800 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default SignupPage;