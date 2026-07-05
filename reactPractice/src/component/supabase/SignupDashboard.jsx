// import { useEffect, useState } from "react";
// import { supabase } from "./supabase";

// function SignupDashboard() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getUser = async () => {
//       const { data } = await supabase.auth.getUser();

//       if (!data.user) {
//         window.location.href = "/Login";
//       } else {
//         setUser(data.user);
//       }
//       setLoading(false);
//     };
//     getUser();
//   }, []);


// const handleClick = async ()=>{
//   await supabase.auth.signOut()
//   window.location.href = "/Login"
// }
// if(loading)return(
//   <p>loading</p>
// )
//   return (
//     <>
//       <h1>Dashboard</h1>
//       <p>logged in as:</p>
//       <p>{user.email}</p>
//       <p>{user.user_metadata?.full_name}</p>

//       <button className="bg-blue-300 px-4 py-2 rounded-3xl" onClick={handleClick}>Logout</button>
//     </>
//   );
// }

// export default SignupDashboard;


// import { useEffect, useState } from "react"
// import { supabase } from "./supabase"

// export default function Dashboard() {
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const getUser = async () => {
//       const { data } = await supabase.auth.getUser()

//       if (!data.user) {
//         // Login nahi — wapas bhejo!
//         window.location.href = "/Login"
//       } else {
//         // Login hai — user save karo
//         setUser(data.user)
//       }
//       setLoading(false)
//     }
//     getUser()
//   }, [])

//   const handleLogout = async () => {
//     await supabase.auth.signOut()
//     window.location.href = "/login"
//   }

//   if (loading) return (
//     <p className="text-white text-center mt-10">⏳ Loading...</p>
//   )

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6">

//       <h1 className="text-3xl font-bold">Dashboard 🎉</h1>

//       <div className="bg-gray-800 p-6 rounded-2xl text-center">
//         <p className="text-gray-400 text-sm">Logged in as:</p>
//         <p className="text-green-400 font-bold text-lg">{user.email}</p>
//         <p className="text-blue-400 text-sm mt-1">
//           {user.user_metadata?.full_name}
//         </p>
//       </div>

//       <button
//         onClick={handleLogout}
//         className="bg-red-700 text-white font-bold py-2 px-6 rounded-3xl hover:-translate-y-1 transition duration-300"
//       >
//         Logout 🚪
//       </button>

//     </div>
//   )
// }
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function Dashboard2() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();

            if (!data.user) {
                window.location.href = "/Login";
            } else {
                setUser(data.user);
            }
            setLoading(false);
        };
        getUser();
    }
, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = "/login";
    };
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6">
            <h1 className="text-3xl font-bold">Dashboard 🎉</h1>
            <div className="bg-gray-800 p-6 rounded-2xl text-center">
                <p className="text-gray-400 text-sm">Logged in as:</p>
                <p className="text-green-400 font-bold text-lg">{user?.email}</p>
                <p className="text-blue-400 text-sm mt-1">
                    {user?.user_metadata?.full_name}
                </p>
            </div>
            <button
                onClick={handleLogout}
                className="bg-red-700 text-white font-bold py-2 px-6 rounded-3xl hover:-translate-y-1 transition duration-300"
            >
                Logout 🚪
            </button>
        </div>
    );
}
