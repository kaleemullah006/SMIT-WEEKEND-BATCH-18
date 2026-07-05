// import { supabase } from "../supabase"
// import { useState } from "react";

// export default function Signupexe() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [name, setName] = useState("");
//   const[course, setCourse] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     const { data, error } = await supabase.auth.signUp({
//       email,
//       password,
//       options: {
//         data: {
//           full_name: name,
//           course: course
//         },
//       },
//     });
//     if (error) {
//         setError(error.message);
//     } else {
//         window.location.href = "/loginexe"; 
//     }
//     setLoading(false);
// };
// if (loading) {
//   return <p>loading...</p>;
// }
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="border border-gray-300 rounded px-2 py-1 mb-4"
//         />

//         <div className="mt-4 " >
//           <label className="" htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border border-gray-300 rounded px-2 py-1"
//           />
//         </div>
//         <div className="mt-4">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border border-gray-300 rounded px-2 py-1"
//           />
//         </div>
//         <select value={course} onChange={(e) => setCourse(e.target.value)} className="border border-gray-300 rounded px-2 py-1 mt-4">
//           <option value="">Select an option</option>
//           <option value="python">python</option>
//           <option value="javascript">java script</option>
//           <option value="java">java</option>
//         </select>
//         <div className="mt-4">
//           <a href="/login">Already have an account? Log in</a>
//         </div>

//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//           type="submit"
//           disabled={loading}
//         >
//           {loading ? "Signing up..." : "Sign Up"}
//         </button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }



import { supabase } from "../supabase"
import { useState } from "react";

export default function Signupexe() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
          course: course
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      window.location.href = "/signinexe"
    }
    setLoading(false);
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <p className="text-white text-xl animate-pulse">⏳ Creating Account...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

      {/* Card */}
      <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">🎓</div>
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
          <p className="text-gray-400 text-sm mt-1">Student Portal mein khush aamdeed!</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Ahmed Ali"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-800 text-white rounded-xl px-4 py-3 outline-none border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition placeholder:text-gray-500"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-300 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="ahmed@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 text-white rounded-xl px-4 py-3 outline-none border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition placeholder:text-gray-500"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-gray-300 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-800 text-white rounded-xl px-4 py-3 outline-none border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition placeholder:text-gray-500"
            />
          </div>

          {/* Course */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm font-medium">
              Select Course
            </label>
            <select
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
              className="bg-gray-800 text-white rounded-xl px-4 py-3 outline-none border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            >
              <option value="" disabled>-- Course Select Karo --</option>
              <option value="Python">🐍 Python</option>
              <option value="JavaScript">⚡ JavaScript</option>
              <option value="Java">☕ Java</option>
              <option value="react">📍React js</option>
            </select>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-xl px-4 py-3">
              <p className="text-red-400 text-sm">❌ {error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition duration-300 hover:-translate-y-1 shadow-lg shadow-indigo-500/20 mt-2"
          >
            Create Account 🚀
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-400 text-sm">
            Already have an account?{" "}
            
             <a href="/signinexe" className="text-indigo-400 hover:text-indigo-300 font-semibold transition">
              Log in
            </a>        
          </p>

        </form>
      </div>
   </div>
  );
}
