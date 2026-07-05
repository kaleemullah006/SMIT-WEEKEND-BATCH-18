// import { useState } from "react";
// import { supabase } from "./supabase";

// function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const { error } = await supabase.auth.signUp({
//       email,
//       password,
//     });
//     if (error) {
//       setMessage(error.message);
//     } else {
//       setMessage("✅Account Ban Gaya");
//       window.location.href = "/Login";
//     }
//     setLoading(false);
//   };

//   return (
//     <>
//       <main className="bg-white md:h-screen dark:bg-neutral-900">
//         <div className="grid md:grid-cols-2 items-center w-full h-full">
//           <div className="max-md:order-1 p-4">
//             <img
//               src="https://readymadeui.com/signin-image.webp"
//               className="lg:max-w-3/4 w-full h-full aspect-square object-contain block mx-auto"
//               alt="login-image"
//             />
//           </div>

//           <div className="flex items-center px-8 py-12 bg-[#0C172C] w-full h-full lg:p-12 dark:bg-neutral-800">
//             <div className="max-w-md mx-auto w-full">
//               <div className="mb-10">
//                 <h1 className="text-2xl font-bold text-slate-50">
//                   Create an account
//                 </h1>
//               </div>

//               <form onSubmit={handleSignUp} className="space-y-6 w-full">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 text-slate-50 font-medium text-sm inline-block"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="john@readymadeui.com"
//                     required
//                     className="px-3 py-2.5 text-sm text-slate-50 rounded-md bg-gray-800 w-full outline-1 -outline-offset-1 outline-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:bg-neutral-700 dark:outline-neutral-600"
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="mb-2 text-slate-50 font-medium text-sm inline-block"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     placeholder="••••••••"
//                     required
//                     className="px-3 py-2.5 text-sm text-slate-50 rounded-md bg-gray-800 w-full outline-1 -outline-offset-1 outline-gray-700 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:bg-neutral-700 dark:outline-neutral-600"
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <a className="text-white font-bold" href="/login">Already have account ? <span className="bg-blue-400 rounded-3xl px-4 py-1">Login</span></a>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
//                 >
//                   {loading ? "Loading" : "Signup"}
//                 </button>
//                 {message && (
//                   <p
//                     className="text-center text-sm mt-2"
//                     style={{
//                       color: message.includes("✅") ? "#4ade80" : "#f87171",
//                     }}
//                   >
//                     {message}
//                   </p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

// export default Signup;


import { useState } from "react";
import { supabase } from "./supabase";

export default function Signup(){
 const [ email, setEmail] = useState("")
 const [ name, setName] = useState("")
   const [ password , setPassword] = useState("")
   const [ message , setMessage] = useState("")
    const  [loading, setLoading] = useState(false)

const handleSignUp = async (e)=>{
    e.preventDefault()
    setLoading(true)

    const {error} = await supabase.auth.signUp({
       email,
       password,
       options:{
        data:{
            full_name: name
        }
       }
        
        });
        if(error){
            setMessage(error.message)
        }
        else{
            setMessage("Account Ban Gaya")
           window.location.href = "/Login"
        }
        setLoading(false)
    }


return(<>
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSignUp} className="space-y-6">

            {/* EMAIL  */}

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
            </div>


            {/* NAME  */}

            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-100">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="name"
                  type="name"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  onChange={(e)=> setName(e.target.value)}
                />
              </div>
            </div>

            <div>
             <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                onChange={(e)=> setPassword(e.target.value)}/>
              </div>
            </div>
           <div>
                <a className="text-white font-bold " href="/Login">Already You Have Account ?  <span className="bg-blue-500 px-4 py-1 rounded-3xl">Login</span> </a></div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                {loading ? "Loading" : "SignUp"}
              </button>
               {message && (
                  <p
                    className="text-center text-sm mt-2"
                    style={{
                      color: message.includes("✅") ? "#4ade80" : "#f87171",
                    }}
                  >
                    {message}
                  </p>
                )}
            </div>
          </form>

          
        </div>
      </div>

</>)
}

